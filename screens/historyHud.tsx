import * as React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import {
	useNavigation,
	ParamListBase,
	useFocusEffect,
} from '@react-navigation/native';
import { Table, Row, Rows } from 'react-native-table-component';
import { config } from '../components/config';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const history = () => {
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
	const [showMore, setShowMore] = React.useState(false);

	const tableHead = ['#', 'Moisture', 'Temperature', 'Humidity', 'Time'];
	const [tableData, setTableData] = React.useState([]);

	useFocusEffect(
		React.useCallback(() => {
			const fetchData = async () => {
				try {
					const response = await fetch(`${config.baseURL}/history`);
					const data = await response.json();

					if (data.status === 'success') {
						const newData = data.data.map(
							(item: {
								id: number;
								soil_moisture: number;
								temperature: number;
								humidity: number;
								capture_date: string;
							}) => [
									item.id.toString(),
									item.soil_moisture.toString(),
									item.temperature.toString(),
									item.humidity.toString(),
									new Date(item.capture_date).toLocaleTimeString(),
								]
						);

						// If showMore is true, show all data, else show only the first 3 records
						const dataToShow = showMore ? newData : newData.slice(0, 3);

						setTableData(dataToShow);
					}
				} catch (error) {
					console.error(error);
				}
			};

			fetchData();
		}, [showMore]) // Add showMore as a dependency
	);

	return (
		<ScrollView>
			<SafeAreaView>
				<View style={styles.camera}>
					<Text style={[styles.farm1, styles.farm1FlexBox]}>Farm 1</Text>
					<Text style={[styles.his, styles.farm2FlexBox]}>MEASUREMENT HISTORY</Text>
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

					<View style={styles.tableContainer}>
						<Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
							<Row
								data={tableHead}
								style={styles.head}
								textStyle={styles.text}
							/>
							<Rows data={tableData} textStyle={styles.text} />
						</Table>
						<TouchableOpacity
							style={styles.showMoreButton}
							onPress={() => setShowMore(!showMore)}
						>
							<Text style={styles.showMoreText}>
								{showMore ? 'Show Less' : 'Show More'}
							</Text>
						</TouchableOpacity>
					</View>
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
		marginTop: 400,
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
		width: '100%',
		height: 800,
		overflow: 'hidden',
	},
});

export default history;
