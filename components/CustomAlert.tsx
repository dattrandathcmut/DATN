import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';

const CustomAlert = ({ visible, title, message }: { visible: boolean, title: string, message: string }) => (
    <Modal visible={visible} transparent={true} animationType="slide">
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
                {/* Add more components here as needed */}
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.4)', // semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 15,
    fontSize: 16,
  },
});

export default CustomAlert;