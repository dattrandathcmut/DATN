import * as React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase, useFocusEffect } from '@react-navigation/native';
import { config } from '../components/config';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';
import { LineChart } from 'react-native-chart-kit';

const history = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const [temperatureData, setTemperatureData] = React.useState({
        labels: [],
        datasets: [
            {
                data: [],
                color: () => Color.colorRed,
                strokeWidth: 2,
            },
        ],
    });

    const [humidityData, setHumidityData] = React.useState({
        labels: [],
        datasets: [
            {
                data: [],
                color: () => Color.colorBlue,
                strokeWidth: 2,
            },
        ],
    });

    const [soilMoistureData, setSoilMoistureData] = React.useState({
        labels: [],
        datasets: [
            {
                data: [],
                color: () => Color.colorGreen,
                strokeWidth: 2,
            },
        ],
    });

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`${config.baseURL}/api/data`);
                    const data = await response.json();

                    if (data.status === 'success') {
                        const labels = data.data.slice(0, 7).map(item => new Date(item.ts).toLocaleDateString());

                        const temperatures = data.data.slice(0, 7).map(item => 
                            typeof item.temperature === 'number' && isFinite(item.temperature) ? item.temperature : 0
                        );

                        const humidities = data.data.slice(0, 7).map(item => 
                            typeof item.humidity === 'number' && isFinite(item.humidity) ? item.humidity : 0
                        );

                        const soilMoistures = data.data.slice(0, 7).map(item => 
                            typeof item.soilMoisture === 'number' && isFinite(item.soilMoisture) ? item.soilMoisture : 0
                        );

                        setTemperatureData({
                            labels,
                            datasets: [
                                {
                                    data: temperatures,
                                    color: () => Color.colorRed,
                                    strokeWidth: 2,
                                },
                            ],
                        });

                        setHumidityData({
                            labels,
                            datasets: [
                                {
                                    data: humidities,
                                    color: () => Color.colorBlue,
                                    strokeWidth: 2,
                                },
                            ],
                        });

                        setSoilMoistureData({
                            labels,
                            datasets: [
                                {
                                    data: soilMoistures,
                                    color: () => Color.colorGreen,
                                    strokeWidth: 2,
                                },
                            ],
                        });
                    }
                } catch (error) {
                    console.error(error);
                }
            };

            fetchData();
        }, [])
    );

    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.camera}>
                    <Text style={[styles.farm1, styles.farm1FlexBox]}>Farm 1</Text>
                    <Text style={[styles.his, styles.farm2FlexBox]}>
                        MEASUREMENT HISTORY
                    </Text>
                    <Text style={[styles.smf, styles.smfTypo1]}>SMF</Text>
                    <Image
                        style={styles.iconLeaf}
                        resizeMode='stretch'
                        source={require('../assets/-icon-leaf.png')}
                    />
                    <TouchableOpacity
                        style={[styles.back, styles.smfTypo]}
                        onPress={() => navigation.navigate('Farm')}
                    >
                        <Text>BACK</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.avatarIcon}
                        contentFit='cover'
                        source={require('../assets/avatar.png')}
                    />

                    <ScrollView style={styles.chartContainer}>
                        <Text style={styles.chartTitle}>Temperature</Text>
                        <LineChart
                            data={temperatureData}
                            width={Dimensions.get('window').width - 40}
                            height={450}
                            yAxisSuffix="°C"
                            chartConfig={{
                                backgroundColor: '#ffffff',
                                backgroundGradientFrom: '#ff9e2c',
                                backgroundGradientTo: '#ff512f',
                                decimalPlaces: 1,
                                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                                propsForDots: {
                                    r: '4',
                                    strokeWidth: '3',
                                    stroke: '#ffa726',
                                },
                                propsForBackgroundLines: {
                                    strokeDasharray: '', // solid background lines with no dashes
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                            fromZero={true}
                            yLabelsOffset={5}
                            xLabelsOffset={5}
                            yAxisLabel=" "
                            segments={10}
                            verticalLabelRotation={30}
                        />

                        <Text style={styles.chartTitle}>Humidity</Text>
                        <LineChart
                            data={humidityData}
                            width={Dimensions.get('window').width - 40}
                            height={450}
                            yAxisSuffix="%"
                            chartConfig={{
                                backgroundColor: '#ffffff',
                                backgroundGradientFrom: '#2E86AB',
                                backgroundGradientTo: '#008ECC',
                                decimalPlaces: 1,
                                color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                                propsForDots: {
                                    r: '4',
                                    strokeWidth: '3',
                                    stroke: '#ffa726',
                                },
                                propsForBackgroundLines: {
                                    strokeDasharray: '', // solid background lines with no dashes
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 10,
                            }}
                            fromZero={true}
                            yLabelsOffset={5}
                            xLabelsOffset={5}
                            yAxisLabel=" "
                            segments={10}
                            verticalLabelRotation={30}
                        />

                        <Text style={styles.chartTitle}>Soil Moisture</Text>
                        <LineChart
                            data={soilMoistureData}
                            width={Dimensions.get('window').width - 40}
                            height={450}
                            yAxisSuffix="%"
                            chartConfig={{
                                backgroundColor: '#ffffff',
                                backgroundGradientFrom: '#56ab2f',
                                backgroundGradientTo: '#a8e063',
                                decimalPlaces: 1,
                                color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 10,
                                },
                                propsForDots: {
                                    r: '4',
                                    strokeWidth: '3',
                                    stroke: '#ffa726',
                                },
                                propsForBackgroundLines: {
                                    strokeDasharray: '', // solid background lines with no dashes
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                            fromZero={true}
                            yLabelsOffset={5}
                            xLabelsOffset={5}
                            yAxisLabel=" "
                            segments={10}
                            verticalLabelRotation={30}
                        />
                    </ScrollView>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    frameButtonBtn: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'Montserrat',
    },
    frameButtonBtn1: {
        borderRadius: 20,
        height: 37,
        width: 258,
    },
    farm1FlexBox: {
        textAlign: 'left',
        color: Color.colorBlack,
    },
    farm2FlexBox: {
        textAlign: 'left',
        color: Color.colorSeagreen,
    },
    smfTypo: {
        fontFamily: FontFamily.michroma,
        textAlign: 'left',
        position: 'absolute',
    },
    smfTypo1: {
        textAlign: 'left',
        fontSize: FontSize.size_5xl,
        position: 'absolute',
    },
    farm1: {
        top: 129,
        left: 15,
        fontFamily: FontFamily.kronaOne,
        width: 171,
        fontSize: FontSize.size_5xl,
        textAlign: 'left',
        position: 'absolute',
    },
    his: {
        top: 175,
        left: '18%',
        fontFamily: FontFamily.kronaOne,
        width: 400,
        fontSize: FontSize.size_5xl,
        textAlign: 'left',
        position: 'absolute',
        textDecorationColor: Color.colorLimegreen_100,
    },
    smf: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 70,
        left: '46%',
        fontFamily: FontFamily.michroma,
        color: Color.colorGray_500,
        width: 91,
        height: 37,
    },
    iconLeaf: {
        height: '4.5%',
        width: '7.39%',
        top: '1.75%',
        right: '46.22%',
        bottom: '93.75%',
        left: '48%',
        maxWidth: '100%',
        maxHeight: '100%',
        position: 'absolute',
        overflow: 'hidden',
    },
    cameraChild: {
        top: 730,
        left: '20%',
        position: 'absolute',
        overflow: 'hidden',
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
    chartContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 250,
    },
    camera: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: '100%',
        height: 800,
        overflow: 'hidden',
    },
    chartTitle: {
        textAlign: 'center',
        fontSize: FontSize.size_lg,
        marginVertical: 10,
        fontFamily: FontFamily.michroma,
        color: Color.colorBlack,
    },
});

export default history;
