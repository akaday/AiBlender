import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { analyzeText } from './models/nlp';
import Header from './components/Header';
import analyzeSentiment from './models/sentiment';

function App() {
  const [analysisResult, setAnalysisResult] = useState('');
  const [sentimentResult, setSentimentResult] = useState(null);

  const handleAnalyzeText = () => {
    const result = analyzeText('Sample text for analysis');
    setAnalysisResult(result);
  };

  const handleAnalyzeSentiment = () => {
    const result = analyzeSentiment('Sample text for sentiment analysis');
    setSentimentResult(result);
  };

  return (
    <div className="App">
      <Header />
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
        <button onClick={handleAnalyzeSentiment}>Analyze Sentiment</button>
        {sentimentResult && (
          <div>
            <p>Sentiment Score: {sentimentResult.score}</p>
            <p>Comparative Score: {sentimentResult.comparative}</p>
            <p>Positive Words: {sentimentResult.positive.join(', ')}</p>
            <p>Negative Words: {sentimentResult.negative.join(', ')}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
