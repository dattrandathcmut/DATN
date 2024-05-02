import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView>
      <ImageBackground
        style={styles.signUpIcon}
        resizeMode="cover"
        source={require("../assets/signup.png")}
      >
        <View style={styles.signUpChild} />
        <Text style={styles.signUp}>Sign Up</Text>
        <Image
          style={styles.iconLeaf}
          contentFit="cover"
          source={require("../assets/-icon-leaf2.png")}
        />
        <View style={[styles.signUpItem, styles.signLayout]} />
        <View style={[styles.signUpInner, styles.signLayout]} />
        <View style={[styles.rectangleView, styles.signLayout]} />
        <View style={[styles.signUpChild1, styles.signLayout]} />
        <Text style={[styles.username, styles.passwordTypo]}>Username</Text>
        <Text style={[styles.gmail, styles.passwordTypo]}>Gmail</Text>
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <Text style={[styles.confirmPassword, styles.passwordTypo]}>
          Confirm Password
        </Text>
        <Text style={[styles.signUp1, styles.back1Typo]}>SIGN UP</Text>
        <Image
          style={[styles.visibleEyeEyeballOpenViewIcon, styles.visibleViewLayout]}
          contentFit="cover"
          source={require("../assets/visibleeyeeyeballopenview.png")}
        />
        <Image
          style={[
            styles.visibleEyeEyeballOpenViewIcon1,
            styles.visibleViewLayout,
          ]}
          contentFit="cover"
          source={require("../assets/visibleeyeeyeballopenview.png")}
        />
        <SafeAreaView>
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={[styles.back1, styles.back1Typo]}>BACK</Text>
          </Pressable>
        </SafeAreaView>
        <Pressable
          style={[styles.rectanglePressable, styles.signUp1Position]}
          onPress={() => navigation.navigate("SignIn")}
        />
        <Text style={styles.smf}>{`SMF
`}</Text>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signLayout: {
    height: 41,
    width: 306,
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_11xl,
    marginLeft: -152,
    left: "50%",
    position: "absolute",
  },
  passwordTypo: {
    height: 2,
    width: 157,
    fontFamily: FontFamily.dhurjati,
    fontSize: FontSize.size_xl,
    left: 44,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  back1Typo: {
    height: 16,
    letterSpacing: 4.1,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.michroma,
    textAlign: "left",
    color: Color.colorWhite,
  },
  visibleViewLayout: {
    left: "79.72%",
    right: "14.11%",
    width: "6.17%",
    height: "1.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signUp1Position: {
    left: "50%",
    position: "absolute",
  },
  signUpChild: {
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.76)",
    width: "100%",
    position: "absolute",
    height: 1000,
  },
  signUp: {
    top: 239,
    left: 16,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.gudea,
    width: 115,
    height: 36,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iconLeaf: {
    height: "8.74%",
    width: "12.64%",
    top: "6.88%",
    right: "41.53%",
    bottom: "84.39%",
    left: "45.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "",
  },
  signUpItem: {
    top: 314,
  },
  signUpInner: {
    top: 379,
  },
  rectangleView: {
    top: 444,
  },
  signUpChild1: {
    top: 509,
  },
  username: {
    top: 315,
  },
  gmail: {
    top: 380,
  },
  password: {
    top: 445,
  },
  confirmPassword: {
    top: 509,
  },
  signUp1: {
    marginLeft: -51,
    top: 590,
    width: 153,
    left: "50%",
    position: "absolute",
  },
  visibleEyeEyeballOpenViewIcon: {
    top: "50.5%",
    bottom: "40.95%",
  },
  visibleEyeEyeballOpenViewIcon1: {
    top: "57.5%",
    bottom: "32.95%",
  },
  back1: {
    width: 68,
  },
  back: {
    left: 15,
    top: 30,
    position: "absolute",
  },
  rectanglePressable: {
    marginLeft: -143,
    top: 585,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.colorForestgreen,
    borderWidth: 1.5,
    width: 287,
    height: 30,
  },
  smf: {
    marginLeft: -57,
    top: 147,
    fontSize: FontSize.size_21xl,
    color: Color.colorGray_100,
    width: 142,
    height: 55,
    fontFamily: FontFamily.michroma,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  signUpIcon: {
    flex: 1,
    width: "100%",
    overflow: "",
    height: 900,
  },
});

export default SignUp;
