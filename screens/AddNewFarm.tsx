import * as React from 'react';
import {
	Text,
	StyleSheet,
	View,
	Pressable,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import { Image } from 'expo-image';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { FontFamily, Border, Color, FontSize } from '../GlobalStyles';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { config } from '../components/config';

const AddNewFarm = () => {
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
	const [name, setName] = React.useState('');

	const createFarm = () => {
		console.log(name);
		const requestBody = JSON.stringify({
			farm_name: name,
			user_id: 5,
		});
		console.log('Request Body:', requestBody);

		fetch(`${config.baseURL}/farm`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: requestBody,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.status === 'success') {
					alert('Farm created: ' + JSON.stringify(data));
				} else {
					alert('Failed to create farm: ' + JSON.stringify(data));
				}
			})
			.catch((error) => console.error('Error:', error));
	};
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.addnewWaterPum}>
					<Text style={styles.farm1}>Add New Farm</Text>
					<Text style={[styles.smf, styles.smfTypo1]}>SMF</Text>
					<Image
						style={styles.iconLeaf}
						resizeMode='stretch'
						source={require('../assets/-icon-leaf.png')}
					/>
					<Pressable onPress={() => navigation.navigate('General')}>
						<Text style={[styles.back, styles.smfTypo]}>BACK</Text>
					</Pressable>
					<View style={[styles.dSwitch, styles.switchLayout]}>
						<View style={[styles.switchBody, styles.switchLayout]}>
							<View style={styles.switchBody1}>
								<View style={[styles.switchBody2, styles.switchPosition]} />
							</View>
						</View>
					</View>
					<View style={[styles.dSwitch1, styles.switchLayout]}>
						<View style={[styles.switchBody, styles.switchLayout]}>
							<View style={styles.switchBody1}>
								<View style={[styles.switchBody2, styles.switchPosition]} />
							</View>
						</View>
					</View>
					<View style={[styles.dSwitch2, styles.switchLayout]}>
						<View style={[styles.switchBody, styles.switchLayout]}>
							<View style={styles.switchBody1}>
								<View style={[styles.switchBody8, styles.switchPosition]} />
							</View>
						</View>
						<Image
							style={styles.switchIcon}
							contentFit='cover'
							source={require('../assets/switch.png')}
						/>
					</View>
					<Image
						style={[styles.button8Icon, styles.backPosition]}
						contentFit='cover'
						source={require('../assets/button-8.png')}
					/>
					<Image
						style={[styles.iconPlus, styles.iconLayout]}
						contentFit='cover'
						source={require('../assets/-icon-plus.png')}
					/>
					<TouchableOpacity
						style={styles.addnewWaterPumChild}
						onPress={createFarm}
					>
						<Text style={styles.addNewWater}>Add New Farm</Text>
					</TouchableOpacity>
					<Pressable onPress={() => navigation.navigate('Account')}>
						<Image
							style={[styles.avatarIcon, styles.iconPosition]}
							contentFit='cover'
							source={require('../assets/avatar.png')}
						/>
					</Pressable>
					<View style={[styles.addnewWaterPumItem, styles.addnewLayout]}>
						<TextInput
							style={[styles.addnewWaterPumInner]}
							placeholder='Name'
							placeholderTextColor={Color.colorDarkslategray_100}
							onChangeText={setName}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	avatarIcon: {
		borderRadius: Border.br_781xl,
		width: 40,
		height: 40,
		position: 'absolute',
		top: 12, // Điều chỉnh giá trị của top tùy theo vị trí bạn muốn đặt avatarIcon
		right: 10, // Điều chỉnh giá trị của right tùy theo vị trí bạn muốn đặt avatarIcon
	},
	iconPosition: {
		top: -6,
		position: 'absolute',
	},
	smfTypo1: {
		textAlign: 'left',
		fontSize: FontSize.size_5xl,
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
	switchLayout: {
		height: 25,
		width: 63,
		position: 'absolute',
	},
	switchPosition: {
		display: 'none',
		borderRadius: Border.br_31xl,
		left: '0%',
		bottom: '0%',
		right: '0%',
		top: '0%',
		height: '100%',
		position: 'absolute',
		width: '100%',
	},

	idTypo: {
		height: 28,
		width: 140,
		fontSize: FontSize.size_mini,
		left: 32,
		fontFamily: FontFamily.montserrat,
		textAlign: 'left',
		color: Color.colorBlack,
		position: 'absolute',
	},
	farm1: {
		top: 129,
		left: 15,
		fontFamily: FontFamily.kronaOne,
		width: 339,
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
	back: {
		top: 14,
		fontSize: FontSize.size_xs,
		letterSpacing: 4.1,
		width: 68,
		height: 16,
		fontFamily: FontFamily.michroma,
		textAlign: 'left',
		color: Color.colorBlack,
		left: 17,
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
	dSwitch: {
		top: 213,
		left: 271,
		width: 63,
	},
	dSwitch1: {
		top: 267,
		left: 271,
		width: 63,
	},
	switchBody8: {
		backgroundColor: Color.switchGreen,
	},
	switchIcon: {
		top: 3,
		left: 38,
		width: 22,
		height: 19,
		position: 'absolute',
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
		justifyContent: 'center',
		alignItems: 'center',
		height: '3.75%',
		width: '8.33%',
		top: '72.63%',
		right: '84.17%',
		bottom: '23.63%',
		left: '6.5%',
	},
	addnewWaterPumChild: {
		top: 566,
		left: 11,
		backgroundColor: Color.colorLimegreen_100,
		borderColor: Color.colorLimegreen_100,
		borderWidth: 3,
		height: 60,
		borderStyle: 'solid',
		borderRadius: Border.br_xl,
		width: 400,
		position: 'absolute',
		justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
		alignItems: 'center', // Căn giữa nội dung theo chiều ngang
	},
	addNewWater: {
		fontSize: FontSize.size_lg,
		color: Color.colorGray_400,
		fontFamily: FontFamily.montserrat,
		textAlign: 'center',
	},
	icon: {
		borderRadius: Border.br_781xl,
		height: '100%',
		width: '100%',
	},
	avatar: {
		left: 302,
		top: 12,
		width: 40,
		height: 40,
		position: 'absolute',
	},
	addnewWaterPumItem: {
		top: 238,
	},
	addnewLayout: {
		width: 380,
		borderWidth: 0.7,
		borderColor: Color.colorDarkslategray_100,
		left: 20,
		height: 40,
		right: 20,
		borderStyle: 'solid',
		borderRadius: Border.br_xl,
		position: 'absolute',
		overflow: 'hidden',
		justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
	},
	addnewWaterPumInner: {
		fontSize: FontSize.size_mini,
		fontFamily: FontFamily.montserrat,
		textAlign: 'left',
		color: Color.colorBlack,
		paddingLeft: 32, // Khoảng cách từ lề trái cho phần nhập liệu
	},
	name: {
		top: 210,
	},
	id: {
		top: 303,
	},
	addnewWaterPum: {
		backgroundColor: Color.colorWhite,
		flex: 1,
		height: 800,
		overflow: 'hidden',
		width: '100%',
	},
});

export default AddNewFarm;
