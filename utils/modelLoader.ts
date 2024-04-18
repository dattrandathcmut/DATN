import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';

let model: tf.LayersModel | undefined;

export const loadModel = async () => {
    const modelJson = require('../assets/model/model.json');
    const modelWeights = require('../assets/model/group1-shard1of1.bin');
    model = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));
}

export const predict = (tensor: tf.Tensor) => {
    if (!model) {
        throw new Error('Model has not been loaded');
    }
    return model.predict(tensor);
}