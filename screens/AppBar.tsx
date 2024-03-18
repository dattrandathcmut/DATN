// import * as React from "react";
// import { Text, StyleSheet, View, Pressable } from "react-native";
// import { Image } from "expo-image";
// import { ViewStyle } from "react-native";

// const HeaderAppBar = () => {
//     return (
//         <View style={styles.headerContainer}>
//             <Text style={styles.back}>BACK</Text>

//             {/* Row layout */}
//             <View style={styles.rowContainer}>
//                 {/* Column layout */}
//                 <View style={styles.columnContainer}>
//                     {/* Iconleaf */}
//                     <Image
//                         style={styles.iconLeaf}
//                         contentFit="cover"
//                         source={require("../assets/-icon-leaf.png")}
//                     />
//                     {/* SMF */}
//                     <Text style={[styles.smf, styles.smfTypo]}>SMF</Text>
//                 </View>

//                 {/* Avatar */}
//                 <Image
//                     style={styles.avatarIcon}
//                     contentFit="cover"
//                     source={require("../assets/avatar.png")}
//                 />
//             </View>
//         </View>
//     );
// };

// // Styles


// const styles: { [key: string]: ViewStyle } = {
//     headerContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       paddingHorizontal: 10,
//       paddingVertical: 5,
//       backgroundColor: '#ffffff', // Example background color
//       borderBottomWidth: 1,
//       borderBottomColor: '#dddddd', // Example border color
//     },
//     rowContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     columnContainer: {
//       flexDirection: 'column',
//       marginRight: 10,
//     },
//     smf: {
//       marginLeft: -38,
//       marginTop: 46, // Adjusted top position
//       color: '#757575', // Assuming Color.colorGray_500 is '#757575'
//       width: 91,
//       height: 37,
//       left: '50%',
//       fontSize: 30, // Assuming FontSize.size_5xl translates to 30
//       position: 'absolute',
//     },
//     smfTypo: {
//       fontFamily: 'Michroma', // Assuming FontFamily.michroma refers to 'Michroma'
//       textAlign: 'left',
//       position: 'absolute',
//     },
//     iconLeaf: {
//       height: 40, // Adjusted height
//       width: 40, // Adjusted width
//       top: 0, // Adjusted top position
//       right: 0, // Adjusted right position
//       position: 'absolute',
//       overflow: 'hidden',
//     },
//     back: {
//       top: 14,
//       left: 17,
//       fontSize: 10, // Assuming FontSize.size_xs translates to 10
//       letterSpacing: 4.1,
//       width: 68,
//       height: 16,
//       color: '#000000', // Assuming Color.colorBlack is '#000000'
//       fontFamily: 'Michroma', // Assuming FontFamily.michroma refers to 'Michroma'
//     },
//     avatarIcon: {
//       top: 12,
//       right: 10, // Adjusted right position
//       borderRadius: 20, // Assuming Border.br_781xl refers to 781
//       width: 40,
//       height: 40,
//       position: 'absolute',
//     },
//   };
  

// export default HeaderAppBar;
