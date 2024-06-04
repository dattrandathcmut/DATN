import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	ScrollView,
	ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import { Color, FontFamily, Border, FontSize } from '../GlobalStyles';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { config } from '../components/config';

const jsonData = {
	role: 'assistant',
	type: 'answer',
	content:
		'Cây cà chua của bạn đang gặp tình trạng vàng lá, có thể do nhiều nguyên nhân khác nhau. Với điều kiện nhiệt độ 32°C, độ ẩm không khí 85% và độ ẩm đất 80%, dưới đây là một số lời khuyên giúp bạn khắc phục tình trạng này: \n \n 1. **Kiểm tra hệ thống tưới nước**: - Độ ẩm đất 80% là khá cao, có thể dẫn đến tình trạng úng nước làm rễ cây thiếu oxy và gây vàng lá. Hãy điều chỉnh hệ thống tưới nước để giảm bớt độ ẩm đất. Bạn có thể tưới nước ít hơn hoặc tăng khoảng cách giữa các lần tưới. \n\n 2. **Cải thiện thoát nước**: - Đảm bảo đất có hệ thống thoát nước tốt. Nếu cần, bạn có thể thêm vật liệu thoát nước như cát hoặc phân trộn vào đất để cải thiện khả năng thoát nước. \n\n 3. **Giảm độ ẩm không khí**: - Độ ẩm không khí 85% là khá cao, dễ dẫn đến các bệnh nấm. Hãy cải thiện thông gió cho khu vực trồng cà chua bằng cách tạo khoảng cách giữa các cây hoặc sử dụng quạt để lưu thông không khí. \n\n 4. **Kiểm tra bệnh tật và sâu bệnh**: - Vàng lá có thể do các loại bệnh như bệnh héo rũ Fusarium, bệnh đốm vi khuẩn, hoặc bệnh do nấm. Hãy kiểm tra lá và thân cây để phát hiện dấu hiệu của bệnh hoặc sâu bệnh. Sử dụng các biện pháp phòng trừ như thuốc bảo vệ thực vật nếu cần thiết. 5. *Bón phân hợp lý*: - Đảm bảo cây cà chua được cung cấp đầy đủ dinh dưỡng, đặc biệt là các nguyên tố vi lượng như sắt, magie, và mangan. Thiếu hụt dinh dưỡng cũng có thể gây vàng lá. Sử dụng phân bón lá hoặc phân bón chuyên dùng cho cây cà chua để bổ sung dinh dưỡng. 6. *Điều chỉnh nhiệt độ*: - Nhiệt độ 32°C có thể là cao đối với cây cà chua, đặc biệt nếu cây bị căng thẳng nhiệt. Nếu có thể, hãy tạo bóng mát cho cây vào giờ cao điểm của nhiệt độ hoặc sử dụng các biện pháp che chắn để giảm nhiệt độ xung quanh cây. 7. *Xử lý rễ cây*: - Kiểm tra rễ cây xem có dấu hiệu của bệnh thối rễ hoặc bị tổn thương không. Nếu phát hiện vấn đề, có thể cân nhắc việc thay đất hoặc trồng cây vào chậu mới với đất sạch. 8. *Theo dõi và chăm sóc*: - Luôn theo dõi tình trạng cây và điều chỉnh các biện pháp chăm sóc theo phản ứng của cây. Đôi khi, việc thay đổi nhỏ trong cách chăm sóc cũng có thể cải thiện tình trạng của cây một cách đáng kể. Hãy thử áp dụng những biện pháp trên và theo dõi sự thay đổi của cây cà chua. Nếu tình trạng vàng lá vẫn tiếp diễn, bạn có thể cần tìm đến sự tư vấn của chuyên gia nông nghiệp để có giải pháp cụ thể hơn.',
	content_type: 'text',
};

const parseContent = (content) => {
	return content.split('\n').map((line, index) => ({
		key: `${index}`,
		text: line,
	}));
};

const contentData = parseContent(jsonData.content);

// const fetchDiseaseInfo = async (diseaseName) => {
// 	const requests = [
// 		// {
// 		// 	bot_id: '7376211399645036562',
// 		// 	user: '29032201862555',
// 		// 	query: `Cây cà chua tôi bị bệnh ${diseaseName}, liệt kê cho tôi nhiều cách nhất có thể(nhiều hơn 3 cách) để chữa bệnh?`,
// 		// 	stream: false,
// 		// },
// 		{
// 			bot_id: '7376211399645036562',
// 			user: '29032201862555',
// 			query: `Cây cà chua tôi bị bệnh ${diseaseName}, giới thiệu bệnh đó và liệt kê nhiều cách nhất có thể(nhiều hơn 3 cách) để chữa bệnh cho tôi?`,
// 			stream: false,
// 		},
// 		// {
// 		// 	bot_id: '7376211399645036562',
// 		// 	user: '29032201862555',
// 		// 	query: `Cây cà chua tôi bị bệnh ${diseaseName}, nguyên nhân gây ra bệnh đó là gì?`,
// 		// 	stream: false,
// 		// },
// 	];

