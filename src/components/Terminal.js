import React, { useState, useEffect, useRef } from 'react';
import { Minimize2, Maximize2, X, CornerDownLeft, Sparkles, Sun, Moon } from 'lucide-react';
import { PORTFOLIO_DB, FULL_CONTEXT, PROFILE, format } from '../data/portfolio';
import './Terminal.css';

/* Words that match every document and so carry no retrieval signal. */
const STOP_WORDS = new Set([
  'the', 'and', 'you', 'your', 'his', 'her', 'about', 'what', 'who', 'how', 'why', 'where', 'when',
  'tell', 'give', 'show', 'list', 'does', 'did', 'has', 'have', 'are', 'was', 'were', 'for', 'with',
  'can', 'any', 'kanishkar', 'kane', 'him', 'from', 'this', 'that', 'there',
]);

/* Client-side retrieval over the real portfolio data. */
const retrieveContext = (query) => {
  const words = query
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));

  /* "who is he?" is all stop words — that's the About section. */
  if (words.length === 0) {
    const about = PORTFOLIO_DB.find((d) => d.id === 'about');
    return {
      context: `[${about.title}]\n${about.content}`,
      targetSection: about.section,
      matched: true,
      top: about,
    };
  }

  const scored = PORTFOLIO_DB.map((doc) => {
    let score = 0;
    const haystack = `${doc.id} ${doc.title} ${doc.keywords} ${doc.content}`.toLowerCase();
    const keywords = doc.keywords.split(/\s+/);

    words.forEach((word) => {
      if (doc.id === word) score += 12;
      if (keywords.includes(word)) score += 6;
      /* Shared-stem match, so "interned" still reaches "internship" and
         "published" reaches "publication". */
      else if (word.length >= 5 && keywords.some((k) => k.length >= 5 && k.slice(0, 5) === word.slice(0, 5)))
        score += 5;
      if (doc.title.toLowerCase().includes(word)) score += 4;

      const matches = haystack.match(new RegExp(`\\b${word}\\b`, 'g'));
      if (matches) score += matches.length * 2;
      else if (haystack.includes(word)) score += 1;
    });

    return { ...doc, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const relevant = scored.filter((d) => d.score > 0);

  if (relevant.length === 0) {
    return { context: '', targetSection: null, matched: false };
  }

  const context = relevant
    .slice(0, 2)
    .map((d) => `[${d.title}]\n${d.content}`)
    .join('\n\n');

  return {
    context,
    targetSection: relevant[0].score >= 6 ? relevant[0].section : null,
    matched: true,
    top: relevant[0],
  };
};

// API Call to Gemini Live LLM
const GEMINI_MODEL = 'gemini-3.5-flash';

/* A key from the build-time env, or one the visitor saved via `setkey`. */
const resolveApiKey = () => {
  const key = process.env.REACT_APP_GEMINI_API_KEY || localStorage.getItem('gemini_api_key');
  if (!key || !key.trim() || key === 'your_gemini_api_key_here') return null;
  return key.trim();
};

const callGeminiAPI = async (query, context, apiKey) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  /*
   * Retrieved sections come first; the full portfolio follows as a backstop so
   * cross-section questions ("which project used Flutter?") still resolve
   * against real data instead of the model's imagination.
   */
  const systemInstruction = `You are ${PROFILE.name}'s AI Portfolio Copilot, embedded in his interactive terminal.

Answer ONLY from the portfolio data below. It is the complete and authoritative record.
If something is not in the data, say plainly that it is not in the portfolio — never invent.

${context ? `MOST RELEVANT SECTIONS:\n${context}\n\n` : ''}FULL PORTFOLIO:
${FULL_CONTEXT}

Style: casual, friendly, conversational, and extremely brief (typically 1-2 short sentences, under 35 words). Answer like a relaxed peer developer. No large paragraphs, no bullet lists unless specifically asked, no bold text. Keep it concise, direct, and casual.`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: query }] }],
      systemInstruction: { parts: [{ text: systemInstruction }] },
      generationConfig: {
        /* Generous ceiling: this model reasons before answering, and a tight
           cap gets spent on thinking, returning a candidate with no text. */
        maxOutputTokens: 2048,
        temperature: 0.2,
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData?.error?.message || `HTTP ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const candidate = data?.candidates?.[0];
  const text = candidate?.content?.parts?.map((p) => p.text).filter(Boolean).join('') || '';

  if (!text) {
    const reason = candidate?.finishReason || data?.promptFeedback?.blockReason;
    throw new Error(
      reason === 'MAX_TOKENS'
        ? 'response exceeded the token budget'
        : `empty response from Gemini${reason ? ` (${reason})` : ''}`
    );
  }

  return text.trim();
};

const Terminal = ({ isOpen, onClose, navigateToSection }) => {
  const [history, setHistory] = useState([
    { text: 'Initializing Terminal Session...', type: 'system' },
    { text: 'AI Copilot active. Type help to see available commands.', type: 'ai-welcome' }
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setHistory([
      { text: `Portfolio session ready — ${PORTFOLIO_DB.length} sections indexed.`, type: 'system' },
      resolveApiKey()
        ? { text: `Live mode (${GEMINI_MODEL}). Ask anything about the portfolio, or type 'help'.`, type: 'ai-welcome' }
        : {
            text: "Local mode — answers come straight from the portfolio data. Type 'setkey <gemini-api-key>' for conversational replies.",
            type: 'ai-welcome',
          },
    ]);
  }, []);

  /* Every command prints from the shared portfolio data. */
  const staticCommands = {
    help:
      'Available Commands:\n' +
      '  about          - Professional summary\n' +
      '  skills         - Technical stack by discipline\n' +
      '  projects       - Project work and stacks\n' +
      '  internships    - Industry experience\n' +
      '  education      - Academic qualifications\n' +
      '  publications   - Conference papers\n' +
      '  certifications - Credentials earned\n' +
      '  events         - Events organised\n' +
      '  contact        - Contact details & profiles\n' +
      '  setkey <key>   - Connect to a live Gemini LLM\n' +
      '  removekey      - Remove the saved API key\n' +
      '  clear          - Clear the terminal\n' +
      '  history        - Print executed inputs\n\n' +
      "Tip: plain questions work too — 'what is his CGPA?', 'which project used Flutter?'",
    about: format.about(),
    skills: format.skills(),
    projects: format.projects(),
    internships: format.internships(),
    education: format.education(),
    publications: format.publications(),
    certifications: format.certifications(),
    events: format.events(),
    contact: format.contact(),
  };

  const aiSuggestions = [
    'What is his CGPA?',
    'Which projects use Agentic AI?',
    'Where has he interned?',
    'What did he publish?',
    'How can I contact him?',
  ];

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
    scrollToBottom();
  }, [isOpen, history, isMinimized, isThinking]);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  /* Offline answer: return the retrieved portfolio section verbatim. */
  const getLocalAIResponse = (query) => {
    const { context, targetSection, matched, top } = retrieveContext(query);

    if (matched) {
      return { 
        text: `Found something! Check out the "${top.title}" section. I've automatically scrolled the page there for you.`, 
        action: targetSection 
      };
    }

    const q = query.toLowerCase();
    if (/\b(hi|hello|hey|yo)\b/.test(q)) {
      return {
        text: `Hello. I'm ${PROFILE.name}'s portfolio copilot.\nAsk about his projects, skills, education, internships, publications or certifications — or type 'help'.`,
        action: null,
      };
    }

    return {
      text:
        "No section of the portfolio matched that.\n\nTry:\n  - What is his CGPA?\n  - Which projects use RAG?\n  - Where has he interned?\n  - What certifications does he hold?",
      action: null,
    };
  };

  const handleCommand = (cmdText) => {
    const trimmedCmd = cmdText.trim();
    if (trimmedCmd === '') return;

    // Add to input history list
    const newCmdHistory = [...cmdHistory, cmdText];
    setCmdHistory(newCmdHistory);
    setHistoryIndex(newCmdHistory.length);

    // Add prompt immediately
    const updatedHistory = [...history, { text: `guest@kanishkar.cli:~$ ${cmdText}`, type: 'input' }];
    setHistory(updatedHistory);
    setInput('');

    const lowerCmd = trimmedCmd.toLowerCase();

    // Check system commands
    if (lowerCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (lowerCmd === 'history') {
      setHistory([...updatedHistory, { text: newCmdHistory.join('\n'), type: 'output' }]);
      return;
    }

    // Set Gemini Key Command
    if (lowerCmd.startsWith('setkey ')) {
      const key = trimmedCmd.substring(7).trim();
      if (key) {
        localStorage.setItem('gemini_api_key', key);
        setHistory([...updatedHistory, { text: `Key saved. Live mode active (${GEMINI_MODEL}).`, type: 'system' }]);
      } else {
        setHistory([...updatedHistory, { text: 'Usage: setkey <your-gemini-api-key>', type: 'error' }]);
      }
      return;
    }

    // Remove Gemini Key Command
    if (lowerCmd === 'removekey') {
      localStorage.removeItem('gemini_api_key');
      setHistory([...updatedHistory, { text: 'Key removed. Back to local mode.', type: 'system' }]);
      return;
    }

    // AI Processing with loader state
    setIsThinking(true);

    const apiKey = resolveApiKey();
    const { context, targetSection } = retrieveContext(trimmedCmd);

    const goTo = (section, note) => {
      if (!section || !navigateToSection) return;
      navigateToSection(section);
      setHistory((prev) => [...prev, { text: `Navigated to #${section}${note ? ` ${note}` : ''}.`, type: 'system' }]);
    };

    // Execute static CLI command directly if matched
    if (staticCommands[lowerCmd]) {
      const doc = PORTFOLIO_DB.find((d) => d.id === lowerCmd);

      setHistory((prev) => [...prev, { text: staticCommands[lowerCmd], type: 'output', isAI: false }]);
      setIsThinking(false);
      goTo(doc?.section);
    } else if (apiKey) {
      // Live Gemini call, grounded on the retrieved portfolio sections
      callGeminiAPI(trimmedCmd, context, apiKey)
        .then((geminiResponse) => {
          setHistory((prev) => [...prev, { text: geminiResponse, type: 'output', isAI: true }]);
          goTo(targetSection, '(matched section)');
        })
        .catch((err) => {
          /* Never leave the question unanswered — fall back to the local data. */
          const local = getLocalAIResponse(trimmedCmd);
          setHistory((prev) => [
            ...prev,
            { text: `Gemini unavailable: ${err.message}. Answering from local data.`, type: 'error' },
            { text: local.text, type: 'output', isAI: true },
          ]);
          goTo(local.action);
        })
        .finally(() => {
          setIsThinking(false);
        });
    } else {
      // Offline: answer straight from the portfolio data
      setTimeout(() => {
        const local = getLocalAIResponse(trimmedCmd);
        setHistory((prev) => [...prev, { text: local.text, type: 'output', isAI: true }]);
        goTo(local.action);
        setIsThinking(false);
      }, 300);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIndex < cmdHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[nextIndex]);
      } else if (historyIndex === cmdHistory.length - 1) {
        setHistoryIndex(cmdHistory.length);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = Object.keys(staticCommands).find(c => c.startsWith(input.toLowerCase()));
      if (match) {
        setInput(match);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`terminal-wrapper glass ${isMinimized ? 'minimized' : ''} ${isLightMode ? 'terminal-light' : ''} animate-slide-up`}>
      {/* Header */}
      <div className="terminal-header" onClick={() => isMinimized && setIsMinimized(false)}>
        <div className="terminal-title">
          <span>Terminal Assistant</span>
        </div>

        <div className="header-controls">
          <button
            className="control-btn theme-toggle-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsLightMode(!isLightMode);
            }}
            title={isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
            aria-label="Toggle Theme"
          >
            {isLightMode ? <Moon size={14} /> : <Sun size={14} />}
          </button>

          <button
            className="control-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(!isMinimized);
            }}
            title={isMinimized ? "Restore" : "Minimize"}
          >
            {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
          </button>

          <button
            className="control-btn close-btn"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            title="Close"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Terminal logs body */}
      {!isMinimized && (
        <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
          <div className="logs-container">
            {history.map((log, idx) => (
              <div key={idx} className={`log-line ${log.type} ${log.isAI ? 'ai-response' : ''}`}>
                {log.isAI && <span className="ai-badge"><Sparkles size={10} /> AI: </span>}
                {log.text}
              </div>
            ))}
            {isThinking && (
              <div className="log-line system thinking-dots">
                <Sparkles size={12} className="animate-spin text-emerald-400 inline-block mr-1" />
                AI is thinking<span>.</span><span>.</span><span>.</span>
              </div>
            )}
            <div ref={terminalEndRef} />
          </div>

          {/* Autocomplete helper panel */}
          <div className="autocomplete-suggestions">
            <span className="suggestions-label"><Sparkles size={12} /> Suggestions:</span>
            {aiSuggestions.map((suggestion, idx) => (
              <button
                key={idx}
                className="suggest-badge"
                onClick={() => setInput(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Input field */}
          <div className="input-line-container">
            <span className="input-prompt">ask@copilot:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              placeholder="Ask anything or type command..."
              aria-label="Terminal Command Input"
              disabled={isThinking}
            />
            <span className="enter-hint">
              Press Enter <CornerDownLeft size={10} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Terminal;
