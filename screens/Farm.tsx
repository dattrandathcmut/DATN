import * as React from 'react';
import { Text, StyleSheet, View, Pressable, ScrollView,TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { FontFamily, Color, FontSize, Border, Padding } from '../GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { config } from '../components/config';

const screenWidth = Dimensions.get('window').width;
const buttonWidth = 344;

const Farm = () => {
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
	const [data, setData] = React.useState({
		temperature: 29.3,
		humidity: 95,
		soilModule: 68,
	});
	const [weatherData, setWeatherData] = React.useState(null);
	const [currentWeatherData, setCurrentWeatherData] = React.useState(null);

	const [loading, setLoading] = React.useState(true);

	const fetchWeather = async () => {
		try {
			const response = await fetch(
				'https://api.openweathermap.org/data/2.5/forecast?id=1566083&APPID=ed5546a06cab6e47b95bc524d079282d&units=metric'
			);
			const data = await response.json();
			setWeatherData(data.list);
			setLoading(false);
			console.log(data.cnt);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	const fetchCurrentWeather = async () => {
		try {
			const response = await fetch(
				'https://api.openweathermap.org/data/2.5/weather?id=1566083&APPID=ed5546a06cab6e47b95bc524d079282d&units=metric'
			);
			const data = await response.json();
			setCurrentWeatherData(data);
			console.log(data.weather[0].icon);
		} catch (error) {
			console.error(error);
		}
	};

	React.useEffect(() => {
		fetchCurrentWeather();
		fetchWeather();
		// console.log('Hello: ');
		// console.log(config.mainURL);


		// fetch(`${config.baseURL}/api/data`)
		// 	.then((response) => response.json())
		// 	.then((data) => setData(data));
	}, []);

	return (
		<ScrollView>
			<SafeAreaView>
				<View style={styles.farm1}>
					<Text style={styles.farm11}>Farm 1</Text>
					<Text style={[styles.smf, styles.smfTypo1]}>SMF</Text>
					<Image
						style={styles.iconLeaf}
						resizeMode='stretch'
						source={require('../assets/-icon-leaf.png')}
					/>
					<View style={styles.unionParent}>
						<Image
							style={styles.unionIcon}
							contentFit='cover'
							source={require('../assets/union1.png')}
						/>
						<View style={styles.frameParent}>
							<TouchableOpacity style={styles.rectangleLayout}
								onPress={() => navigation.navigate('history')}
							>
								<View style={[styles.frameChild, styles.rectangleLayout]} />
								<View style={[styles.frameGroup, styles.frameFlexBox]}>
									<View style={styles.frameContainer}>
										<View style={styles.rightParent}>
											<Image
												style={styles.rightIconLayout1}
												contentFit='cover'
												source={require('../assets/humbleiconswind.png')}
											/>
											<Text style={[styles.soilMoisture, styles.textTypo]}>
												Soil moisture
											</Text>
										</View>
										<Text style={[styles.text, styles.textTypo]}>
											{data.soilModule} %
										</Text>
									</View>
									<View style={styles.frameItem} />
									<View style={styles.frameContainer}>
										<View style={styles.rightParent}>
											<Image
												style={styles.rightIconLayout1}
												contentFit='cover'
												source={require('../assets/right.png')}
											/>
											<Text style={[styles.soilMoisture, styles.textTypo]}>
												Temperature
											</Text>
										</View>
										<Text style={[styles.text, styles.textTypo]}>
											{data.temperature} °C
										</Text>
									</View>
									<View style={styles.frameItem} />
									<View style={styles.frameContainer}>
										<View style={styles.rightParent}>
											<Image
												style={[
													styles.humbleiconswind,
													styles.humbleiconswindLayout,
												]}
												contentFit='cover'
												source={require('../assets/mdihumidity.png')}
											/>
											<Text style={[styles.soilMoisture, styles.textTypo]}>
												Humidity
											</Text>
										</View>
										<Text style={[styles.text, styles.textTypo]}>
											{data.humidity} %
										</Text>
									</View>
								</View>
							</TouchableOpacity>
							<View style={[styles.rectangleGroup, styles.rectangleLayout]}>
								<View style={[styles.frameChild, styles.rectangleLayout]} />
								<View style={[styles.frameParent2, styles.frameFlexBox]}>
									<View style={styles.frameContainer}>
										<Text style={[styles.now, styles.textTypo]}>Now</Text>
										<View style={styles.parent}>
											<Text style={[styles.text2, styles.textTypo]}>
												{currentWeatherData &&
													currentWeatherData.main.temp.toFixed(0)}{' '}
											</Text>
											<Image
												style={styles.frameIcon}
												contentFit='cover'
												source={require('../assets/frame-181.png')}
											/>
											{/* <Image
												style={styles.frameIcon}
												contentFit='cover'
												source={require(
													`https://openweathermap.org/img/${currentWeatherData?.weather.icon}.png`
												)}
											/> */}
										</View>
										{/* <Image
											style={[styles.rightIcon1, styles.rightIconLayout]}
											contentFit='cover'
											source={require('../assets/right1.png')}
										/> */}

										{/* <Image
											style={[styles.rightIcon1, styles.rightIconLayout]}
											contentFit='cover'
											source={{
												uri: `https://openweathermap.org/img/02d.png`,
											}}
										/> */}

										<Image
											style={[styles.rightIcon1, styles.rightIconLayout]}
											source={{
												uri: `http://openweathermap.org/img/w/${
													currentWeatherData &&
													currentWeatherData.weather[0].icon
												}.png`,
											}}
										/>
									</View>
									<View style={styles.frameContainer}>
										<Text style={[styles.now, styles.textTypo]}>
											{weatherData &&
												weatherData[0]?.dt_txt
													.split(' ')[1]
													.split(':')
													.slice(0, 2)
													.join(':')}
										</Text>
										<View style={styles.parent}>
											<Text style={[styles.text2, styles.textTypo]}>
												{weatherData && weatherData[0].main.temp.toFixed(0)}{' '}
											</Text>
											<Image
												style={styles.frameIcon}
												contentFit='cover'
												source={require('../assets/frame-181.png')}
											/>
										</View>
										{/* <Image
											style={[
												styles.carbonhumidityAltIcon,
												styles.humbleiconswindLayout,
											]}
											contentFit='cover'
											source={require('../assets/carbonhumidityalt.png')}
										/> */}
										<Image
											style={[styles.rightIcon1, styles.rightIconLayout]}
											source={{
												uri: `http://openweathermap.org/img/w/${
													weatherData && weatherData[0].weather[0].icon
												}.png`,
											}}
										/>
									</View>
									<View style={styles.frameContainer}>
										<Text style={[styles.now, styles.textTypo]}>
											{' '}
											{weatherData &&
												weatherData[1]?.dt_txt
													.split(' ')[1]
													.split(':')
													.slice(0, 2)
													.join(':')}
										</Text>
										<View style={styles.parent}>
											<Text style={[styles.text2, styles.textTypo]}>
												{weatherData && weatherData[1].main.temp.toFixed(0)}{' '}
											</Text>
											<Image
												style={styles.frameIcon}
												contentFit='cover'
												source={require('../assets/frame-182.png')}
											/>
										</View>
										{/* <Image
											style={styles.carbonhumidityAltIcon1}
											contentFit='cover'
											source={require('../assets/carbonhumidityalt1.png')}
										/> */}
										<Image
											style={styles.carbonhumidityAltIcon1}
											source={{
												uri: `http://openweathermap.org/img/w/${
													weatherData && weatherData[1].weather[0].icon
												}.png`,
											}}
										/>
									</View>
									<View style={styles.frameContainer}>
										<Text style={[styles.now, styles.textTypo]}>
											{weatherData &&
												weatherData[2]?.dt_txt
													.split(' ')[1]
													.split(':')
													.slice(0, 2)
													.join(':')}
										</Text>
										<View style={styles.parent}>
											<Text style={[styles.text2, styles.textTypo]}>
												{weatherData && weatherData[2].main.temp.toFixed(0)}{' '}
											</Text>
											<Image
												style={styles.frameIcon}
												contentFit='cover'
												source={require('../assets/frame-183.png')}
											/>
										</View>
										{/* <Image
											style={[styles.rightIcon1, styles.rightIconLayout]}
											contentFit='cover'
											source={require('../assets/right2.png')}
										/> */}
										<Image
											style={[styles.rightIcon1, styles.rightIconLayout]}
											source={{
												uri: `http://openweathermap.org/img/w/${
													weatherData && weatherData[2].weather[0].icon
												}.png`,
											}}
										/>
									</View>
									<View style={styles.frameContainer}>
										<Text style={[styles.now, styles.textTypo]}>
											{weatherData &&
												weatherData[3]?.dt_txt
													.split(' ')[1]
													.split(':')
													.slice(0, 2)
													.join(':')}
										</Text>
										<View style={styles.parent}>
											<Text style={[styles.text2, styles.textTypo]}>
												{weatherData && weatherData[3].main.temp.toFixed(0)}{' '}
											</Text>
											<Image
												style={styles.frameIcon}
												contentFit='cover'
												source={require('../assets/frame-18.png')}
											/>
										</View>
										<Image
											style={[styles.rightIcon1, styles.rightIconLayout]}
											source={{
												uri: `http://openweathermap.org/img/w/${
													weatherData && weatherData[3].weather[0].icon
												}.png`,
											}}
										/>
									</View>
								</View>
							</View>
						</View>
					</View>
					<Button
						style={[styles.button20, styles.buttonFlexBox]}
						mode='contained'
						labelStyle={styles.button20Btn}
						onPress={() => navigation.navigate('WaterPump')}
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
						onPress={() => navigation.navigate('spect')}
					>
						<Image
							style={styles.vectorIcon}
							contentFit='cover'
							source={require('../assets/vector.png')}
						/>
						<Text style={[styles.pestAndDisease, styles.waterPumpTypo]}>
							Pest and disease inspection
						</Text>
					</Pressable>
					<Button
						style={[styles.button20, styles.buttonFlexBox]}
						mode='contained'
						labelStyle={styles.button20Btn}
						onPress={() => navigation.navigate('WaterPump')}
						contentStyle={styles.button20Btn1}
					>
						Pump
					</Button>
					<Pressable onPress={() => navigation.navigate('General')}>
						<Text style={[styles.back, styles.smfTypo]}>BACK</Text>
					</Pressable>
					<Pressable onPress={() => navigation.navigate('Account')}>
						<Image
							style={[styles.avatarIcon, styles.iconPosition]}
							contentFit='cover'
							source={require('../assets/avatar.png')}
						/>
					</Pressable>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	iconPosition: {
		top: 12,
		position: 'absolute',
	},
	button20Btn: {
		color: '#081c15',
		fontSize: 18,
		fontFamily: 'Montserrat',
	},
	button20Btn1: {
		paddingHorizontal: 32,
		paddingVertical: 18,
		height: 74,
		width: 344,
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
	rectangleLayout: {
		height: 136,
		width: 344,
	},
	frameFlexBox: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		left: '50%',
		position: 'absolute',
	},
	textTypo: {
		color: Color.colorWhite,
		fontFamily: FontFamily.roboto,
		textAlign: 'left',
	},
	humbleiconswindLayout: {
		height: 24,
		overflow: 'hidden',
	},
	rightIconLayout: {
		height: 40,
		width: 40,
	},
	rightIconLayout1: {
		height: 20,
		width: 20,
	},
	waterPumpTypo: {
		height: 20,
		display: 'flex',
		color: Color.colorGray_400,
		fontFamily: FontFamily.montserrat,
		fontSize: FontSize.size_lg,
		alignItems: 'center',
		textAlign: 'left',
	},

	buttonFlexBox: {
		justifyContent: 'center',
		left: screenWidth / 2 - buttonWidth / 2,
		alignItems: 'center',
		flexDirection: 'row',
		position: 'absolute',
	},
	farm11: {
		top: 129,
		left: 15,
		fontFamily: FontFamily.kronaOne,
		width: 171,
		textAlign: 'left',
		color: Color.colorBlack,
		fontSize: FontSize.size_5xl,
		position: 'absolute',
	},
	smf: {
		alignItems: 'center',
		justifyContent: 'center',
		top: 70,
		left: '50%',
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
		left: '52.39%',
		maxWidth: '100%',
		maxHeight: '100%',
		position: 'absolute',
		overflow: 'hidden',
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
		left: '50%',
		position: 'absolute',
	},
	soilMoisture: {
		marginLeft: 4,
		fontWeight: '600',
		fontFamily: FontFamily.roboto,
		fontSize: FontSize.headingHeading07_size,
	},
	rightParent: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	text: {
		marginTop: 12,
		fontWeight: '600',
		fontFamily: FontFamily.roboto,
		fontSize: FontSize.size_5xl,
	},
	frameContainer: {
		alignItems: 'center',
	},
	frameItem: {
		borderStyle: 'solid',
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
		alignItems: 'flex-end',
	},
	now: {
		fontWeight: '300',
		fontSize: FontSize.headingHeading07_size,
	},
	text2: {
		fontSize: FontSize.size_xl,
		fontWeight: '600',
		fontFamily: FontFamily.roboto,
	},
	frameIcon: {
		width: 4,
		height: 8,
		marginLeft: 4,
	},
	parent: {
		marginTop: 8,
		flexDirection: 'row',
	},
	rightIcon1: {
		marginTop: 8,
	},
	carbonhumidityAltIcon: {
		width: 32,
		marginTop: 8,
	},
	carbonhumidityAltIcon1: {
		height: 35,
		marginTop: 8,
		width: 35,
		overflow: 'hidden',
	},
	frameParent2: {
		marginTop: -39,
		marginLeft: -154,
		width: 308,
		alignItems: 'center',
		top: '50%',
	},
	rectangleGroup: {
		marginTop: 18,
	},
	frameParent: {
		marginTop: -144.5,
		left: 19,
		top: '50%',
		position: 'absolute',
	},
	unionParent: {
		top: 185,
		left: 9,
		height: 307,
		width: 390,
		position: 'absolute',
	},
	waterPump: {
		width: 146,
	},
	button18Child: {
		width: 28,
		maxHeight: '100%',
	},
	button18: {
		top: 506,
		left: 10,
		position: 'absolute',
	},
	vectorIcon: {
		width: 33,
		height: 25,
	},
	pestAndDisease: {
		justifyContent: 'center',
		marginLeft: 19,
	},
	button19: {
		top: 608,
		backgroundColor: '#80ed99',
		height: 74,
		paddingHorizontal: Padding.p_13xl,
		paddingVertical: 18,
		width: 344,
		justifyContent: 'center',
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
		borderRadius: Border.br_781xl,
		width: 40,
		height: 40,
		position: 'absolute',
		top: 12, // Điều chỉnh giá trị của top tùy theo vị trí bạn muốn đặt avatarIcon
		right: 10, // Điều chỉnh giá trị của right tùy theo vị trí bạn muốn đặt avatarIcon
	},
	farm1: {
		backgroundColor: Color.colorWhite,
		flex: 1,
		width: '100%',
		height: 800,
		overflow: 'hidden',
	},
});

export default Farm;
