import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const Cameras = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const navigate = useNavigation()

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required');
      return;
    }
    const data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, aspect: [1, 1], quality: 1
    });
    return navigate.navigate('register', { image: data.uri })
  }


  const clickPicture = async () => {
    const data = await camera.takePictureAsync();
    console.log(data)
    return navigate.navigate('register', { image: data.uri })
  }

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  return (
    <>
      {!hasCameraPermission && <Text>No access to camera</Text>}
      {hasCameraPermission &&
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1, aspectRatio: 1 }}
            ratio='1.1'
            type={type} ref={(e) => setCamera(e)}
          />
          <View style={styles.cameraContainer}>
            <Icon
              name='image'
              size={40}
              color='#fff'
              onPress={openImagePickerAsync}
            />
            <Icon
              name='camera'
              size={40}
              color='#fff'
              onPress={clickPicture}
            />
            <Icon
              name='flip-camera-android'
              size={40}
              color='#fff'
              onPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)}
            />
          </View>
        </View>
      }
    </>
  );
}

export default Cameras;

const styles = StyleSheet.create({
  cameraContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    justifyContent: 'space-evenly',
    width: '100%'
  },
  fixedRatio: {
  }
});