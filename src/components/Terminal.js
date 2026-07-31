import React, { useState, useEffect, useRef } from 'react';
import { Minimize2, Maximize2, X, CornerDownLeft, Sparkles, Bot, Sun, Moon } from 'lucide-react';
import './Terminal.css';

// Client-side RAG Knowledge Base
const PORTFOLIO_DB = [
  {
    id: "about",
    title: "About Kanishkar R",
    content: "Kanishkar R is a results-oriented Software Developer. He specializes in building high-fidelity web interfaces, database microservices, and orchestrating retrieval-augmented AI workflows (RAG) using modern frameworks. Key focus: applying technical competency to solve practical problems. He loves bridging frontend interfaces with powerful AI, backend microservices, and databases. He studies at PSG College of Technology."
  },
  {
    id: "skills",
    title: "Technical Skills & Stacks",
    content: "Programming Languages: Python, JavaScript, Java, C++. Frontend: React.js, Next.js, HTML5, CSS3, Vanilla CSS, Responsive Web Design. Backend: Node.js, Express, FastAPI, REST APIs. AI / ML: LangChain, LangGraph, LLM Prompting, PyTorch, RAG Pipelines, Vector schemas, tool schemas, custom cognitive loop graphs. Database & Cloud: PostgreSQL, MongoDB, Redis, AWS, GCP, DevOps, Docker, Git, GitHub, Linux Shell."
  },
  {
    id: "projects",
    title: "Projects & Portfolio Work",
    content: "1. Aether Automation Hub: Built using FastAPI, LangChain RAG & WebSockets agent dashboard. Agentic AI workflow with LangGraph orchestration, Gemini LLM, Retrieval-Augmented Generation, and a Flutter dashboard.\n2. Letter Craft Document Builder: React, Firebase realtime layering workspace for interactive document design.\n3. Swift Delivery App: React Native, Socket.io geospatial polling application for delivery agent tracking."
  },
  {
    id: "internships",
    title: "Work Experience & Internships",
    content: "- Software Engineering Intern at InnovateTech Labs: Built dashboard features, tuned SQL indexes, automated AWS EC2 deployments, optimized database queries.\n- AI & Automation Intern at Apex Automation Solutions: Developed agentic LangChain workflows, structured background document scanners, automated reports, created LangChain orchestrators for enterprise workflows and set up multi-source document ingestion."
  },
  {
    id: "education",
    title: "Education & Academics",
    content: "- B.E. Computer Science | PSG College of Technology (2022 - 2026). CGPA: 8.7/10. Smart India Hackathon Winner. Led his team to win the Smart India Hackathon (SIH), a prestigious national event, building an automated rapid prototyping solution.\n- Higher Secondary Certificate | St. Joseph's HSS. Percentage: 96.5%. School Rank 1 in Computer Science."
  },
  {
    id: "publications",
    title: "Research & Publications",
    content: "- 'Automated Crop Disease Detection using Deep Learning' published in Agricultural AI journal.\n- 'Edge Computing for LLM Agents: Quantization Constraints' presented at AI & Cloud conference."
  },
  {
    id: "certifications",
    title: "Professional Certifications",
    content: "- AWS Certified Solutions Architect - Associate.\n- Deep Learning Specialization by DeepLearning.AI.\n- Associate Cloud Engineer by Google Cloud.\n- PostgreSQL Database Administration by University of Michigan."
  },
  {
    id: "contact",
    title: "Contact Details & Social Profiles",
    content: "- Email: kanishkar@example.com\n- Phone: +1 234 567 890\n- GitHub: github.com/CaneCilia\n- LinkedIn: linkedin.com/in/kanishkar42\n- Location: Coimbatore, Tamil Nadu, India"
  }
];

// Simple, effective client-side RAG retrieval function
const retrieveContext = (query) => {
  const words = query.toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(/\s+/)
    .filter(w => w.length > 2); // Keep words longer than 2 characters

  if (words.length === 0) return { context: "", targetSection: null };

  const scoredDocs = PORTFOLIO_DB.map(doc => {
    let score = 0;
    const docText = `${doc.title} ${doc.content}`.toLowerCase();
    
    words.forEach(word => {
      // Weight title and ID matches highly
      if (doc.id.includes(word)) score += 10;
      if (doc.title.toLowerCase().includes(word)) score += 5;
      
      // Count frequency in content
      const regex = new RegExp(`\\b${word}\\b`, 'g');
      const matches = docText.match(regex);
      if (matches) {
        score += matches.length * 2;
      } else if (docText.includes(word)) {
        score += 1; // partial word match
      }
    });

    return { ...doc, score };
  });

  // Sort by score descending
  scoredDocs.sort((a, b) => b.score - a.score);

  // Take documents with positive score
  const relevantDocs = scoredDocs.filter(d => d.score > 0);

  if (relevantDocs.length === 0) {
    return { context: "", targetSection: null };
  }

  // Get top 2 documents for context
  const topDocs = relevantDocs.slice(0, 2);
  const contextText = topDocs.map(d => `[Section: ${d.title}]\n${d.content}`).join("\n\n");
  
  // Decide target section for navigation if top match is strong
  const targetSection = relevantDocs[0].score >= 3 ? relevantDocs[0].id : null;

  return { context: contextText, targetSection };
};

