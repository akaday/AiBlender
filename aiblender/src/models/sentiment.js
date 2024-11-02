const Sentiment = require('sentiment');
const sentiment = new Sentiment();

const analyzeSentiment = (text) => {
  const result = sentiment.analyze(text);
  const detailedAnalysis = {
    score: result.score,
    comparative: result.comparative,
    positiveWords: result.positive,
    negativeWords: result.negative,
    tokens: result.tokens,
    words: result.words,
    positiveCount: result.positive.length,
    negativeCount: result.negative.length,
  };
  return detailedAnalysis;
};

module.exports = analyzeSentiment;
