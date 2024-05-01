import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const SMF = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView>
      <View style={styles.smf}>
        <View style={styles.smfChild} />
        <Text style={[styles.smf1, styles.smf1Typo]}>{`SMF
`}</Text>
        <Text style={[styles.bringFarmTo, styles.smf1Typo]}>
          Bring farm to your phone
        </Text>

        <Pressable
          style={styles.smfItem}
          onPress={() => navigation.navigate("SignIn")}
        />
        <Text style={[styles.logIn, styles.smf1Typo]}>LOG IN</Text>
        <Image
          style={styles.iconLeaf}
          contentFit="cover"
          source={require("../assets/-icon-leaf2.png")}
        />
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  smf1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.michroma,
    position: "absolute",
  },
  smfChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGray_500,
    width: "100%",
    position: "absolute",
    height: 1000,
  },
  smf1: {
    marginLeft: -48,
    top: 359,
    fontSize: FontSize.size_21xl,
    color: Color.colorGray_100,
    width: 142,
    height: 55,
    left: "50%",
    fontFamily: FontFamily.michroma,
  },
  bringFarmTo: {
    marginLeft: -89,
    top: 414,
    fontSize: FontSize.headingHeading07_size,
    color: "#3fc74c",
    width: 242,
    height: 15,
    left: "50%",
    fontFamily: FontFamily.michroma,
  },
  smfItem: {
    top: 578,
    borderRadius: Border.br_xl,
    backgroundColor: "rgba(66, 211, 81, 0)",
    borderStyle: "solid",
    borderColor: Color.colorLimegreen_100,
    borderWidth: 1,
    width: 255,
    height: 30,
    left: "50%", // Add this line
    marginLeft: -127.5, // Adjusted half of the width
    position: "absolute",
  },

  logIn: {
    top: 582, // Adjust this value to center the text vertically
    justifyContent: "center", // Remove this line
    alignItems: "center", // Add this line
    fontSize: FontSize.size_xs,
    letterSpacing: 4.1,
    color: Color.colorWhite,
    width: 119,
    height: 16,
    marginLeft: -36, // Adjusted half of the width
    left: "50%", // Add this line
    position: "absolute", // Add this line
  },

  iconLeaf: {
    height: "8.74%",
    width: "12.64%",
    top: "34.63%",
    right: "43.75%",
    bottom: "56.64%",
    left: "43.61%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "",
  },
  smf: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default SMF;
