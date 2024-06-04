import * as React from 'react';
import { Text, StyleSheet, View, Pressable, Dimensions, TextInput } from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import {
	useNavigation,
	ParamListBase,
	useFocusEffect,
} from '@react-navigation/native';
import { FontFamily, Color, Border, FontSize } from '../GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import { Switch } from 'react-native';
import { config } from '../components/config';

const WaterPump = () => {
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
	// const [isEnabled, setIsEnabled] = useState(false);
	const [isEnabled1, setIsEnabled1] = useState(false);
	const [isEnabled2, setIsEnabled2] = useState(false);
	// const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
	const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
	const [pumps, setPumps] = useState([]);

	// const toggleSwitch = (index: Number) => {
	// 	console.log(index);
	// 	if (index === 0) {
	// 	  setIsEnabled((previousState) => !previousState);
	// 	}
	// };

	const [isEnabled, setIsEnabled] = useState(pumps.map(() => false)); // Update the type of isEnabled to be an array of booleans
	const toggleSwitch = (index: number) => {
		setIsEnabled(
			isEnabled.map((value, i) => {
				// console.log('This is i');
				// console.log(i);
				// console.log('This is index');
				// console.log(index);
				if (index === i) {
					return !value;
				} else {
					return value;
				}
			})
		);
		// console.log('HIHIHI');
	};

	useFocusEffect(
		React.useCallback(() => {
			fetch(`${config.baseURL}/pump`)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setPumps(data.data);
					setIsEnabled(pumps.map(() => false));
					console.log('In forcus effet');
					console.log(isEnabled);
				})
				.catch((error) => console.error('Error:', error));
		}, [])
	);

	const postMessage = (isEnabled: boolean) => {
		// console.log('Is Enabled:', isEnabled[0]);

		const requestBody = JSON.stringify({
			message: `Farm 1 - Pump turned ${isEnabled ? 'on' : 'off'}`,
		});
		console.log('Request Body:', requestBody);

		fetch(`${config.baseURL}/nof`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: requestBody,
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error('Error when send message:', error));
	};

	React.useEffect(() => {
		if (isEnabled[0]) {
			fetch(
				'https://demo.thingsboard.io/api/plugins/telemetry/DEVICE/4c2fe410-cd78-11ed-9b15-dd2dac50548f/SHARED_SCOPE',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization:
							'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW4ucGhhbWRpbmh2YW4yMkBoY211dC5lZHUudm4iLCJ1c2VySWQiOiI1NGI3Njg1MC0xYjM0LTExZWYtYTQzNS1hYjNhMWQ1MzVmM2UiLCJzY29wZXMiOlsiVEVOQU5UX0FETUlOIl0sInNlc3Npb25JZCI6ImM2MWQwZGNjLTZmMDItNDdlYi1hMzA1LWU4NDZhOGNjNzk3ZiIsImV4cCI6MTcxODUwOTcyNCwiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJpYXQiOjE3MTY3MDk3MjQsImZpcnN0TmFtZSI6IlbEgk4iLCJsYXN0TmFtZSI6IlBI4bqgTSDEkMOMTkgiLCJlbmFibGVkIjp0cnVlLCJwcml2YWN5UG9saWN5QWNjZXB0ZWQiOnRydWUsImlzUHVibGljIjpmYWxzZSwidGVuYW50SWQiOiI2NTMzYWEzMC1iOGNiLTExZWQtOWIxNS1kZDJkYWM1MDU0OGYiLCJjdXN0b21lcklkIjoiMTM4MTQwMDAtMWRkMi0xMWIyLTgwODAtODA4MDgwODA4MDgwIn0.IDusyZ1K9xDDzyAI29F4ot5UFO5DwtsKFdydci233CJNl26qJrQ4LmMpLjET5oeULwVIBQWKfJq_Zxy0vXH76g',
					},
					body: JSON.stringify({ PUMP: 'ON' }),
				}
			)
				.then((response) => {
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					return response.text();
				})
				.catch((error) => {
					console.error('Error when turn on:', error);
				});
			postMessage(isEnabled[0]);
		} else {
			fetch(
				'https://demo.thingsboard.io/api/plugins/telemetry/DEVICE/4c2fe410-cd78-11ed-9b15-dd2dac50548f/SHARED_SCOPE',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization:
							'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW4ucGhhbWRpbmh2YW4yMkBoY211dC5lZHUudm4iLCJ1c2VySWQiOiI1NGI3Njg1MC0xYjM0LTExZWYtYTQzNS1hYjNhMWQ1MzVmM2UiLCJzY29wZXMiOlsiVEVOQU5UX0FETUlOIl0sInNlc3Npb25JZCI6ImM2MWQwZGNjLTZmMDItNDdlYi1hMzA1LWU4NDZhOGNjNzk3ZiIsImV4cCI6MTcxODUwOTcyNCwiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJpYXQiOjE3MTY3MDk3MjQsImZpcnN0TmFtZSI6IlbEgk4iLCJsYXN0TmFtZSI6IlBI4bqgTSDEkMOMTkgiLCJlbmFibGVkIjp0cnVlLCJwcml2YWN5UG9saWN5QWNjZXB0ZWQiOnRydWUsImlzUHVibGljIjpmYWxzZSwidGVuYW50SWQiOiI2NTMzYWEzMC1iOGNiLTExZWQtOWIxNS1kZDJkYWM1MDU0OGYiLCJjdXN0b21lcklkIjoiMTM4MTQwMDAtMWRkMi0xMWIyLTgwODAtODA4MDgwODA4MDgwIn0.IDusyZ1K9xDDzyAI29F4ot5UFO5DwtsKFdydci233CJNl26qJrQ4LmMpLjET5oeULwVIBQWKfJq_Zxy0vXH76g',
					},
					body: JSON.stringify({ PUMP: 'OFF' }),
				}
			)
				.then((response) => {
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					return response.text();
				})
				// .then((data) => console.log(data))
				.catch((error) => {
					console.error('Error when turn off:', error);
				});
			postMessage(isEnabled[0]);
		}
	}, [isEnabled]);

	return (
		<ScrollView>
			<SafeAreaView style={styles.waterPump}>
				<Text style={[styles.farm1, styles.farm1FlexBox]}>
					Farm 1 - Water pump
				</Text>
				<Text style={[styles.smf, styles.smfTypo1]}>SMF</Text>
				<Image
					style={styles.iconLeaf}
					resizeMode='stretch'
					source={require('../assets/-icon-leaf.png')}
				/>
				<Pressable onPress={() => navigation.navigate('Farm')}>
					<Text style={[styles.back, styles.smfTypo]}>BACK</Text>
				</Pressable>

				{pumps.map((pump, index) => (
					<>
						<View
							style={[
								styles.waterPumpItem,
								styles.waterPosition,
								{ marginTop: index * 50 },
							]}
							key={index}
						>
							<Text style={styles.p2}>{pump.name}</Text>
						</View>
						<View
							style={[
								styles.dSwitch,
								styles.switchLayout,
								{ marginTop: index * 50 },
							]}
						>
							{/* {index === 0 && ( */}
							<View style={styles.switchBody1}>
								<View style={styles.switchPosition1}>
									<Switch
										style={[
											styles.switchBody2,
											styles.switchPosition,
											{
												backgroundColor: isEnabled[index] ? Color.s : Color.s,
												borderRadius: 50,
											},
											{ transform: [{ scaleX: 1 }, { scaleY: 1 }] },
										]}
										onValueChange={() => toggleSwitch(index)}
										value={isEnabled[index]}
									/>
								</View>
							</View>
							{/* )} */}
						</View>
					</>
				))}
				<View style={styles.rectangleButton1}>
					<Text style={{ marginTop: 28, marginLeft: 10, fontSize: 24, }}>Auto</Text>
					<Switch
						style={styles.switchBody8}
						onValueChange={toggleSwitch1}
						value={isEnabled1}
					/>
				</View>
				<View style={styles.rectangleButton2}>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder="Start Time"
							style={styles.input}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder="Duration (HH:MM)"
							style={styles.input}
						/>
					</View>
					<View style={styles.startButtonContainer}>
						<Button
							title="Start"
							onPress={() => console.log('Start button pressed')}
							background={Color.colorLimegreen_100}
						>
							Start
						</Button>
					</View>

				</View>


				<Button
					style={styles.rectangleButton}
					mode='outlined'
					onPress={() => navigation.navigate('AddnewWaterPum')}
					contentStyle={styles.rectangleButtonContent}
					icon={() => (
						<Image
							style={[styles.iconPlus, styles.iconLayout]}
							source={require('../assets/-icon-plus.png')}
						/>
					)}
				>
					Add New Water Pump
				</Button>
				<Pressable onPress={() => navigation.navigate('Account')}>
					<Image
						style={[styles.avatarIcon, styles.iconPosition]}
						contentFit='cover'
						source={require('../assets/avatar.png')}
					/>
				</Pressable>
			</SafeAreaView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	iconPosition: {
		top: -12,
		position: 'absolute',
	},
	rectangleButtonBtn: {
		borderRadius: 20,
		height: 60,
		width: 339,
	},
	farm1FlexBox: {
		textAlign: 'left',
		position: 'absolute',
	},
	smfTypo: {
		fontFamily: FontFamily.michroma,
		textAlign: 'left',
	},
	iconLayout: {
		maxHeight: '100%',
		maxWidth: '100%',
		position: 'absolute',
		overflow: 'hidden',
	},
	backPosition: {
		left: 17,
		position: 'absolute',
	},
	waterPosition: {
		height: 41,
		backgroundColor: Color.colorGray_500,
		borderRadius: Border.br_11xl,
		top: 205,
		marginLeft: -165,
		left: '50%',
		position: 'absolute',
	},
	switchLayout: {
		height: 25,
		width: 63,
		position: 'absolute',
	},
	switchPosition: {
		borderRadius: 20, // Border radius
		overflow: 'visible',
		// borderRadius: Border.br_31xl,
		left: '31%',
		bottom: '0%',
		right: '0%',
		top: '-10%',
		height: '120%',
		// position: "absolute",
		width: '100%',
	},
	switchPosition1: {
		borderRadius: 20, // Border radius
		overflow: 'visible',
		// borderRadius: Border.br_31xl,
		left: '10%',
		bottom: '0%',
		right: '0%',
		top: '0%',
		height: '100%',
		// position: "absolute",
		width: '122%',
	},
	switchIconLayout: {
		height: 19,
		width: 22,
		top: 3,
		position: 'absolute',
	},
	// p1Typo: {
	// 	height: 2,
	// 	width: 157,
	// 	color: 'red',
	// 	fontFamily: FontFamily.dhurjati,
	// 	fontSize: FontSize.size_xl,
	// 	textAlign: 'left',
	// 	position: 'absolute',
	// },
	rectangleViewPosition: {
		// top: 259,
		height: 41,
		backgroundColor: Color.colorGray_500,
		borderRadius: Border.br_11xl,
		marginLeft: -165,
		left: '50%',
		// position: 'absolute',
	},
	startButtonContainer: {
		position: 'absolute',
		bottom: -1,
		right: -1, // Position at the bottom right
		width: 57, // Adjust width as needed
		height: 56, // Adjust height as needed
		borderWidth: 6,
		borderColor: 'limegreen',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'limegreen',
		borderTopRightRadius : 15,
		borderBottomRightRadius : 15,

	},
	waterChildPosition: {
		top: 314,
		marginLeft: -166,
		height: 41,
		backgroundColor: Color.colorGray_500,
		borderRadius: Border.br_11xl,
		left: '50%',
		position: 'absolute',
	},
	farm1: {
		top: 129,
		left: 15,
		fontFamily: FontFamily.kronaOne,
		width: 339,
		color: Color.colorBlack,
		fontSize: FontSize.size_5xl,
		textAlign: 'left',
	},
	smf: {
		alignItems: 'center',
		justifyContent: 'center',
		top: 85,
		left: '50%',
		fontFamily: FontFamily.michroma,
		color: Color.colorGray_500,
		width: 91,
		height: 37,
	},
	iconLeaf: {
		height: '4.5%',
		width: '7.39%',
		top: '6%',
		right: '46.22%',
		bottom: '93.75%',
		left: '52.39%',
		maxWidth: '100%',
		maxHeight: '100%',
		position: 'absolute',
		overflow: 'hidden',
	},
	smfTypo1: {
		textAlign: 'left',
		fontSize: FontSize.size_5xl,
		position: 'absolute',
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
		left: '0%',
		bottom: '0%',
		right: '0%',
		top: '0%',
		height: '100%',
		position: 'absolute',
		width: '100%',
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
		color: 'white',
		marginLeft: 20,
		marginTop: 10,
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
		color: 'white',
		marginLeft: 20,
		marginTop: 10,
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
		// backgroundColor: Color.switchGreen,
		left: (Dimensions.get('window').width + 150) / 2,
		bottom: 28,

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
		height: '3.75%',
		width: '8.33%',
		top: '72.63%',
		right: '84.17%',
		bottom: '23.63%',
		left: '7.5%',
	},
	rectangleButton: {
		position: 'absolute',
		bottom: 80, // Đặt nút ở phía dưới cùng màn hình, với khoảng cách 20px từ bottom
		left: (Dimensions.get('window').width - 360) / 2, // Căn giữa nút
		width: 360, // Độ rộng của nút
		height: 60, // Độ cao của nút
		borderStyle: 'solid',
		borderColor: Color.colorLimegreen_100,
		borderWidth: 3,
		justifyContent: 'center',
	},
	rectangleButton1: {
		position: 'absolute',
		bottom: 300, // Đặt nút ở phía dưới cùng màn hình, với khoảng cách 20px từ bottom
		left: (Dimensions.get('window').width - 360) / 2, // Căn giữa nút
		width: 360, // Độ rộng của nút
		height: 60, // Độ cao của nút
		borderStyle: 'solid',
		borderColor: Color.colorLimegreen_200,
		borderWidth: 3,
		justifyContent: 'center',
		borderRadius: 15,
	},
	rectangleButton2: {
		position: 'absolute',
		bottom: 200, // Đặt nút ở phía dưới cùng màn hình, với khoảng cách 20px từ bottom
		left: (Dimensions.get('window').width - 360) / 2, // Căn giữa nút
		width: 360, // Độ rộng của nút
		height: 60, // Độ cao của nút
		borderStyle: 'solid',
		borderColor: Color.colorLimegreen_200,
		borderWidth: 3,
		justifyContent: 'center',
		borderRadius: 15,
	},
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: 40,
	},
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'gray',
		padding: 10,
		width: '90%',
	},
	addNewWater: {
		top: 585,
		left: 86,
		fontSize: FontSize.size_lg,
		fontFamily: FontFamily.montserrat,
		color: Color.colorGray_400,
		display: 'flex',
		alignItems: 'center',
		width: 226,
		height: 24,
	},
	avatarIcon: {
		borderRadius: Border.br_781xl,
		width: 40,
		height: 40,
		position: 'absolute',
		top: 0, // Điều chỉnh giá trị của top tùy theo vị trí bạn muốn đặt avatarIcon
		right: 10, // Điều chỉnh giá trị của right tùy theo vị trí bạn muốn đặt avatarIcon
	},
	waterPump: {
		backgroundColor: Color.colorWhite,
		flex: 1,
		height: 800,
		overflow: 'hidden',
		width: '100%',
	},
	rectangleButtonContent: {
		flexDirection: 'row', // Align icon and text horizontally
		alignItems: 'center', // Center the content vertically
		justifyContent: 'center', // Center the content horizontally
	},
});

export default WaterPump;
