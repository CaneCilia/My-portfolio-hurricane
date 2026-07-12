import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TermIcon, Minimize2, Maximize2, X, CornerDownLeft, Sparkles } from 'lucide-react';
import './Terminal.css';

const Terminal = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState([
    { text: 'Initializing AI Terminal Session...', type: 'system' },
    { text: "Welcome to Kanishkar's Developer CLI. Type 'help' to view available commands.", type: 'system' }
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMinimized, setIsMinimized] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: "Available commands:\n  about          - Overview of Kanishkar R\n  skills         - Technical skill sets\n  projects       - Show main projects\n  internships    - Internship history\n  education      - Academic path\n  publications   - Research papers & journals\n  certifications - Professional credentials\n  contact        - Get touch details\n  clear          - Clear terminal display\n  history        - Print executed commands",
    about: "Kanishkar R is a results-oriented Software Developer. He specializes in building high-fidelity web interfaces, database microservices, and orchestrating retrieval-augmented AI workflows (RAG) using modern frameworks. Key focus: applying technical competency to solve practical problems.",
    skills: "Technical Stacks:\n- Programming Languages: Python, JavaScript, Java, C++\n- Frontend: React.js, Next.js, HTML5 & CSS3\n- Backend: Node.js, Express, FastAPI, REST APIs\n- AI / ML: LangChain, LLM Prompting, PyTorch\n- Database & Cloud: PostgreSQL, MongoDB, AWS, GCP\n- DevOps & Tools: Docker, Git & GitHub, Linux Shell",
    projects: "Explore My Work:\n1. Aether Automation Hub - FastAPI, LangChain RAG & WebSockets agent dashboard.\n2. Letter Craft Document Builder - React, Firebase realtime layering workspace.\n3. Swift Delivery App - React Native, Socket.io geospatial polling application.\nType 'about' or scroll to Projects section to view more.",
    internships: "Internships:\n- Software Engineering Intern at InnovateTech Labs\n  Built dashboards, optimized database queries, configured AWS deployment pipelines.\n- AI & Automation Intern at Apex Automation Solutions\n  Developed agentic LangChain workflows, structured background document scanners, and automated reports.",
    education: "Education:\n- B.E. Computer Science | PSG College of Technology (2022 - 2026)\n  CGPA: 8.7/10. Smart India Hackathon Winner.\n- Higher Secondary Certificate | St. Joseph's HSS\n  Percentage: 96.5%. School Rank 1 in CS.",
    publications: "Research & Publications:\n- 'Automated Crop Disease Detection using Deep Learning' (Journal)\n- 'Edge Computing for LLM Agents: Quantization Constraints' (Conference)",
    certifications: "Certifications:\n- AWS Certified Solutions Architect - Associate\n- Deep Learning Specialization (DeepLearning.AI)\n- Associate Cloud Engineer (Google Cloud)\n- PostgreSQL Database Administration (Michigan)",
    contact: "Contact Channels:\n- Email: kanishkar@example.com\n- Phone: +1 234 567 890\n- GitHub: github.com/CaneCilia\n- LinkedIn: linkedin.com/in/kanishkar\n- Location: Coimbatore, India"
  };

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
    scrollToBottom();
  }, [isOpen, history, isMinimized]);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCommand = (cmdText) => {
    const trimmedCmd = cmdText.trim().toLowerCase();
    let responseText = '';

    if (trimmedCmd === '') return;

    // Add to input history list
    const newCmdHistory = [...cmdHistory, cmdText];
    setCmdHistory(newCmdHistory);
    setHistoryIndex(newCmdHistory.length);

    const newHistory = [...history, { text: `> ${cmdText}`, type: 'input' }];

    if (trimmedCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmedCmd === 'history') {
      responseText = newCmdHistory.join('\n');
    } else if (commands[trimmedCmd]) {
      responseText = commands[trimmedCmd];
    } else {
      responseText = `Command not found: '${trimmedCmd}'. Type 'help' to see list of valid commands.`;
    }

    setHistory([...newHistory, { text: responseText, type: 'output' }]);
    setInput('');
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
      // Simple Autocomplete helper
      e.preventDefault();
      const match = Object.keys(commands).find(c => c.startsWith(input.toLowerCase()));
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
          <TermIcon size={16} className="title-icon" />
          <span>Interactive AI Terminal</span>
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
              <div key={idx} className={`log-line ${log.type}`}>
                {log.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Autocomplete helper panel */}
          <div className="autocomplete-suggestions">
            <span className="suggestions-label"><Sparkles size={12} /> Suggests:</span>
            {Object.keys(commands).map(cmd => (
              <button 
                key={cmd} 
                className="suggest-badge"
                onClick={() => setInput(cmd)}
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Input field */}
          <div className="input-line-container">
            <span className="input-prompt">guest@kanishkar.cli:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              placeholder="Type a command..."
              aria-label="Terminal Command Input"
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
