import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { RNCamera } from 'react-native-camera';
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Table, Row, Rows } from 'react-native-table-component';

const spect = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [showMore, setShowMore] = React.useState(false);
    
    const tableHead = ['#', 'Disease Name', 'Time'];
    const tableData = [
        ['1', 'Disease A', '10:00 AM'],
        ['2', 'Disease B', '10:30 AM'],
        ['3', 'Disease C', '11:00 AM'],
        ...(showMore ? [
            ['4', 'Disease D', '11:30 AM'],
            ['5', 'Disease E', '12:00 PM'],
        ] : [])
    ];

    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.camera}>
                    <Text style={[styles.farm1, styles.farm1FlexBox]}>Farm 1</Text>
                    <Text style={[styles.smf, styles.smfTypo1]}>SMF</Text>
                    <Image
                        style={styles.iconLeaf}
                        resizeMode="stretch"
                        source={require("../assets/-icon-leaf.png")}
                    />

                    <Button
                        style={styles.cameraChild}
                        mode="contained"
                        labelStyle={styles.frameButtonBtn}
                        onPress={() => navigation.navigate("Camera")}
                        contentStyle={styles.frameButtonBtn1}
                    >
                        Open Camera
                    </Button>
                    <TouchableOpacity
                        style={[styles.back, styles.smfTypo]}
                        onPress={() => navigation.navigate("Farm")}
                    >
                        <Text>BACK</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.avatarIcon}
                        contentFit="cover"
                        source={require("../assets/avatar.png")}
                    />

                    <View style={styles.tableContainer}>
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                            <Rows data={tableData} textStyle={styles.text} />
                        </Table>
                        <TouchableOpacity style={styles.showMoreButton} onPress={() => setShowMore(!showMore)}>
                            <Text style={styles.showMoreText}>{showMore ? 'Show Less' : 'Show More'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
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
    smfTypo1: {
        textAlign: "left",
        fontSize: FontSize.size_5xl,
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
    cameraChild: {
        top: 730,
        left: '20%',
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
        color: Color.colorBlack,
        fontFamily: FontFamily.michroma,
    },
    avatarIcon: {
        borderRadius: Border.br_781xl,
        width: 40,
        height: 40,
        position: 'absolute',
        top: 12,
        right: 10,
    },
    tableContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 250,
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff',
    },
    text: {
        margin: 6,
        textAlign: 'center',
    },
    showMoreButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    showMoreText: {
        color: Color.colorMediumseagreen,
        fontFamily: FontFamily.michroma,
        fontSize: FontSize.size_md,
    },
    camera: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
});

export default spect;