// 	const responses = await Promise.all(
// 		requests.map((request) =>
// 			fetch('https://api.coze.com/open_api/v2/chat', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 					Authorization: 'Bearer ' + config.chatToken,
// 				},
// 				body: JSON.stringify(request),
// 			})
// 				.then((response) => {
// 					if (!response.ok) {
// 						throw new Error(`HTTP error! status: ${response.status}`);
// 					}
// 					return response.json();
// 				})
// 				.catch((error) => {
// 					console.error('Error during fetch:', error);
// 				})
// 		)
// 	);

// 	const result = await responses.map(
// 		(response) =>
// 			response.messages.find((message) => message.type === 'answer').content
// 	);
// 	console.log(result);
// 	return result;
// };
const InfoDisease = ({ route }: { route: any }) => {
	// const [contentData, setContentData] = React.useState([]);
	// const [introData, setIntroData] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

	const { resultClass } = route.params;
	console.log(resultClass);

	// React.useEffect(() => {
	// 	console.log('Bat dau chay');
	// 	fetchDiseaseInfo(resultClass).then((data) =>
	// 		setContentData(data.map(parseContent)[0])
	// 	);
	// 	console.log('Ket qua');
	// 	console.log(contentData);
	// }, [resultClass]);

	// React.useEffect(() => {
	// 	fetchDiseaseInfo(resultClass)
	// 		.then((data) => {
	// 			console.log(data);
	// 			setContentData(data.map(parseContent)[0]);
	// 			// setIntroData(data.map(parseContent)[1]);
	// 			setIsLoading(false);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 			setIsLoading(false);
	// 		});
	// }, [resultClass]);

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size='large' color='#0000ff' />
			</View>
		);
	}

	return (
		<ScrollView style={styles.container}>
			<Text style={[styles.his, styles.farm2FlexBox]}>{resultClass}</Text>
			<Text style={[styles.smf, styles.smfTypo1]}>SMF</Text>
			<Image
				style={styles.iconLeaf}
				resizeMode='stretch'
				source={require('../assets/-icon-leaf.png')}
			/>
			<TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
				<Text style={styles.back1}>BACK</Text>
			</TouchableOpacity>

			<Text style={styles.itemText}>
				Giới thiệu về {resultClass} trong cà chua
			</Text>
			{/* <Text style={styles.itemText}>
				Giới thiệu về {resultClass} trong cà chua
			</Text>
			<FlatList
				data={introData}
				renderItem={({ item }) => (
					<Text style={styles.itemText}>
						{item.text.includes('**')
							? item.text.split('**').map((part, index) =>
									index % 2 === 1 ? (
										<Text key={index} style={styles.bold}>
											{part.split('\n')[0]}
										</Text>
									) : (
										part.split('\n')[0]
									)
								)
							: item.text.split('\n')[0]}
					</Text>
				)}
			/>
			<Text style={styles.itemText}>Cách điều trị {resultClass}</Text> */}

			<FlatList
				data={contentData}
				renderItem={({ item }) => (
					<Text style={[styles.itemText]}>
						{item.text.includes('**')
							? item.text.split('**').map((part, index) =>
									index % 2 === 1 ? (
										<Text key={index} style={[styles.bold]}>
											{part}
										</Text>
									) : (
										part
									)
								)
							: item.text}
					</Text>
				)}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		padding: 5,
        marginBottom: 20,
		height: 4000,
		backgroundColor: '#fff',
	},
	itemText: {
		fontSize: 16,
		top: 150,
		marginBottom: 8,
	},
	bold: {
		fontWeight: 'bold',
	},
	his: {
		top: 115,
		left: '35%',
		fontFamily: FontFamily.kronaOne,
		width: 171,
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
	farm2FlexBox: {
		textAlign: 'left',
		color: Color.colorSeagreen,
		textTransform: 'uppercase',
	},
	smfTypo1: {
		textAlign: 'left',
		fontSize: FontSize.size_5xl,
		position: 'absolute',
	},
    back1: {
		letterSpacing: 4.1,
		width: 68,
		height: 16,
		fontSize: FontSize.size_xs,
		textAlign: 'left',
		fontFamily: FontFamily.michroma,
	},
    back: {
		left: 17,
		top: 14,
		position: 'absolute',
	},
});

export default InfoDisease;
