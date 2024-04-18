import * as React from 'react';
import {
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';
import { Button } from 'react-native-paper';
import { RNCamera } from 'react-native-camera';
import { Color, FontFamily, Border, FontSize } from '../GlobalStyles';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';

import { useEffect, useState } from 'react';
// import { loadModel, predict } from '../utils/modelLoader';
import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as jpeg from 'jpeg-js';
import { LayersModel } from '@tensorflow/tfjs';

const Camera = () => {
	const [prediction, setPrediction] = useState('');
	// const [modelDetector, setModelDetector] = useState(null);
	const cameraRef = React.useRef<RNCamera | null>(null);
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
	const [isEnabled, setIsEnabled] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [imageLink, setImageLink] = useState(
		'https://raw.githubusercontent.com/thien-nhat/image/main/predict.jpg'
	);

	// const [modelDetector, setModelDetector] = useState<LayersModel | null>(null);
	const [modelDetector, setModelDetector] = useState('');
	const loadAndPredict = async () => {
		const tfReady = await tf.ready();
		const modelJson = await require('../assets/model/model.json');
		const modelWeight = await require('../assets/model/group1-shard.bin');
		console.log('[+] Retrieving model ........');
		// const modelDetector = await tf.loadLayersModel(
		// 	bundleResourceIO(modelJson, modelWeight)
		// );
		try {
			const modelDetector = await tf.loadLayersModel(
				bundleResourceIO(modelJson, modelWeight)
			);
			// If the model is loaded successfully, the code here will run
			console.log('Model loaded successfully');
			console.log('[+] Retrieving model :' + modelDetector);
			setModelDetector(modelDetector);
		} catch (error) {
			// If there's an error, it will be caught here
			console.error('Error loading model:', error);
		}
	};
	useEffect(() => {
		console.log('Model detector state changed:', modelDetector);
	}, [modelDetector]);

	useEffect(() => {
		// const loadAndPredict = async () => {
		// 	const tfReady = await tf.ready();
		// 	const modelJson = await require('../assets/model/model.json');
		// 	const modelWeight = await require('../assets/model/group1-shard.bin');
		// 	const modelDetector = await tf.loadLayersModel(
		// 		bundleResourceIO(modelJson, modelWeight)
		// 	);
		// 	console.log('[+] Retrieving model :' + modelDetector);
		// 	setModelDetector(modelDetector);
		// };

		loadAndPredict();
	}, []);

	const takePicture = async () => {
		if (cameraRef.current) {
			const options = { quality: 0.5, base64: true };
			const data = await cameraRef.current.takePictureAsync(options);
			console.log(data.uri);
			// Handle captured image data here
		}
	};
	function imageToTensor(rawImageData: any) {
		// Function to convert jpeg image to tensors
		const TO_UINT8ARRAY = true;
		const { width, height, data } = jpeg.decode(rawImageData, {
			useTArray: true,
		});
		// Drop the alpha channel info for mobilenet
		const buffer = new Uint8Array(width * height * 3);
		let offset = 0; // offset into original data
		for (let i = 0; i < buffer.length; i += 3) {
			buffer[i] = data[offset];
			buffer[i + 1] = data[offset + 1];
			buffer[i + 2] = data[offset + 2];
			offset += 4;
		}
		return tf.tensor3d(buffer, [height, width, 3]);
	}
	const getFaces = async () => {
		try {
			await loadAndPredict();
			console.log('[+] Retrieving image from link :' + imageLink);
			const response = await fetch(imageLink, {}, { isBinary: true });
			const rawImageData = await response.arrayBuffer();

			// const rawImageData = require('../assets/predict.jpg'); // replace with your image path
			const imageTensor = imageToTensor(rawImageData).resizeBilinear([
				256, 256,
			]);
			console.log('[+] Retrieving image from link :' + modelDetector);
			if (modelDetector) {
				let result = (await modelDetector.predict(imageTensor)) as tf.Tensor[];
				let predictions = await result[0].data();
				setPrediction(predictions.toString());
			}
		} catch (err) {
			setError(err as string);
		}
	};
	return (
		<ScrollView>
			<SafeAreaView>
				<View style={styles.camera}>
					<Text style={[styles.farm1, styles.farm1FlexBox]}>Farm 1</Text>
					<Text style={[styles.smf, styles.smfTypo1]}>SMF</Text>
					<ImageBackground
						style={styles.avatarIcon}
						source={require('../assets/avatar.png')}
					/>
					<RNCamera
						ref={cameraRef}
						style={styles.cameraPreview}
						type={RNCamera.Constants.Type.back}
						autoFocus={RNCamera.Constants.AutoFocus.on}
					/>
					<Button
						style={styles.cameraChild}
						mode='contained'
						labelStyle={styles.frameButtonBtn}
						onPress={takePicture}
						contentStyle={styles.frameButtonBtn1}
					>
						Start record
					</Button>
					<TouchableOpacity
						style={[styles.back, styles.smfTypo]}
						onPress={() => navigation.navigate('Farm')} // Navigate to "Farm" screen on press
					>
						<Text>BACK</Text>
					</TouchableOpacity>
					<View style={[styles.cameraItem, styles.frameChildPosition]} />
					<View style={[styles.cameraInner, styles.aboutPosition]} />
					<Text style={[styles.about, styles.aboutPosition]}>{`About `}</Text>
					<Button
						children='Predict'
						onPress={() => {
							getFaces();
						}}
						disabled={!isEnabled}
					/>
					{error && <Text style={{ color: 'red' }}>{error.message}</Text>}
					{/* <Text>Prediction: {prediction}</Text> */}
					{prediction.split(',').map((pred, index) => (
						<Text key={index}>{pred}</Text>
					))}
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	frameButtonBtn: {
		color: '#fff',
		fontSize: 15,
		fontWeight: '500',
		fontFamily: 'Montserrat',
	},
	frameButtonBtn1: {
		borderRadius: 20,
		height: 37,
		width: 258,
	},
	farm1FlexBox: {
		textAlign: 'left',
		color: Color.colorBlack,
	},
	smfTypo: {
		fontFamily: FontFamily.michroma,
		textAlign: 'left',
		position: 'absolute',
	},
	smfTypo1: {
		textAlign: 'left',
		fontSize: FontSize.size_5xl,
		position: 'absolute',
	},
	frameChildPosition: {
		borderRadius: Border.br_14xl,
		left: '50%',
		position: 'absolute',
	},
	aboutPosition: {
		left: 13,
		top: 573,
		position: 'absolute',
	},
	farm1: {
		top: 129,
		left: 15,
		fontFamily: FontFamily.kronaOne,
		width: 171,
		fontSize: FontSize.size_5xl,
		textAlign: 'left',
		position: 'absolute',
	},
	smf: {
		alignItems: 'center',
		justifyContent: 'center',
		top: 70,
		left: '50%',
		fontFamily: FontFamily.michroma,
		color: Color.colorGray_500,
		width: 91,
		height: 37,
	},
	iconLeaf: {
		height: '4.5%',
		width: '7.39%',
		top: '1.75%',
		right: '46.22%',
		bottom: '93.75%',
		left: '52.39%',
		maxWidth: '100%',
		maxHeight: '100%',
		position: 'absolute',
		overflow: 'hidden',
	},
	unionIcon: {
		width: 382,
		height: 322,
	},
	frameChild: {
		marginLeft: -172,
		top: -95,
		backgroundColor: Color.colorMediumseagreen,
		height: 336,
		width: 344,
	},
	rectangleWrapper: {
		height: 136,
		width: 344,
	},
	frameWrapper: {
		marginTop: -67.5,
		top: '50%',
		left: 19,
		position: 'absolute',
	},
	unionParent: {
		top: 185,
		left: -9,
		width: 369,
		height: 307,
		position: 'absolute',
	},
	cameraChild: {
		top: 527,
		left: 51,
		position: 'absolute',
		overflow: 'hidden',
	},
	back: {
		top: 14,
		left: 17,
		fontSize: FontSize.size_xs,
		letterSpacing: 4.1,
		width: 68,
		height: 16,
		color: Color.colorBlack,
		fontFamily: FontFamily.michroma,
	},
	avatarIcon: {
		borderRadius: Border.br_781xl,
		width: 40,
		height: 40,
		position: 'absolute',
		top: 12, // Điều chỉnh giá trị của top tùy theo vị trí bạn muốn đặt avatarIcon
		right: 10, // Điều chỉnh giá trị của right tùy theo vị trí bạn muốn đặt avatarIcon
	},
	cameraItem: {
		marginLeft: -164,
		top: 182,
		backgroundColor: '#f1fff5',
		width: 332,
		height: 324,
	},
	cameraInner: {
		borderStyle: 'solid',
		borderColor: Color.colorBlack,
		borderTopWidth: 1,
		width: 335,
		height: 1,
	},
	about: {
		fontSize: FontSize.size_lg,
		fontFamily: FontFamily.montserrat,
		display: 'flex',
		alignItems: 'center',
		width: 84,
		height: 31,
		textAlign: 'left',
		color: Color.colorBlack,
	},
	camera: {
		backgroundColor: Color.colorWhite,
		flex: 1,
		width: '100%',
		height: 800,
		overflow: 'hidden',
	},
	cameraPreview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
});

export default Camera;
