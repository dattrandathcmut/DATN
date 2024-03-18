import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const WaterPump = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.waterPump}>
      <Text style={[styles.farm1, styles.farm1FlexBox]}>
        Farm 1 - Water pump
      </Text>
      <Text style={[styles.smf, styles.smfTypo]}>SMF</Text>
      <Image
        style={[styles.iconLeaf, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-leaf.png")}
      />
      <Text style={[styles.back, styles.backPosition]}>BACK</Text>
      <View style={[styles.waterPumpChild, styles.waterPosition]} />
      <View style={[styles.waterPumpItem, styles.waterPosition]} />
      <View style={[styles.dSwitch, styles.switchLayout]}>
        <View style={[styles.switchBody, styles.switchLayout]}>
          <View style={styles.switchBody1}>
            <View style={[styles.switchBody2, styles.switchPosition]} />
          </View>
        </View>
        <Image
          style={[styles.switchIcon, styles.switchIconLayout]}
          contentFit="cover"
          source={require("../assets/switch1.png")}
        />
      </View>
      <Text style={[styles.p1, styles.p1Typo]}>P.1</Text>
      <View style={[styles.waterPumpInner, styles.rectangleViewPosition]} />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={[styles.dSwitch1, styles.switchLayout]}>
        <View style={[styles.switchBody, styles.switchLayout]}>
          <View style={styles.switchBody1}>
            <View style={[styles.switchBody2, styles.switchPosition]} />
          </View>
        </View>
        <Image
          style={[styles.switchIcon, styles.switchIconLayout]}
          contentFit="cover"
          source={require("../assets/switch1.png")}
        />
      </View>
      <Text style={[styles.p2, styles.p1Typo]}>P.2</Text>
      <View style={[styles.waterPumpChild1, styles.waterChildPosition]} />
      <View style={[styles.waterPumpChild2, styles.waterChildPosition]} />
      <Text style={[styles.p3, styles.p1Typo]}>P.3</Text>
      <View style={[styles.dSwitch2, styles.switchLayout]}>
        <View style={[styles.switchBody, styles.switchLayout]}>
          <View style={styles.switchBody1}>
            <View style={[styles.switchBody8, styles.switchPosition]} />
          </View>
        </View>
        <Image
          style={[styles.switchIcon2, styles.switchIconLayout]}
          contentFit="cover"
          source={require("../assets/switch2.png")}
        />
      </View>
      <Image
        style={[styles.button8Icon, styles.backPosition]}
        contentFit="cover"
        source={require("../assets/button-8.png")}
      />
      <Button
        style={styles.rectangleButton}
        mode="outlined"
        onPress={() => navigation.navigate("AddnewWaterPum")}
        contentStyle={styles.rectangleButtonContent}
        icon={() => (
          <Image
            style={[styles.iconPlus, styles.iconLayout]}
            source={require("../assets/-icon-plus.png")}
          />
        )}
      >
        Add New Water Pump
      </Button>
      <Image
        style={styles.avatarIcon}
        contentFit="cover"
        source={require("../assets/avatar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleButtonBtn: {
    borderRadius: 20,
    height: 60,
    width: 339,
  },
  farm1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  smfTypo: {
    fontFamily: FontFamily.michroma,
    textAlign: "left",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  backPosition: {
    left: 17,
    position: "absolute",
  },
  waterPosition: {
    height: 41,
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_11xl,
    top: 205,
    marginLeft: -165,
    left: "50%",
    position: "absolute",
  },
  switchLayout: {
    height: 25,
    width: 63,
    position: "absolute",
  },
  switchPosition: {
    borderRadius: Border.br_31xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  switchIconLayout: {
    height: 19,
    width: 22,
    top: 3,
    position: "absolute",
  },
  p1Typo: {
    height: 2,
    width: 157,
    color: Color.colorWhite,
    fontFamily: FontFamily.dhurjati,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  rectangleViewPosition: {
    top: 259,
    height: 41,
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_11xl,
    marginLeft: -165,
    left: "50%",
    position: "absolute",
  },
  waterChildPosition: {
    top: 314,
    marginLeft: -166,
    height: 41,
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_11xl,
    left: "50%",
    position: "absolute",
  },
  farm1: {
    top: 129,
    left: 15,
    fontFamily: FontFamily.kronaOne,
    width: 339,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
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
    position: "absolute",
  },
  iconLeaf: {
    height: "4.5%",
    width: "7.39%",
    top: "1.75%",
    right: "46.22%",
    bottom: "93.75%",
    left: "46.39%",
  },
  back: {
    top: 14,
    fontSize: FontSize.size_xs,
    letterSpacing: 4.1,
    width: 68,
    height: 16,
    fontFamily: FontFamily.michroma,
    textAlign: "left",
    color: Color.colorBlack,
  },
  waterPumpChild: {
    width: 306,
  },
  waterPumpItem: {
    width: 331,
  },
  switchBody2: {
    backgroundColor: Color.colorWhitesmoke_200,
  },
  switchBody1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  switchBody: {
    top: 0,
    left: 0,
  },
  switchIcon: {
    left: 3,
  },
  dSwitch: {
    top: 213,
    left: 271,
    width: 63,
  },
  p1: {
    top: 206,
    left: 31,
  },
  waterPumpInner: {
    width: 306,
  },
  rectangleView: {
    width: 331,
  },
  dSwitch1: {
    top: 267,
    left: 271,
    width: 63,
  },
  p2: {
    top: 260,
    left: 32,
  },
  waterPumpChild1: {
    width: 306,
  },
  waterPumpChild2: {
    width: 331,
  },
  p3: {
    top: 315,
    left: 30,
  },
  switchBody8: {
    backgroundColor: Color.switchGreen,
  },
  switchIcon2: {
    left: 38,
  },
  dSwitch2: {
    top: 322,
    left: 271,
    width: 63,
  },
  button8Icon: {
    top: 571,
    width: 50,
    height: 50,
  },
  iconPlus: {
    height: "3.75%",
    width: "8.33%",
    top: "72.63%",
    right: "84.17%",
    bottom: "23.63%",
    left: "7.5%",
  },
  rectangleButton: {
    top: 566,
    left: 11,
    borderStyle: "solid",
    borderColor: Color.colorLimegreen_100,
    borderWidth: 3,
    position: "absolute",
  },
  addNewWater: {
    top: 585,
    left: 86,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.montserrat,
    color: Color.colorGray_400,
    display: "flex",
    alignItems: "center",
    width: 226,
    height: 24,
  },
  avatarIcon: {
    top: 12,
    left: 302,
    borderRadius: Border.br_781xl,
    width: 40,
    height: 40,
    position: "absolute",
  },
  waterPump: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
  rectangleButtonContent: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Center the content vertically
    justifyContent: 'center', // Center the content horizontally
  },
});

export default WaterPump;
