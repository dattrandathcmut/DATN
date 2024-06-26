import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const SignIn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView>
      <ImageBackground
        style={styles.signInIcon}
        resizeMode="cover"
        source={require("../assets/forgotpassword.png")}
      >
        <Image
          style={styles.signInChild}
          contentFit="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Image
          style={styles.signInChild}
          contentFit="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <SafeAreaView>
          <Pressable style={styles.back2} onPress={() => navigation.navigate("SMF")}>
            <Text style={styles.back1}>BACK</Text>
          </Pressable>
        </SafeAreaView>
        <Text style={styles.signIn}>Sign In</Text>
        <Image
          style={styles.iconLeaf}
          contentFit="cover"
          source={require("../assets/-icon-leaf2.png")}
        />
        <View style={[styles.signInInner, styles.signInInnerLayout]} />
        <View style={[styles.rectangleView, styles.signInInnerLayout]} />
        <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
        <Text style={[styles.password, styles.usernameTypo]}>{`Password
`}</Text>
        <Text style={[styles.logIn, styles.logInTypo]}>LOG IN</Text>
        <Text style={[styles.signUp, styles.logInTypo]}>SIGN UP</Text>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-12.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectanglePressable, styles.wrapperLayout]}
          onPress={() => navigation.navigate("General")}
        />
        <Text style={styles.smf}>{`SMF
`}</Text>
        <Pressable
          style={[styles.container, styles.wrapperLayout]}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-12.png")}
          />
        </Pressable>
        <Text style={[styles.forgotPassword, styles.logInTypo]}>
          FORGOT PASSWORD
        </Text>
      </ImageBackground>

    </ScrollView>

  );
};

const styles = StyleSheet.create({
  signInInnerLayout: {
    height: 41,
    width: 306,
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_11xl,
    marginLeft: -153,
    left: "50%",
    position: "absolute",
  },
  usernameTypo: {
    height: 2,
    width: 157,
    fontFamily: FontFamily.dhurjati,
    fontSize: FontSize.size_xl,
    left: 40,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  logInTypo: {
    height: 20,
    left: "50%",
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.michroma,
    letterSpacing: 4.1,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  wrapperLayout: {
    height: 30,
    width: 287,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    left: '16%',
  },
  signInChild: {
    top: 0,
    left: 0,
    width: 600,
    position: "absolute",
    height: 1000,
  },
  back1: {
    color: Color.colorMintcream_100,
    width: 63,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.michroma,
    letterSpacing: 4.1,
    fontSize: FontSize.size_xs,
  },
  back: {
    top: 33,
    left: 16,
    position: "absolute",
  },
  back2: {
    top: 40,
    left: 16,
    position: "absolute",
  },
  signIn: {
    top: 237,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.gudea,
    width: 95,
    height: 36,
    color: Color.colorWhite,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  iconLeaf: {
    height: "8.74%",
    width: "12.64%",
    top: "7.5%",
    right: "43.75%",
    bottom: "83.76%",
    left: "43.61%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "",
  },
  signInInner: {
    top: 312,
  },
  rectangleView: {
    top: 379,
  },
  username: {
    top: 312,
  },
  password: {
    top: 379,
  },
  logIn: {
    marginLeft: -33,
    top: 453,
    width: 141,
  },
  signUp: {
    marginLeft: -36,
    top: 495,
    width: 125,
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_xl,
    width: "100%",
  },
  wrapper: {
    top: 488,
    left: 37,
    width: 287,
  },
  rectanglePressable: {
    top: 446,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.colorForestgreen,
    borderWidth: 1.5,
    borderRadius: Border.br_xl,
    left: 37,
    width: 287,
  },
  smf: {
    marginLeft: -40,
    top: 146,
    fontSize: FontSize.size_21xl,
    color: Color.colorGray_100,
    width: 142,
    height: 55,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.michroma,
    position: "absolute",
    paddingTop: 15,
  },
  container: {
    left: 36,
    top: 537,
  },
  forgotPassword: {
    marginLeft: -80,
    top: 544,
    width: 250,
  },
  signInIcon: {
    flex: 1,
    overflow: "hidden",
    height: 1000,
    width: "100%",
  },
});

export default SignIn;
