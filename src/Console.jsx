import { useState, useEffect, useRef } from 'react';
import './Console.css';
import { commandRegistry } from './commands';
import { logoAscii } from './ascii-art';

const Console = () => {
  const [history, setHistory] = useState(() => {
    // Initialize with welcome message
    const welcomeMessage = {
      type: 'output',
      content: [
        logoAscii,
        '',
        '═══════════════════════════════════════════════════════════════════',
        '    DEEP BLUE RESEARCH CONSOLE v1.0',
        '    Whale Communication & Marine Intelligence System',
        '═══════════════════════════════════════════════════════════════════',
        '',
        'Welcome to the Deep Blue Research Terminal.',
        'A journey into the mysterious world of whale communication.',
        '',
        'Type "help" for available commands or "about" to learn more.',
        ''
      ].join('\n')
    };
    return [welcomeMessage];
  });
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    // Focus input on mount and when clicked
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const streamText = async (text, callback) => {
    const lines = text.split('\n');
    let displayedText = '';
    
    for (let i = 0; i < lines.length; i++) {
      displayedText += (i > 0 ? '\n' : '') + lines[i];
      callback(displayedText);
      
      // Add delay between lines for streaming effect
      if (i < lines.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 30));
      }
    }
  };

  const handleCommand = async (cmd) => {
    const trimmedCmd = cmd.trim();
    
    // Add command to history display
    setHistory(prev => [...prev, { type: 'command', content: trimmedCmd }]);

    if (!trimmedCmd) {
      return;
    }

    // Disable input while processing
    setIsProcessing(true);

    // Add to command history for up/down navigation
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Parse command and arguments
    const parts = trimmedCmd.split(' ');
    const commandName = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Execute command
    const command = commandRegistry[commandName];
    if (command) {
      // Show loading message for commands that need it
      const needsLoading = ['listen', 'signal', 'research', 'sonar', 'data', 'animate', 'whale', 'shark'];
      
      if (needsLoading.includes(commandName)) {
        // Add loading message
        const loadingMessages = {
          listen: 'Initializing hydrophone array...\nConnecting to deep ocean sensors...',
          signal: 'Analyzing signal patterns...\nProcessing whale communication data...',
          research: 'Accessing research database...\nRetrieving station data...',
          sonar: 'Initiating sonar scan...\nAnalyzing marine life signatures...',
          data: 'Streaming data from ocean sensors...\nDecoding transmission...',
          animate: 'Loading animation sequence...\nRendering pixel art...',
          whale: 'Rendering whale visualization...',
          shark: 'Rendering shark visualization...'
        };
        
        const loadingMsg = loadingMessages[commandName] || 'Processing...';
        setHistory(prev => [...prev, { type: 'loading', content: loadingMsg }]);
        
        // Wait for loading effect
        await new Promise(resolve => setTimeout(resolve, 800));
      }
      
      const output = command.execute(args);
      
      // Special handling for clear command
      if (output === 'CLEAR_SCREEN') {
        setHistory([]);
        setIsProcessing(false);
        return;
      }
      
      // Add empty output entry and stream the text into it
      setHistory(prev => [...prev, { type: 'output', content: '', streaming: true }]);
      
      let streamedContent = '';
      
      await streamText(output, (text) => {
        streamedContent = text;
        setHistory(prev => {
          const newHistory = [...prev];
          // Update the last entry which is the output we just added
          newHistory[newHistory.length - 1] = { type: 'output', content: text, streaming: true };
          return newHistory;
        });
      });
      
      // Mark streaming as complete
      setHistory(prev => {
        const newHistory = [...prev];
        newHistory[newHistory.length - 1] = { type: 'output', content: streamedContent, streaming: false };
        return newHistory;
      });
    } else {
      setHistory(prev => [...prev, {
        type: 'error',
        content: `Command not found: ${commandName}\nType "help" for available commands.`
      }]);
    }
    
    setIsProcessing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(currentCommand);
      setCurrentCommand('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentCommand('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentCommand(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="console-container" onClick={handleTerminalClick}>
      <div className="console-header">
        <div className="header-left">
          <span className="header-icon">●</span>
          <span className="header-icon">●</span>
          <span className="header-icon">●</span>
        </div>
        <div className="header-title">DEEP BLUE RESEARCH CONSOLE</div>
        <div className="header-right">
          <span className="status-indicator">● ONLINE</span>
        </div>
      </div>
      
      <div className="terminal" ref={terminalRef}>
        {history.map((entry, index) => (
          <div key={index} className={`terminal-entry ${entry.type}`}>
            {entry.type === 'command' && <span className="prompt">visitor@deepblue:~$ </span>}
            {entry.type === 'loading' && <span className="loading-indicator">● </span>}
            <pre className="terminal-text">{entry.content}</pre>
          </div>
        ))}
        
        <div className="terminal-input-line">
          <span className="prompt">visitor@deepblue:~$ </span>
          <span className="cursor-blink">█</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck="false"
            disabled={isProcessing}
          />
        </div>
      </div>
      
      <div className="console-footer">
        <span>Press TAB for autocomplete</span>
        <span>↑↓ for command history</span>
        <span>Type "help" for commands</span>
      </div>
    </div>
  );
};

export default Console;
