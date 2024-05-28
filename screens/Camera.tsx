import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
// Add new library

import { CameraView, useCameraPermissions } from 'expo-camera';

import * as MediaLibrary from 'expo-media-library'; 
import Button1 from '../components/Button1'; 
import {config} from '../components/config'; 

import { SafeAreaView } from 'react-native-safe-area-context';
import { Color, FontFamily, FontSize } from '../GlobalStyles';
// import { CameraType, FlashMode } from 'expo-camera/build/legacy/Camera.types';


const Camera = () => {
  // const cameraRef = useRef<RNCamera | null>(null);
  const [facing, setFacing] = useState('back');
  const [flashMode, setFlashMode] = useState('off');
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  // useEffect(() => { Comment out
  // 	requestCameraPermission();
  // }, []);

  // const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  // const [type, setType] = useState(CameraType.back); // Fix the usage of CameraType
  // const [flash, setFlash] = useState(FlashMode.off);
  const cameraRef1 = useRef(null);

  const [hasCameraPermission, setHasCameraPermission] = useState<
    boolean | null
  >(null);
  const [permission, requestPermission] = useCameraPermissions();

  //added

  // useEffect(() => {
  // 	//added
  // 	(async () => {
  // 		MediaLibrary.requestPermissionsAsync();
  // 		const cameraStatus = await ExpoCamera.requestCameraPermissionsAsync();
  // 		setHasCameraPermission(cameraStatus.status === 'granted');
  // 	})();
  // }, []);
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await ExpoCamera.requestCameraPermissionsAsync();
  //     if (status !== 'granted') {
  //       alert('Sorry, we need camera permissions to make this work!');
  //     }
  //   })();
  // }, []);

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
        const response = await fetch(`${config.baseURL}/predict`, {
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

  // const testApi = async () => {
  //   try {
  //     const response = await fetch('http://192.168.1.11:5001/');
  //     if (!response.ok) {
  //       throw new Error('HTTP status ' + response.status);
  //     }
  //     const data = await response.json();
  //     console.log(data); // {"message": "Hello"}
  //   } catch (error) {
  //     console.error('Failed to fetch from this API:', error);
  //   }
  // };

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }
  function toggleFlash() {
    setFlashMode((current) => (current === 'off' ? 'on' : 'off'));
  }

  // useEffect(() => {
  //   testApi();
  // }, []);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title='grant permission' />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View
          style={{ flexDirection: 'row', justifyContent: 'center', padding: 0 }}
        >
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.back1}>BACK</Text>
          </TouchableOpacity>

          <Button1
            icon={'retweet'}
            color={'white'}
            onPress={toggleCameraFacing}
          />
          <Button1
            icon={'flash'}
            color={'white'}
            onPress={toggleFlash}
          />
        </View>
        {!image ? (
          <CameraView
            style={styles.camera}
            facing={facing}
            flashMode={'on'}
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

export default Camera;