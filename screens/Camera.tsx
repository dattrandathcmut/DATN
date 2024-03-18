import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { RNCamera } from 'react-native-camera';
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Camera = () => {
  const cameraRef = React.useRef<RNCamera | null>(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
      // Handle captured image data here
    }
  };

  return (
    <View style={styles.camera}>
      <Text style={[styles.farm1, styles.farm1FlexBox]}>Farm 1</Text>
      <Text style={[styles.smf, styles.smfTypo]}>SMF</Text>
      <Image
        style={styles.iconLeaf}
        contentFit="cover"
        source={require("../assets/-icon-leaf1.png")}
      />
      <RNCamera
        ref={cameraRef}
        style={styles.cameraPreview}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
      />
      <Button
        style={styles.cameraChild}
        mode="contained"
        labelStyle={styles.frameButtonBtn}
        onPress={takePicture}
        contentStyle={styles.frameButtonBtn1}
      >
        Start record
      </Button>
      <Text style={[styles.back, styles.smfTypo]}>BACK</Text>
      <Image
        style={styles.avatarIcon}
        contentFit="cover"
        source={require("../assets/avatar.png")}
      />
      <View style={[styles.cameraItem, styles.frameChildPosition]} />
      <View style={[styles.cameraInner, styles.aboutPosition]} />
      <Text style={[styles.about, styles.aboutPosition]}>{`About `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameButtonBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Montserrat",
  },
  frameButtonBtn1: {
    borderRadius: 20,
    height: 37,
    width: 258,
  },
  farm1FlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  smfTypo: {
    fontFamily: FontFamily.michroma,
    textAlign: "left",
    position: "absolute",
  },
  frameChildPosition: {
    borderRadius: Border.br_14xl,
    left: "50%",
    position: "absolute",
  },
  aboutPosition: {
    left: 13,
    top: 573,
    position: "absolute",
  },
  farm1: {
    top: 129,
    left: 15,
    fontFamily: FontFamily.kronaOne,
    width: 171,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  smf: {
    marginLeft: -38,
    top: 46,
    color: Color.colorGray_500,
    width: 91,
    height: 37,
    left: "50%",
    fontFamily: FontFamily.michroma,
    fontSize: FontSize.size_5xl,
  },
  iconLeaf: {
    height: "4.5%",
    width: "7.39%",
    top: "1.75%",
    right: "46.22%",
    bottom: "93.75%",
    left: "46.39%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
    top: "50%",
    left: 19,
    position: "absolute",
  },
  unionParent: {
    top: 185,
    left: -9,
    width: 369,
    height: 307,
    position: "absolute",
  },
  cameraChild: {
    top: 527,
    left: 51,
    position: "absolute",
    overflow: "hidden",
  },
  back: {
    top: 14,
    left: 17,
    fontSize: FontSize.size_xs,
    letterSpacing: 4.1,
    width: 68,
    height: 16,
    fontFamily: FontFamily.michroma,
    color: Color.colorBlack,
  },
  avatarIcon: {
    top: 12,
    left: 302,
    borderRadius: Border.br_781xl,
    width: 40,
    height: 40,
    position: "absolute",
  },
  cameraItem: {
    marginLeft: -164,
    top: 182,
    backgroundColor: "#f1fff5",
    width: 332,
    height: 324,
  },
  cameraInner: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 335,
    height: 1,
  },
  about: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.montserrat,
    display: "flex",
    alignItems: "center",
    width: 84,
    height: 31,
    textAlign: "left",
    color: Color.colorBlack,
  },
  camera: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  cameraPreview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Camera;
