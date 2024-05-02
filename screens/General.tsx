import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { TouchableOpacity } from 'react-native';

const General = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.general}>
          <Text style={[styles.general1, styles.smfTypo]}>General</Text>
          <Text style={[styles.smf, styles.smfTypo]}>SMF</Text>
          <Image
            style={styles.iconLeaf}
            resizeMode="stretch"
            source={require("../assets/-icon-leaf.png")}
          />
          <View style={[styles.rectangleParent, styles.rectangleLayout]}>
            <View style={[styles.frameChild, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
            <View style={[styles.rectangleView, styles.frameLayout]} />
            <Text style={[styles.farm1, styles.mintTypo]}>Farm 1</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Farm")}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/redorganictomatoplantod4xey9600removebgpreview-1.png")}
              />
            </TouchableOpacity>
            <Image
              style={[styles.pngwing4Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/pngwing-4.png")}
            />
            <Image
              style={styles.pngwing3Icon}
              contentFit="cover"
              source={require("../assets/pngwing-3.png")}
            />
            <Image
              style={[styles.pngwing2Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/pngwing-2.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <Text style={[styles.farm1, styles.mintTypo]}>Farm 2</Text>
            <Image
              style={styles.redOrganicTomatoPlantOd4xe}
              contentFit="cover"
              source={require("../assets/redorganictomatoplantod4xey9600removebgpreview-1.png")}
            />
            <Image
              style={[styles.pngwing4Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/pngwing-4.png")}
            />
            <Image
              style={styles.pngwing3Icon}
              contentFit="cover"
              source={require("../assets/pngwing-3.png")}
            />
            <Image
              style={[styles.pngwing2Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/pngwing-2.png")}
            />
          </View>
          <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
            <View style={[styles.frameChild, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
            <View style={[styles.rectangleView, styles.frameLayout]} />
            <Text style={[styles.farm1, styles.mintTypo]}>Farm 3</Text>

            <Image
              style={styles.redOrganicTomatoPlantOd4xe}
              contentFit="cover"
              source={require("../assets/redorganictomatoplantod4xey9600removebgpreview-1.png")}
            />
            <Image
              style={[styles.pngwing4Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/pngwing-4.png")}
            />
            <Image
              style={styles.pngwing3Icon}
              contentFit="cover"
              source={require("../assets/pngwing-3.png")}
            />
            <Image
              style={[styles.pngwing2Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/pngwing-2.png")}
            />
          </View>
          <View style={[styles.frameView, styles.frameViewPosition]}>
            <View style={[styles.frameChild, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
            <View style={[styles.rectangleView, styles.frameLayout]} />
            <Text style={[styles.farm1, styles.mintTypo]}>Farm 5</Text>
            <Text style={[styles.onion, styles.mintTypo]}>Onion</Text>
            <Text style={[styles.mint, styles.mintTypo]}>Mint</Text>
            <Text style={[styles.ginger, styles.mintTypo]}>Ginger</Text>
            <Image
              style={styles.redOrganicTomatoPlantOd4xe}
              contentFit="cover"
              source={require("../assets/redorganictomatoplantod4xey9600removebgpreview-1.png")}
            />
            <Image
              style={[styles.pngwing4Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/pngwing-4.png")}
            />
            <Image
              style={styles.pngwing3Icon}
              contentFit="cover"
              source={require("../assets/pngwing-3.png")}
            />
            <Image
              style={[styles.pngwing2Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/pngwing-2.png")}
            />
          </View>
          <View style={[styles.rectangleParent1, styles.frameViewPosition]}>
            <Text style={[styles.farm1, styles.mintTypo]}>Farm 6</Text>
            <Image
              style={styles.redOrganicTomatoPlantOd4xe}
              contentFit="cover"
              source={require("../assets/redorganictomatoplantod4xey9600removebgpreview-1.png")}
            />
            <Image
              style={[styles.pngwing4Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/pngwing-4.png")}
            />
            <Image
              style={styles.pngwing3Icon}
              contentFit="cover"
              source={require("../assets/pngwing-3.png")}
            />
            <Image
              style={[styles.pngwing2Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/pngwing-2.png")}
            />
          </View>
          <View style={[styles.rectangleParent2, styles.rectanglePosition]}>
            <Text style={[styles.farm1, styles.mintTypo]}>Farm 4</Text>
            <Image
              style={styles.redOrganicTomatoPlantOd4xe}
              contentFit="cover"
              source={require("../assets/redorganictomatoplantod4xey9600removebgpreview-1.png")}
            />
            <Image
              style={[styles.pngwing4Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/pngwing-4.png")}
            />
            <Image
              style={styles.pngwing3Icon}
              contentFit="cover"
              source={require("../assets/pngwing-3.png")}
            />
            <Image
              style={[styles.pngwing2Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/pngwing-2.png")}
            />
          </View>

          <Pressable
            onPress={
              () => navigation.navigate("Account")
            }>
            <Image
              style={[styles.avatarIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/avatar.png")}
            />
          </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  smfTypo: {
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  rectangleLayout: {
    height: 206,
    width: 162,
    position: "absolute",
  },
  frameLayout: {
    height: 147,
    width: 104,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_xl,
    top: 27,
    position: "absolute",
  },
  mintTypo: {
    height: 21,
    color: Color.colorGray_600,
    fontFamily: FontFamily.jost,
    fontSize: FontSize.size_xl,
    top: 174,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    top: 12,
    position: "absolute",
  },
  rectanglePosition: {
    top: 363,
    height: 206,
    width: 162,
    position: "absolute",
  },
  frameViewPosition: {
    top: 569,
    height: 206,
    width: 162,
    position: "absolute",
  },
  general1: {
    top: 129,
    left: 15,
    fontFamily: FontFamily.kronaOne,
    color: Color.colorBlack,
    width: 171,
  },
  smf: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 70,
    left: "50%",
    fontFamily: FontFamily.michroma,
    color: Color.colorGray_500,
    width: 91,
    height: 37,
  },
  iconLeaf: {
    height: "4.5%",
    width: "7.39%",
    top: "1.75%",
    right: "46.22%",
    bottom: "93.75%",
    left: "52.39%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    left: 25,
  },
  frameItem: {
    left: 200,
  },
  frameInner: {
    left: 200,
  },
  rectangleView: {
    left: 200,
  },
  farm1: {
    left: 48,
    width: 71,
  },
  onion: {
    left: 546,
    width: 53,
  },
  mint: {
    left: 676,
    width: 41,
  },
  ginger: {
    left: 420,
    width: 64,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  redOrganicTomatoPlantOd4xe: {
    left: 5,
    top: 20,
    width: 154,
    height: 184,
    position: "absolute",
  },
  pngwing4Icon: {
    left: 642,
    width: 112,
    height: 157,
  },
  pngwing3Icon: {
    top: 2,
    left: 541,
    width: 68,
    height: 159,
    position: "absolute",
  },
  pngwing2Icon: {
    left: 412,
    width: 82,
    height: 149,
  },
  rectangleParent: {
    top: 159,
    left: 45,
  },
  rectangleGroup: {
    top: 157,
    left: 215,
  },
  rectangleContainer: {
    left: 40,
  },
  frameView: {
    left: 40,
  },
  rectangleParent1: {
    left: 210,
  },
  rectangleParent2: {
    left: 210,
  },
  // avatarIcon: {
  //   // left: 400,
  //   justifyContent: 'flex-end',
  //   borderRadius: Border.br_781xl,
  //   width: 40,
  //   height: 40,
  // },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  avatarIcon: {
    borderRadius: Border.br_781xl,
    width: 40,
    height: 40,
    position: 'absolute',
    top: 12, // Điều chỉnh giá trị của top tùy theo vị trí bạn muốn đặt avatarIcon
    right: 10, // Điều chỉnh giá trị của right tùy theo vị trí bạn muốn đặt avatarIcon
  },

  general: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default General;
