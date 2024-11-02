import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { analyzeText } from './models/nlp';

function App() {
  const [analysisResult, setAnalysisResult] = useState('');

  const handleAnalyzeText = () => {
    const result = analyzeText('Sample text for analysis');
    setAnalysisResult(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleAnalyzeText}>Analyze Text</button>
        {analysisResult && <p>{analysisResult}</p>}
      </header>
    </div>
  );
}

export default App;
