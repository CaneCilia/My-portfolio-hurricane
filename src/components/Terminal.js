import React, { useState, useEffect, useRef } from 'react';
import { Minimize2, Maximize2, X, CornerDownLeft, Sparkles, Bot } from 'lucide-react';
import './Terminal.css';

const Terminal = ({ isOpen, onClose, navigateToSection }) => {
  const [history, setHistory] = useState([
    { text: 'Initializing Agentic AI Terminal Session...', type: 'system' },
    { text: 'AI Copilot active. Ask me anything about Kanishkar\'s portfolio, skills, projects, or experience!', type: 'ai-welcome' }
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const staticCommands = {
    help: "Available Commands & Options:\n  about          - Brief professional summary\n  skills         - Comprehensive list of skills & stacks\n  projects       - Highlighted projects\n  internships    - Industry experience details\n  education      - Academic qualifications\n  publications   - Research papers & conference submissions\n  certifications - Professional credentials\n  contact        - Contact details & social profiles\n  clear          - Clear terminal interface\n  history        - Print executed inputs\n\n💡 Pro tip: You can ask natural language questions! \nExample: 'What is his CGPA?' or 'Tell me about Apex Automation' or 'Open projects page'.",
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

  // Helper AI Engine to answer natural language queries
  const getAIResponse = (query) => {
    const q = query.toLowerCase();
    
    // Auto navigations
    let action = null;
    let text = "";

    // Search rules
    if (q.includes("hackathon") || q.includes("sih") || q.includes("winner")) {
      text = "🏆 Smart India Hackathon Winner!\nKanishkar led his team to win the Smart India Hackathon (SIH), a prestigious national event. He built an automated solution demonstrating rapid prototyping and engineering capability.\n\nSchooling & Academics:\n- PSG College of Technology: B.E. CSE (CGPA: 8.7/10)\n- St. Joseph's HSS: 96.5% (Rank 1 in CS)";
      action = "education";
    } else if (q.includes("education") || q.includes("study") || q.includes("college") || q.includes("university") || q.includes("psg") || q.includes("academics")) {
      text = "🎓 Academic Profile:\nKanishkar is pursuing his B.E. in Computer Science at PSG College of Technology (Class of 2022-2026) with an 8.7 CGPA. He finished higher secondary schooling at St. Joseph's HSS with 96.5% scoring Rank 1 in CS.";
      action = "education";
    } else if (q.includes("project") || q.includes("portfolio") || q.includes("aether") || q.includes("letter") || q.includes("swift") || q.includes("app")) {
      text = "💻 Featured Projects:\n1. Aether Automation Hub: FastAPI backend, WebSockets, and LangChain RAG architecture.\n2. Letter Craft Document Builder: Interactive document designer powered by React and Firebase.\n3. Swift Delivery App: React Native application with socket-based geospatial delivery agent polling.";
      action = "projects";
    } else if (q.includes("internship") || q.includes("experience") || q.includes("work") || q.includes("innovatetech") || q.includes("apex") || q.includes("job")) {
      text = "💼 Industry Experience:\n- Software Engineering Intern at InnovateTech Labs: Built dashboard features, tuned SQL indexes, and automated AWS EC2 deployments.\n- AI & Automation Intern at Apex Automation Solutions: Created LangChain orchestrators for enterprise workflows and set up multi-source document ingestion.";
      action = "internships";
    } else if (q.includes("skill") || q.includes("tech") || q.includes("programming") || q.includes("language") || q.includes("python") || q.includes("javascript") || q.includes("react") || q.includes("backend")) {
      text = "🛠️ Tech Stack:\n- Languages: Python, JavaScript, Java, C++\n- Web Dev: React.js, Next.js, Node.js, Express, FastAPI\n- Databases: PostgreSQL, MongoDB, Redis\n- AI: LangChain, LLM Prompting, PyTorch, RAG Pipelines\n- Cloud/DevOps: AWS, Google Cloud, Docker, Git, Linux Shell";
      action = "skills";
    } else if (q.includes("cert") || q.includes("aws") || q.includes("credential")) {
      text = "🎖️ Professional Credentials:\n- AWS Certified Solutions Architect - Associate\n- Deep Learning Specialization (DeepLearning.AI)\n- Associate Cloud Engineer (Google Cloud)\n- PostgreSQL Database Administration (University of Michigan)";
      action = "certifications";
    } else if (q.includes("publication") || q.includes("paper") || q.includes("research") || q.includes("crop") || q.includes("edge")) {
      text = "🔬 Research & Scientific Papers:\n- 'Automated Crop Disease Detection using Deep Learning' (Published in Agricultural AI journal)\n- 'Edge Computing for LLM Agents: Quantization Constraints' (Presented at AI & Cloud conference)";
      action = "publications";
    } else if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("touch") || q.includes("reach") || q.includes("github") || q.includes("linkedin")) {
      text = "✉️ How to connect:\n- Email: kanishkar@example.com\n- Phone: +1 234 567 890\n- GitHub: github.com/CaneCilia\n- LinkedIn: linkedin.com/in/kanishkar42\n- Location: Coimbatore, India";
      action = "contact";
    } else if (q.includes("hello") || q.includes("hi ") || q.includes("hey")) {
      text = "👋 Hello there! I'm Kanishkar's AI Portfolio Copilot. Ask me questions about his projects, skills, education, or internships, or type a CLI command like 'help'!";
    } else if (q.includes("who") || q.includes("about") || q.includes("kanishkar")) {
      text = "👤 About Kanishkar:\nHe is a software developer and automation enthusiast who loves bridging frontend interfaces with powerful AI, backend microservices, and databases. He studies at PSG College of Technology.";
      action = "about";
    } else {
      text = "🤖 AI Assistant:\nI've analyzed your question. While I don't have a direct answer for that specific phrasing, here's a quick navigation lookup for you:\n\n- Try asking about his 'projects', 'education', 'internships', or 'skills'.\n- Or search specifically: 'tell me about crop disease paper' or 'where is PSG college?'.\n- Type 'help' to see standard terminal commands.";
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

    // AI Simulation Response with loader state
    setIsThinking(true);

    setTimeout(() => {
      let responseText = '';
      let targetSection = null;

      if (staticCommands[lowerCmd]) {
        responseText = staticCommands[lowerCmd];
        // Automatically map static commands to page navigation
        if (['about', 'skills', 'projects', 'internships', 'education', 'publications', 'certifications', 'contact'].includes(lowerCmd)) {
          targetSection = lowerCmd;
        }
      } else {
        // Natural language query processing
        const aiResult = getAIResponse(trimmedCmd);
        responseText = aiResult.text;
        targetSection = aiResult.action;
      }

      setHistory(prev => [
        ...prev, 
        { text: responseText, type: 'output', isAI: !staticCommands[lowerCmd] }
      ]);
      
      setIsThinking(false);

      // Trigger automatic navigation if applicable
      if (targetSection && navigateToSection) {
        navigateToSection(targetSection);
        // Show navigation feedback
        setHistory(prev => [
          ...prev,
          { text: `System: Navigated screen to '#${targetSection}' section.`, type: 'system' }
        ]);
      }
    }, 450);
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
      // Match starts with or fallback to suggestions
      const match = Object.keys(staticCommands).find(c => c.startsWith(input.toLowerCase()));
      if (match) {
        setInput(match);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`terminal-wrapper glass ${isMinimized ? 'minimized' : ''} animate-slide-up`}>
      {/* Header */}
      <div className="terminal-header" onClick={() => isMinimized && setIsMinimized(false)}>
        <div className="terminal-title">
          <Bot size={16} className="title-icon AI-icon animate-pulse" />
          <span>Interactive AI Copilot Terminal</span>
        </div>
        
        <div className="header-controls">
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