// API Call to Gemini Live LLM
const callGeminiAPI = async (query, context, apiKey) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;
  
  const systemInstruction = `You are Kanishkar R's AI Portfolio Copilot, integrated into his interactive terminal.
You have access to the following relevant sections of Kanishkar's portfolio (retrieved via client-side RAG):

${context || "No specific sections matched. Use general portfolio knowledge of Kanishkar R."}

Answer the user's question accurately, concisely, and professionally using the retrieved context.
Keep your answers brief, terminal-friendly (use plain text spacing, avoid heavy markdown, bullet points are fine).
Do not make up facts. If the information is not in the context, politely state that you do not have that information.
Your tone should be helpful, technical, and professional.`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: query }]
        }
      ],
      systemInstruction: {
        parts: [{ text: systemInstruction }]
      },
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.3,
      }
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData?.error?.message || `HTTP error ${response.status}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error("Invalid response format from Gemini API");
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
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY || localStorage.getItem('gemini_api_key');
    const isValidKey = apiKey && apiKey.trim() !== '' && apiKey !== 'your_gemini_api_key_here';
    if (isValidKey) {
      setHistory([
        { text: 'Initializing Agentic RAG Terminal Session...', type: 'system' },
        { text: 'Live Gemini RAG Copilot connected. Ask me anything about Kanishkar\'s portfolio!', type: 'ai-welcome' }
      ]);
    } else {
      setHistory([
        { text: 'Initializing Agentic RAG Terminal Session...', type: 'system' },
        { text: 'Running in Local RAG Mode. Type `setkey <your-gemini-api-key>` to connect to live Gemini LLM!', type: 'ai-welcome' }
      ]);
    }
  }, []);

  const staticCommands = {
    help: "Available Commands & Options:\n  about          - Brief professional summary\n  skills         - Comprehensive list of skills & stacks\n  projects       - Highlighted projects\n  internships    - Industry experience details\n  education      - Academic qualifications\n  publications   - Research papers & conference submissions\n  certifications - Professional credentials\n  contact        - Contact details & social profiles\n  setkey <key>   - Connect terminal to your live Gemini LLM\n  removekey      - Remove saved Gemini API key\n  clear          - Clear terminal interface\n  history        - Print executed inputs\n\n💡 Pro tip: You can ask natural language questions! \nExample: 'What is his CGPA?' or 'Tell me about Apex Automation' or 'Open projects page'.",
    about: "Kanishkar R is a results-oriented Software Developer. He specializes in building high-fidelity web interfaces, database microservices, and orchestrating retrieval-augmented AI workflows (RAG) using modern frameworks. Key focus: applying technical competency to solve practical problems.",
    skills: "Technical Stacks:\n- Programming Languages: Python, JavaScript, Java, C++\n- Frontend: React.js, Next.js, HTML5 & CSS3\n- Backend: Node.js, Express, FastAPI, REST APIs\n- AI / ML: LangChain, LLM Prompting, PyTorch\n- Database & Cloud: PostgreSQL, MongoDB, AWS, GCP\n- DevOps & Tools: Docker, Git & GitHub, Linux Shell",
    projects: "Explore My Work:\n1. Aether Automation Hub - FastAPI, LangChain RAG & WebSockets agent dashboard.\n2. Letter Craft Document Builder - React, Firebase realtime layering workspace.\n3. Swift Delivery App - React Native, Socket.io geospatial polling application.\nType 'about' or scroll to Projects section to view more.",
    internships: "Internships:\n- Software Engineering Intern at InnovateTech Labs\n  Built dashboards, optimized database queries, configured AWS deployment pipelines.\n- AI & Automation Intern at Apex Automation Solutions\n  Developed agentic LangChain workflows, structured background document scanners, and automated reports.",
    education: "Education:\n- B.E. Computer Science | PSG College of Technology (2022 - 2026)\n  CGPA: 8.7/10. Smart India Hackathon Winner.\n- Higher Secondary Certificate | St. Joseph's HSS\n  Percentage: 96.5%. School Rank 1 in CS.",
    publications: "Research & Publications:\n- 'Automated Crop Disease Detection using Deep Learning' (Journal)\n- 'Edge Computing for LLM Agents: Quantization Constraints' (Conference)",
    certifications: "Certifications:\n- AWS Certified Solutions Architect - Associate\n- Deep Learning Specialization (DeepLearning.AI)\n- Associate Cloud Engineer (Google Cloud)\n- PostgreSQL Database Administration (Michigan)",
    contact: "Contact Channels:\n- Email: kanishkar@example.com\n- Phone: +1 234 567 890\n- GitHub: github.com/CaneCilia\n- LinkedIn: linkedin.com/in/kanishkar42\n- Location: Coimbatore, India"
  };

  const aiSuggestions = [
    "Tell me about Kanishkar?",
    "Show me his projects",
    "What are his backend skills?",
    "Tell me about the Smart India Hackathon win",
    "How can I contact Kanishkar?",
    "Where does he study?"
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

  // Helper AI Engine for Local Mock Fallback
  const getLocalAIResponse = (query) => {
    const { context, targetSection } = retrieveContext(query);
    
    if (context) {
      return {
        text: `[Local RAG Match]\n${context}\n\n💡 Set your Gemini API key in the .env file for a live conversational response.`,
        action: targetSection
      };
    }
    
    const q = query.toLowerCase();
    let action = null;
    let text = "";

    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      text = "👋 Hello there! I'm Kanishkar's AI Portfolio Copilot. Ask me questions about his projects, skills, education, or internships, or type a CLI command like 'help'!";
    } else {
      text = "🤖 Local RAG Assistant:\nI couldn't find a direct match in my local database for that specific query.\n\nTry asking about:\n- 'What is his education?'\n- 'Show me his projects'\n- 'Where has he interned?'\n- 'What are his technical skills?'";
    }

    return { text, action };
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
        setHistory([...updatedHistory, { text: "System: Gemini API Key saved successfully to localStorage! Live Gemini LLM connection active.", type: 'system' }]);
      } else {
        setHistory([...updatedHistory, { text: "Usage: setkey <your-gemini-api-key>", type: 'error' }]);
      }
      return;
    }

    // Remove Gemini Key Command
    if (lowerCmd === 'removekey') {
      localStorage.removeItem('gemini_api_key');
      setHistory([...updatedHistory, { text: "System: Gemini API Key removed. Reverted to Local RAG mode.", type: 'system' }]);
      return;
    }

    // AI Processing with loader state
    setIsThinking(true);

    const rawApiKey = process.env.REACT_APP_GEMINI_API_KEY || localStorage.getItem('gemini_api_key');
    const apiKey = (rawApiKey && rawApiKey.trim() !== '' && rawApiKey !== 'your_gemini_api_key_here') ? rawApiKey : null;
    const { context, targetSection } = retrieveContext(trimmedCmd);

    // Execute static CLI command directly if matched
    if (staticCommands[lowerCmd]) {
      const responseText = staticCommands[lowerCmd];
      const section = ['about', 'skills', 'projects', 'internships', 'education', 'publications', 'certifications', 'contact'].includes(lowerCmd) ? lowerCmd : null;
      
      setHistory(prev => [
        ...prev, 
        { text: responseText, type: 'output', isAI: false }
      ]);
      setIsThinking(false);
      
      if (section && navigateToSection) {
        navigateToSection(section);
        setHistory(prev => [
          ...prev,
          { text: `System: Navigated screen to '#${section}' section.`, type: 'system' }
        ]);
      }
    } else {
      // Natural Language Query
      if (apiKey) {
        // Live Gemini API call
        callGeminiAPI(trimmedCmd, context, apiKey)
          .then((geminiResponse) => {
            setHistory(prev => [
              ...prev,
              { text: geminiResponse, type: 'output', isAI: true }
            ]);
            
            if (targetSection && navigateToSection) {
              navigateToSection(targetSection);
              setHistory(prev => [
                ...prev,
                { text: `System: Navigated screen to '#${targetSection}' section (RAG detected).`, type: 'system' }
              ]);
            }
          })
          .catch((err) => {
            setHistory(prev => [
              ...prev,
              { text: `⚠️ Gemini Connection Error: ${err.message}\n\nFalling back to Local AI...\n${getLocalAIResponse(trimmedCmd).text}`, type: 'error' }
            ]);
          })
          .finally(() => {
            setIsThinking(false);
          });
      } else {
        // Fallback Local RAG Response
        setTimeout(() => {
          const aiResult = getLocalAIResponse(trimmedCmd);
          setHistory(prev => [
            ...prev,
            { text: `[Local RAG Mode]\n${aiResult.text}`, type: 'output', isAI: true }
          ]);
          
          if (aiResult.action && navigateToSection) {
            navigateToSection(aiResult.action);
            setHistory(prev => [
              ...prev,
              { text: `System: Navigated screen to '#${aiResult.action}' section.`, type: 'system' }
            ]);
          }
          setIsThinking(false);
        }, 450);
      }
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
          <Bot size={16} className="title-icon AI-icon animate-pulse" />
          <span>Interactive AI Copilot Terminal (RAG)</span>
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
