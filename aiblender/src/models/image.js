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

// Web worker setup
export const runInWorker = (workerFunction, data) => {
  return new Promise((resolve, reject) => {
    const workerBlob = new Blob([`(${workerFunction.toString()})()`], { type: 'application/javascript' });
    const worker = new Worker(URL.createObjectURL(workerBlob));
    worker.postMessage(data);
    worker.onmessage = (event) => {
      resolve(event.data);
      worker.terminate();
    };
    worker.onerror = (error) => {
      reject(error);
      worker.terminate();
    };
  });
};

export const detectObjectsInWorker = (image) => {
  return runInWorker(detectObjects, image);
};

export const classifyImageInWorker = (image) => {
  return runInWorker(classifyImage, image);
};

export const segmentImageInWorker = (image) => {
  return runInWorker(segmentImage, image);
};

export const extractTextFromImageInWorker = (image) => {
  return runInWorker(extractTextFromImage, image);
};
