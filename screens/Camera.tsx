import React, { useEffect, useRef, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, PermissionsAndroid } from "react-native";
import { RNCamera } from 'react-native-camera';
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";


const Camera = () => {
  const cameraRef = useRef<RNCamera | null>(null);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  useEffect(() => {
    requestCameraPermission();
 }, []);

 const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "Your app needs access to your camera",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission granted");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
 };

  const handleCapture = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        console.log('Image captured:', data.uri);
        // Now you can send this image to your API
        await sendToApi(data.uri);
      } catch (error) {
        console.error('Failed to capture image: ', error);
      }
    } else {
      console.error('Camera reference is null');
    }
  };


  const sendToApi = async (imageUri: string) => {
    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to send image to API');
      }
      const result = await response.json();
      console.log('Prediction result:', result);
      // Handle prediction result here
    } catch (error) {
      console.error('Error sending to API:', error);
      throw error; // re-throw the error to propagate it to the caller
    }
  };


  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.cameraPreview}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
      />
      <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
        <Text style={styles.captureButtonText}>Capture</Text>
      </TouchableOpacity>
    </View>
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
    padding: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  captureButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Camera;
