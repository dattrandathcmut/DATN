import React, { useEffect, useRef, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

//added
import * as MediaLibrary from 'expo-media-library'; //added
import Button1 from '../components/Button1'; //added
import { SafeAreaView } from 'react-native-safe-area-context';
import { Color, FontFamily, FontSize } from '../GlobalStyles';
import { RNCamera } from 'react-native-camera';


export default function Camera2() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  //added
  const [image, setImage] = useState(null);
  // const cameraRef1 = useRef(null); 
  const cameraRef1 = useRef<RNCamera | null>(null);

  const takePicture = async () => {
    console.log('takePicture');
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
  const saveImage = async () => {
		if (image) {
			try {
				// Save image to library
				await MediaLibrary.createAssetAsync(image);
				// Construct form data with the saved image URI
				console.log('image');
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

  

  //added

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  // return (
  //   <View style={styles.container}>
  //     <CameraView style={styles.camera} facing={facing}>
  //       <View style={styles.buttonContainer}>
  //         <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
  //           <Text style={styles.text}>Flip Camera</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </CameraView>
  //   </View>
  // );
  return (
    <SafeAreaView style={styles.container}>
			<CameraView>
				<View
					style={{ flexDirection: 'row', justifyContent: 'center', padding: 0 }}
				>
					<TouchableOpacity
						style={styles.back}
						onPress={toggleCameraFacing}
					>
						<Text style={styles.back1}>BACK</Text>
					</TouchableOpacity>
					{/* <Button1
						icon={'retweet'}
						color={'white'}
						onPress={() => {
							setType(
								type === CameraType.back ? CameraType.front : CameraType.back
							);
						}}
					/>
					<Button1
						icon={'flash'}
						color={'white'}
						onPress={() =>
							setFlash(flash === FlashMode.off ? FlashMode.off : FlashMode.on)
						}
					/> */}
				</View>
				{!image ? (
					<CameraView
            style={styles.camera}
            ref={cameraRef1}
          >
            {/* <Text>Camera</Text> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 180,
              }}
            ></View>
          </CameraView>
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
			</CameraView>
		</SafeAreaView>
  );

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	},
	back1: {
		letterSpacing: 4.1,
		color: Color.colorWhite,
		width: 68,
		height: 16,
		fontSize: FontSize.size_xs,
		textAlign: 'left',
		fontFamily: FontFamily.michroma,
	},
	back: {
		left: 17,
		top: 14,
		position: 'absolute',
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


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

