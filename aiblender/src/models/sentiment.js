const Sentiment = require('sentiment');
const sentiment = new Sentiment();

const analyzeSentiment = (text) => {
  const result = sentiment.analyze(text);
  return result;
};

module.exports = analyzeSentiment;
