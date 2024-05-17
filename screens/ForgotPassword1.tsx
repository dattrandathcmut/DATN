import * as React from "react";
import { Image } from "expo-image";
import {
    StyleSheet,
    Text,
    Pressable,
    View,
    ImageBackground,
    Alert,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { TextInput } from "react-native";

const ForgotPassword1 = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };
    const handleConfirmPasswordChange = (text: string) => {
        setConfirmPassword(text);
    };
    const handleSubmit = () => {
        if (password !== confirmPassword) {
            Alert.alert('Passwords do not match', 'Please make sure passwords match.');
            return;

        }

        // Passwords match, you can proceed with further actions
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        navigation.navigate("General");
    };
    return (
        <ScrollView>
            <ImageBackground
                style={styles.forgotPasswordIcon}
                resizeMode="cover"
                source={require("../assets/forgotpassword.png")}
            >
                <Image
                    style={styles.forgotPasswordChild}
                    contentFit="cover"
                    source={require("../assets/rectangle-3.png")}
                />
                <Image
                    style={styles.forgotPasswordChild}
                    contentFit="cover"
                    source={require("../assets/rectangle-3.png")}
                />
                <SafeAreaView>
                    <Pressable style={styles.back} onPress={() => navigation.navigate("FogotPassword")}>
                        <Text style={styles.back1}>BACK</Text>
                    </Pressable>
                </SafeAreaView>
                <Image
                    style={styles.iconLeaf}
                    contentFit="cover"
                    source={require("../assets/-icon-leaf2.png")}
                />
                {/* <View style={[styles.forgotPasswordInner, styles.rectangleViewLayout]} /> */}
                <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
                {/* <Text style={[styles.US, styles.logInTypo]}>User Name/Email</Text> */}
                <Text style={[styles.OTP, styles.logInTypo]}>OTP</Text>
                <Text style={[styles.NPS, styles.logInTypo]}>New Password</Text>
                <Text style={[styles.CPS, styles.logInTypo]}>ConfirmPassword</Text>
                <Text style={[styles.logIn, styles.logInTypo]}>LOG IN</Text>
                {/* <Text style={[styles.signUp, styles.logInTypo]}>LOGIN</Text> */}
                <Pressable
                    style={[styles.rectanglePressable, styles.wrapperLayout]}
                    onPress={handleSubmit}
                />
                <Text style={styles.smf}>{`SMF
`}</Text>
                <Text style={styles.forgotPassword}>FORGOT PASSWORD</Text>
                <TextInput style={[styles.forgotPasswordChild1, styles.forgotChildLayout]}
                    placeholder="     At least 8 characters"
                    onChangeText={handlePasswordChange}
                    value={password}
                    secureTextEntry={true}
                    cursorColor={Color.colorWhite}
                    placeholderTextColor={Color.colorGray_200}
                    color={Color.colorWhite}
                />
                <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
                <TextInput style={[styles.forgotPasswordChild2, styles.passwordPosition]}
                    placeholder="    Confirm your password"
                    onChangeText={handleConfirmPasswordChange}
                    value={confirmPassword}
                    secureTextEntry={true}
                    cursorColor={Color.colorWhite}
                    placeholderTextColor={Color.colorGray_200}
                    color={Color.colorWhite}

                />
                <Text style={[styles.confirmPassword, styles.passwordPosition]}>
                    Confirm Password
                </Text>
                <Image
                    style={[styles.visibleEyeEyeballOpenViewIcon, styles.visibleViewLayout]}
                    contentFit="cover"
                    source={require("../assets/visibleeyeeyeballopenview1.png")}
                />
                <Image
                    style={[
                        styles.visibleEyeEyeballOpenViewIcon1,
                        styles.visibleViewLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/visibleeyeeyeballopenview1.png")}
                />
            </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    rectangleViewLayout: {
        height: 41,
        width: 306,
        backgroundColor: Color.colorGray_500,
        borderRadius: Border.br_11xl,
        marginLeft: -153,
        left: "50%",
        position: "absolute",
    },
    passwordTypo: {
        height: 2,
        width: 157,
        fontFamily: FontFamily.dhurjati,
        fontSize: FontSize.size_xl,
        color: Color.colorWhite,
        textAlign: "left",
    },
    logInTypo: {
        height: 16,
        color: Color.colorWhite,
        left: "50%",
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
        left: "16%",
    },
    forgotChildLayout: {
        marginLeft: -152,
        height: 41,
        width: 306,
        backgroundColor: Color.colorGray_500,
        borderRadius: Border.br_11xl,
        left: "50%",
    },
    passwordPosition: {
        top: 518,
        position: "absolute",
    },
    visibleViewLayout: {
        left: "79.06%",
        right: "10.78%",
        width: "6.17%",
        height: "1.93%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "",
    },
    forgotPasswordChild: {
        top: 0,
        left: 0,
        width: 0,
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
        left: 16,
        top: 33,
        position: "absolute",
    },
    iconLeaf: {
        height: "8.74%",
        width: "12.64%",
        top: "7.5%",
        right: "43.75%",
        bottom: "83.76%",
        left: "43.61%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "",
    },
    forgotPasswordInner: {
        top: 312,
    },
    rectangleView: {
        top: 379,
    },
    username: {
        left: 40,
        width: 157,
        fontFamily: FontFamily.dhurjati,
        fontSize: FontSize.size_xl,
        position: "absolute",
        top: 312,
    },
    otp: {
        left: 40,
        width: 157,
        fontFamily: FontFamily.dhurjati,
        fontSize: FontSize.size_xl,
        position: "absolute",
        top: 379,
    },
    logIn: {
        marginLeft: -40,
        top: 685,
        width: 200,
    },
    US: {
        marginLeft: -140,
        top: 295,
        width: 200,
    },
    OTP: {
        marginLeft: -140,
        top: 360,
        width: 200,
    },
    NPS: {
        marginLeft: -140,
        top: 435,
        width: 200,
    },
    CPS: {
        marginLeft: -140,
        top: 500,
        width: 200,
    },
    signUp: {
        marginLeft: -23,
        top: 727,
        width: 98,
    },
    icon: {
        height: "100%",
        borderRadius: Border.br_xl,
        width: "100%",
    },
    wrapper: {
        top: 720,
    },
    rectanglePressable: {
        top: 678,
        backgroundColor: Color.colorGainsboro,
        borderStyle: "solid",
        borderColor: Color.colorForestgreen,
        borderWidth: 1.5,
        borderRadius: Border.br_xl,

    },
    smf: {
        marginLeft: -40,
        top: 160,
        fontSize: FontSize.size_21xl,
        color: Color.colorGray_100,
        width: 142,
        height: 55,
        left: "50%",
        textAlign: "left",
        fontFamily: FontFamily.michroma,
        position: "absolute",
    },
    forgotPassword: {
        top: 243,
        left: 15,
        fontSize: FontSize.size_13xl,
        fontFamily: FontFamily.gudea,
        width: 308,
        height: 36,
        color: Color.colorWhite,
        textAlign: "left",
        position: "absolute",

    },
    forgotPasswordChild1: {
        top: 453,
        position: "absolute",
    },
    password: {
        top: 452,
        left: 45,
        position: "absolute",
    },
    forgotPasswordChild2: {
        marginLeft: -152,
        height: 41,
        width: 306,
        backgroundColor: Color.colorGray_500,
        borderRadius: Border.br_11xl,
        left: "50%",
    },
    confirmPassword: {
        left: 44,
        height: 2,
        width: 157,
        fontFamily: FontFamily.dhurjati,
        fontSize: FontSize.size_xl,
        color: Color.colorWhite,
        textAlign: "left",
    },
    visibleEyeEyeballOpenViewIcon: {
        top: "46.25%",
        bottom: "39.83%",
    },
    visibleEyeEyeballOpenViewIcon1: {
        top: "52.9%",
        bottom: "31.83%",
    },
    forgotPasswordIcon: {
        flex: 1,
        overflow: "hidden",
        height: 1000,
        width: "100%",
    },
});

export default ForgotPassword1;