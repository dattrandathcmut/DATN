import React, { useEffect, useRef, useState } from 'react';
import {
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	PermissionsAndroid,
	Image,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
// Add new library

import { Camera as ExpoCamera, CameraType } from 'expo-camera'; //added
import * as MediaLibrary from 'expo-media-library'; //added
import Button1 from '../components/Button1'; //added
import { SafeAreaView } from 'react-native-safe-area-context';

const Camera = () => {
	const cameraRef = useRef<RNCamera | null>(null);
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
	// useEffect(() => { Comment out
	// 	requestCameraPermission();
	// }, []);

	const [hasCameraPermission, setHasCameraPermission] = useState(null); //added
	const [image, setImage] = useState(null); //added
	const [type, setType] = useState(ExpoCamera.Constants.Type.back); //added
	const [flash, setFlash] = useState(ExpoCamera.Constants.FlashMode.off); //added
	const cameraRef1 = useRef(null); //added

	useEffect(() => {
		//added
		(async () => {
			MediaLibrary.requestPermissionsAsync();
			const cameraStatus = await ExpoCamera.requestCameraPermissionsAsync();
			setHasCameraPermission(cameraStatus.status === 'granted');
		})();
	}, []);

	// const requestCameraPermission = async () => {
	// 	try {
	// 		const granted = await PermissionsAndroid.request(
	// 			PermissionsAndroid.PERMISSIONS.CAMERA,
	// 			{
	// 				title: 'Camera Permission',
	// 				message: 'Your app needs access to your camera',
	// 				buttonNeutral: 'Ask Me Later',
	// 				buttonNegative: 'Cancel',
	// 				buttonPositive: 'OK',
	// 			}
	// 		);
	// 		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
	// 			console.log('Camera permission granted');
	// 		} else {
	// 			console.log('Camera permission denied');
	// 		}
	// 	} catch (err) {
	// 		console.warn(err);
	// 	}
	// };

	// const handleCapture = async () => {
	// 	if (cameraRef.current) {
	// 		try {
	// 			const options = { quality: 0.5, base64: true };
	// 			const data = await cameraRef.current.takePictureAsync(options);
	// 			console.log('Image captured:', data.uri);
	// 			// Now you can send this image to your API
	// 			await sendToApi(data.uri);
	// 		} catch (error) {
	// 			console.error('Failed to capture image: ', error);
	// 		}
	// 	} else {
	// 		console.error('Camera reference is null');
	// 	}
	// };

	// const sendToApi = async (imageUri: string) => {
	// 	const formData = new FormData();
	// 	formData.append('image', {
	// 		uri: imageUri,
	// 		type: 'image/jpeg',
	// 		name: 'photo.jpg',
	// 	});

	// 	try {
	// 		const response = await fetch('http://localhost:5000/predict', {
	// 			method: 'POST',
	// 			body: formData,
	// 			headers: {
	// 				'Content-Type': 'multipart/form-data',
	// 			},
	// 		});
	// 		if (!response.ok) {
	// 			throw new Error('Failed to send image to API');
	// 		}
	// 		const result = await response.json();
	// 		console.log('Prediction result:', result);
	// 		// Handle prediction result here
	// 	} catch (error) {
	// 		console.error('Error sending to API:', error);
	// 		throw error; // re-throw the error to propagate it to the caller
	// 	}
	// };

	const takePicture = async () => {
		if (cameraRef1) {
			try {
				const data = await cameraRef1.current.takePictureAsync();
				console.log(data);
				setImage(data.uri);
			} catch (e) {
				console.log(e);
			}
		}
	};
	const saveImage1 = async () => {
		if (image) {
			try {
				await MediaLibrary.createAssetAsync(image);
				// console.log('Image saved to library');
				alert('Image saved to library');
				setImage(null);
			} catch (error) {
				console.log(error);
			}
		}
	};

	const saveImage = async () => {
		if (image) {
			try {
				// Save image to library
				await MediaLibrary.createAssetAsync(image);
				// Construct form data with the saved image URI
        console.log("image");
        console.log(image);
				const formData = new FormData();
				formData.append('file', {
					uri: image,
					type: 'image/jpeg',
          name: 'photo.jpg',
				});
				// Send image to prediction endpoint
				const response = await fetch('http://192.168.1.11:5001/predict', {
					method: 'POST',
					body: formData,
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				});
				if (!response.ok) {
					console.error('Prediction Failed to send image to API:');
					throw new Error('Failed to send image to API');
				}
				const result = await response.json();
				console.log('Prediction result:', result);
        alert('Prediction result: ' + result.class);
				// Handle prediction result here
			} catch (error) {
				console.error('Error saving image and/or sending to API:', error);
			}
		} else {
			console.log('No image to save');
		}
	};

	const testApi = async () => {
		try {
			const response = await fetch('http://192.168.1.11:5001/');
			if (!response.ok) {
				throw new Error('HTTP status ' + response.status);
			}
			const data = await response.json();
			console.log(data); // {"message": "Hello"}
		} catch (error) {
			console.error('Failed to fetch from this API:', error);
		}
	};

	useEffect(() => {
		testApi();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View>
				{!image ? (
					<ExpoCamera
						style={styles.camera}
						type={type}
						flashMode={flash}
						ref={cameraRef1}
					>
						{/* <Text>Camera</Text> */}
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								padding: 149,
							}}
						>
							<Button1
								icon={'retweet'}
								color={'white'}
								onPress={() => {
									setType(
										type === CameraType.back
											? CameraType.front
											: CameraType.back
									);
								}}
							/>
							<Button1
								icon={'flash'}
								color={'white'}
								onPress={() =>
									setFlash(
										flash === ExpoCamera.Constants.FlashMode.off
											? ExpoCamera.Constants.FlashMode.off
											: ExpoCamera.Constants.FlashMode.on
									)
								}
							/>
						</View>
					</ExpoCamera>
				) : (
					<Image source={{ uri: image }} style={styles.camera} />
				)}
				<View>
					{image ? (
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingHorizontal: 100,
							}}
						>
							<Button1
								title={'Re-take'}
								icon='retweet'
								onPress={() => setImage(null)}
								color={'white'}
							/>
							<Button1
								title={'save'}
								icon='check'
								color={'white'}
								onPress={saveImage}
							/>
						</View>
					) : (
						<Button1
							icon='camera'
							title={'Take a picture'}
							color={'red'}
							onPress={takePicture}
						/>
					)}
				</View>
			</View>
		</SafeAreaView>
		// <View style={styles.container}>
		//   <RNCamera
		//     ref={cameraRef}
		//     style={styles.cameraPreview}
		//     type={RNCamera.Constants.Type.back}
		//     autoFocus={RNCamera.Constants.AutoFocus.on}
		//   />
		//   <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
		//     <Text style={styles.captureButtonText}>Capture</Text>
		//   </TouchableOpacity>
		// </View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	},
	cameraPreview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: '100%',
	},
	captureButton: {
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 50,
		paddingHorizontal: 20,
		marginBottom: 50,
	},
	captureButtonText: {
		fontSize: 16,
		color: '#000',
	},
	navigateToTestButton: {
		backgroundColor: '#007bff',
		borderRadius: 5,
		padding: 15,
		paddingHorizontal: 20,
	},
	navigateToTestButtonText: {
		fontSize: 16,
		color: '#fff',
	},
	camera: {
		flex: 2,
		borderRadius: 70,
	},
});

export default Camera;
