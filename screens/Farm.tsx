import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Farm = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.farm1}>
        <Text style={styles.farm11}>Farm 1</Text>
        <Text style={[styles.smf, styles.smfTypo]}>SMF</Text>
        <Image
          style={styles.iconLeaf}
          contentFit="cover"
          source={require("../assets/-icon-leaf.png")}
        />
        <View style={styles.unionParent}>
          <Image
            style={styles.unionIcon}
            contentFit="cover"
            source={require("../assets/union1.png")}
          />
          <View style={styles.frameParent}>
            <View style={styles.rectangleLayout}>
              <View style={[styles.frameChild, styles.rectangleLayout]} />
              <View style={[styles.frameGroup, styles.frameFlexBox]}>
                <View style={styles.frameContainer}>
                  <View style={styles.rightParent}>
                    <Image
                      style={styles.rightIconLayout}
                      contentFit="cover"
                      source={require("../assets/right.png")}
                    />
                    <Text style={[styles.soilMoisture, styles.textTypo]}>
                      Soil moisture
                    </Text>
                  </View>
                  <Text style={[styles.text, styles.textTypo]}>0</Text>
                </View>
                <View style={styles.frameItem} />
                <View style={styles.frameContainer}>
                  <View style={styles.rightParent}>
                    <Image
                      style={[
                        styles.humbleiconswind,
                        styles.humbleiconswindLayout,
                      ]}
                      contentFit="cover"
                      source={require("../assets/humbleiconswind.png")}
                    />
                    <Text style={[styles.soilMoisture, styles.textTypo]}>
                      Wind
                    </Text>
                  </View>
                  <Text style={[styles.text, styles.textTypo]}>12 m/s</Text>
                </View>
                <View style={styles.frameItem} />
                <View style={styles.frameContainer}>
                  <View style={styles.rightParent}>
                    <Image
                      style={[
                        styles.humbleiconswind,
                        styles.humbleiconswindLayout,
                      ]}
                      contentFit="cover"
                      source={require("../assets/mdihumidity.png")}
                    />
                    <Text style={[styles.soilMoisture, styles.textTypo]}>
                      Humidity
                    </Text>
                  </View>
                  <Text style={[styles.text, styles.textTypo]}>49%</Text>
                </View>
              </View>
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.frameChild, styles.rectangleLayout]} />
              <View style={[styles.frameParent2, styles.frameFlexBox]}>
                <View style={styles.frameContainer}>
                  <Text style={[styles.now, styles.textTypo]}>Now</Text>
                  <View style={styles.parent}>
                    <Text style={[styles.text2, styles.textTypo]}>12</Text>
                    <Image
                      style={styles.frameIcon}
                      contentFit="cover"
                      source={require("../assets/frame-18.png")}
                    />
                  </View>
                  <Image
                    style={[styles.rightIcon1, styles.rightIconLayout]}
                    contentFit="cover"
                    source={require("../assets/right1.png")}
                  />
                </View>
                <View style={styles.frameContainer}>
                  <Text style={[styles.now, styles.textTypo]}>12:00</Text>
                  <View style={styles.parent}>
                    <Text style={[styles.text2, styles.textTypo]}>14</Text>
                    <Image
                      style={styles.frameIcon}
                      contentFit="cover"
                      source={require("../assets/frame-181.png")}
                    />
                  </View>
                  <Image
                    style={[
                      styles.carbonhumidityAltIcon,
                      styles.humbleiconswindLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/carbonhumidityalt.png")}
                  />
                </View>
                <View style={styles.frameContainer}>
                  <Text style={[styles.now, styles.textTypo]}>14:00</Text>
                  <View style={styles.parent}>
                    <Text style={[styles.text2, styles.textTypo]}>19</Text>
                    <Image
                      style={styles.frameIcon}
                      contentFit="cover"
                      source={require("../assets/frame-182.png")}
                    />
                  </View>
                  <Image
                    style={styles.carbonhumidityAltIcon1}
                    contentFit="cover"
                    source={require("../assets/carbonhumidityalt1.png")}
                  />
                </View>
                <View style={styles.frameContainer}>
                  <Text style={[styles.now, styles.textTypo]}>16:00</Text>
                  <View style={styles.parent}>
                    <Text style={[styles.text2, styles.textTypo]}>13</Text>
                    <Image
                      style={styles.frameIcon}
                      contentFit="cover"
                      source={require("../assets/frame-183.png")}
                    />
                  </View>
                  <Image
                    style={[styles.rightIcon1, styles.rightIconLayout]}
                    contentFit="cover"
                    source={require("../assets/right2.png")}
                  />
                </View>
                <View style={styles.frameContainer}>
                  <Text style={[styles.now, styles.textTypo]}>18:00</Text>
                  <View style={styles.parent}>
                    <Text style={[styles.text2, styles.textTypo]}>09</Text>
                    <Image
                      style={styles.frameIcon}
                      contentFit="cover"
                      source={require("../assets/frame-18.png")}
                    />
                  </View>
                  <Image
                    style={[styles.rightIcon1, styles.rightIconLayout]}
                    contentFit="cover"
                    source={require("../assets/right1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Button
          style={[styles.button20, styles.buttonFlexBox]}
          mode="contained"
          labelStyle={styles.button20Btn}
          onPress={() => navigation.navigate("WaterPump")}
          contentStyle={styles.button20Btn1}
        >
          Water pump
        </Button>
        {/* 
        <Pressable
          style={styles.button18}
          onPress={() => navigation.navigate("WaterPump")}
        >
          <Text style={[styles.waterPump, styles.waterPumpTypo]}>Water pump</Text>
          <Image style={styles.button18Child} contentFit="cover" />
        </Pressable> */}
        <Pressable
          style={[styles.button19, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("WaterPump")}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.pestAndDisease, styles.waterPumpTypo]}>
            Pest and disease inspection
          </Text>
        </Pressable>
        <Button
          style={[styles.button20, styles.buttonFlexBox]}
          mode="contained"
          labelStyle={styles.button20Btn}
          onPress={() => navigation.navigate("Camera")}
          contentStyle={styles.button20Btn1}
        >
          About this farm
        </Button>
        <Text style={[styles.back, styles.smfTypo]}>BACK</Text>
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("../assets/avatar.png")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button20Btn: {
    color: "#081c15",
    fontSize: 18,
    fontFamily: "Montserrat",
  },
  button20Btn1: {
    paddingHorizontal: 32,
    paddingVertical: 18,
    height: 74,
    width: 344,
  },
  smfTypo: {
    fontFamily: FontFamily.michroma,
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout: {
    height: 136,
    width: 344,
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.roboto,
    textAlign: "left",
  },
  humbleiconswindLayout: {
    height: 24,
    overflow: "hidden",
  },
  rightIconLayout: {
    height: 22,
    width: 22,
  },
  waterPumpTypo: {
    height: 11,
    display: "flex",
    color: Color.colorGray_400,
    fontFamily: FontFamily.montserrat,
    fontSize: FontSize.size_lg,
    alignItems: "center",
    textAlign: "left",
  },
  buttonFlexBox: {
    justifyContent: "center",
    left: 10,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  farm11: {
    top: 129,
    left: 15,
    fontFamily: FontFamily.kronaOne,
    width: 171,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  smf: {
    marginLeft: -38,
    top: 46,
    color: Color.colorGray_500,
    width: 91,
    height: 37,
    left: "50%",
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
    height: 322,
    width: 390,
  },
  frameChild: {
    marginLeft: -172,
    top: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen,
    left: "50%",
    position: "absolute",
  },
  soilMoisture: {
    marginLeft: 4,
    fontWeight: "600",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.headingHeading07_size,
  },
  rightParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    marginTop: 12,
    fontWeight: "600",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_5xl,
  },
  frameContainer: {
    alignItems: "center",
  },
  frameItem: {
    borderStyle: "solid",
    borderColor: Color.colorGray_700,
    borderRightWidth: 1,
    width: 1,
    height: 66,
  },
  humbleiconswind: {
    width: 24,
  },
  frameGroup: {
    marginLeft: -159,
    top: 35,
    width: 318,
    alignItems: "flex-end",
  },
  now: {
    fontWeight: "300",
    fontSize: FontSize.headingHeading07_size,
  },
  text2: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.roboto,
  },
  frameIcon: {
    width: 4,
    height: 8,
    marginLeft: 4,
  },
  parent: {
    marginTop: 8,
    flexDirection: "row",
  },
  rightIcon1: {
    marginTop: 8,
  },
  carbonhumidityAltIcon: {
    width: 32,
    marginTop: 8,
  },
  carbonhumidityAltIcon1: {
    height: 21,
    marginTop: 8,
    width: 22,
    overflow: "hidden",
  },
  frameParent2: {
    marginTop: -39,
    marginLeft: -154,
    width: 308,
    alignItems: "center",
    top: "50%",
  },
  rectangleGroup: {
    marginTop: 18,
  },
  frameParent: {
    marginTop: -144.5,
    left: 19,
    top: "50%",
    position: "absolute",
  },
  unionParent: {
    top: 185,
    left: -9,
    height: 307,
    width: 390,
    position: "absolute",
  },
  waterPump: {
    width: 146,
  },
  button18Child: {
    width: 28,
    maxHeight: "100%",
  },
  button18: {
    top: 506,
    left: 10,
    position: "absolute",
  },
  vectorIcon: {
    width: 33,
    height: 25,
  },
  pestAndDisease: {
    width: 280,
    marginLeft: 19,
  },
  button19: {
    top: 608,
    backgroundColor: "#80ed99",
    height: 74,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 18,
    width: 344,
    justifyContent: "center",
  },
  button20: {
    top: 710,
  },
  back: {
    top: 14,
    left: 17,
    fontSize: FontSize.size_xs,
    letterSpacing: 4.1,
    width: 68,
    height: 16,
    color: Color.colorBlack,
    fontFamily: FontFamily.michroma,
  },
  avatarIcon: {
    top: 12,
    left: 302,
    borderRadius: Border.br_781xl,
    width: 40,
    height: 40,
    position: "absolute",
  },
  farm1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Farm;
