import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { config } from '../components/config';

// const jsonData = {
// 	role: 'assistant',
// 	type: 'answer',
// 	content:
// 		'Early Blight là một bệnh nấm phổ biến ảnh hưởng đến cây cà chua và cả cây khoai tây. Đây là bệnh bắt đầu từ đất, nên việc đầu tiên bạn cần làm là thay đất bị nhiễm bệnh trước khi trồng cây mới nếu bạn nghi ngờ cây của mình bị Early Blight. Dưới đây là một số cách để điều trị bệnh Early Blight:\n\n1. **Sử dụng các loại thuốc fungicide**: Có thể sử dụng các loại thuốc fungicide chứa các hoạt chất có khả năng kiểm soát bệnh nấm để phun lên cây.\n   \n2. **Thay đổi vị trí trồng**: Tránh trồng cà chua ở cùng một chỗ mỗi năm để giảm nguy cơ tái nhiễm bệnh từ đất.\n\n3. **Cải thiện lưu thông không khí**: Tỉa bớt lá để tăng cường lưu thông không khí xung quanh cây, giúp lá khô nhanh hơn sau mưa hoặc tưới nước, từ đó giảm nguy cơ nấm phát triển.\n\n4. **Trồng các giống cà chua kháng bệnh**: Một số giống cà chua đã được phát triển để có khả năng chống chịu với bệnh Early Blight.\n\n5. **Quản lý nước tưới**: Hạn chế tưới nước trực tiếp lên lá và thân cây, tưới nước vào gốc để giữ cho phần trên của cây khô ráo.\n\n6. **Vệ sinh vườn**: Loại bỏ và tiêu hủy các bộ phận cây bị nhiễm bệnh để ngăn chặn sự lây lan của bệnh.\n\n7. **Luân phiên cây trồng**: Trồng các loại cây khác nhau trong vòng xoay vụ để giảm bớt áp lực bệnh từ đất.\n\nNhớ rằng việc phát hiện sớm và xử lý kịp thời là chìa khóa để kiểm soát bệnh Early Blight hiệu quả.',
// 	content_type: 'text',
// };

const parseContent = (content) => {
	return content.split('\n').map((line, index) => ({
		key: `${index}`,
		text: line,
	}));
};

// const contentData = parseContent(jsonData.content);

const fetchDiseaseInfo = async (diseaseName) => {
	const requests = [
		{
			bot_id: '7376211399645036562',
			user: '29032201862555',
			query: `Cây cà chua tôi bị bệnh ${diseaseName}, liệt kê cho tôi nhiều cách nhất có thể(nhiều hơn 3 cách) để chữa bệnh?`,
			stream: false,
		},
		{
			bot_id: '7376211399645036562',
			user: '29032201862555',
			query: `Cây cà chua tôi bị bệnh ${diseaseName}, giới thiệu bệnh đó cho tôi?`,
			stream: false,
		},
		// {
		// 	bot_id: '7376211399645036562',
		// 	user: '29032201862555',
		// 	query: `Cây cà chua tôi bị bệnh ${diseaseName}, nguyên nhân gây ra bệnh đó là gì?`,
		// 	stream: false,
		// },
	];

	const responses = await Promise.all(
		requests.map((request) =>
			fetch('https://api.coze.com/open_api/v2/chat', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + config.chatToken,
				},
				body: JSON.stringify(request),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					return response.json();
				})
				.catch((error) => {
					console.error('Error during fetch:', error);
				})
		)
	);

	const result = await responses.map(
		(response) =>
			response.messages.find((message) => message.type === 'answer').content
	);
	console.log(result);
	return result;
};
const InfoDisease = ({ route }: { route: any }) => {
	const [contentData, setContentData] = React.useState([]);

	const { resultClass } = route.params;
	console.log(resultClass);

	React.useEffect(() => {
        console.log('Bat dau chay');
		fetchDiseaseInfo(resultClass).then((data) =>
			setContentData(data.map(parseContent)[0])
		);
		console.log('Ket qua');
		console.log(contentData);
	}, [resultClass]);
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.itemText}>
				Giới thiệu về {resultClass} trong cà chua
			</Text>

			
			{/* <Text style={styles.itemText}>Nguyên nhân gây ra {resultClass}</Text> */}
			<Text style={styles.itemText}>Cách điều trị {resultClass}</Text>
            <FlatList
				data={contentData}
				renderItem={({ item }) => (
					<Text style={styles.itemText}>
						{item.text.includes('**')
							? item.text.split('**').map((part, index) =>
									index % 2 === 1 ? (
										<Text key={index} style={styles.bold}>
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
		backgroundColor: '#fff',
	},
	itemText: {
		fontSize: 16,
		// marginBottom: 8,
	},
	bold: {
		fontWeight: 'bold',
	},
});

export default InfoDisease;
