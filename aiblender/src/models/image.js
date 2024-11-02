import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as bodyPix from '@tensorflow-models/body-pix';
import Tesseract from 'tesseract.js';

export const detectObjects = async (image) => {
  const model = await cocoSsd.load();
  const predictions = await model.detect(image);
  return predictions;
};

export const classifyImage = async (image) => {
  const model = await mobilenet.load();
  const predictions = await model.classify(image);
  return predictions;
};

export const segmentImage = async (image) => {
  const model = await bodyPix.load();
  const segmentation = await model.segmentPerson(image);
  return segmentation;
};

export const extractTextFromImage = async (image) => {
  const { data: { text } } = await Tesseract.recognize(image, 'eng');
  return text;
};
