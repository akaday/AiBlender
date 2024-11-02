import { NlpManager } from 'node-nlp';
import { SummarizerManager } from 'node-summarizer';
import franc from 'franc';

const manager = new NlpManager({ languages: ['en'] });
const summarizer = new SummarizerManager();

export const analyzeText = (text) => {
  const analysis = {
    length: text.length,
    wordCount: text.split(' ').length,
    charCount: text.replace(/\s/g, '').length,
    sentenceCount: text.split('.').length - 1,
    avgWordLength: text.replace(/\s/g, '').length / text.split(' ').length,
    avgSentenceLength: text.split(' ').length / (text.split('.').length - 1),
  };
  return analysis;
};

export const namedEntityRecognition = async (text) => {
  await manager.addDocument('en', text, 'ner');
  await manager.train();
  const response = await manager.process('en', text);
  return response.entities;
};

export const textSummarization = async (text) => {
  const summary = await summarizer.getSummaryByRank(text);
  return summary.summary;
};

export const languageDetection = (text) => {
  const langCode = franc(text);
  return langCode;
};
