import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Link } from 'expo-router';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const PatientCard = ({ name, patientName, onAddPatient, onPlus }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={require('../assets/images/Doctor-2.png')} // Replace with your image URL
          style={styles.photo}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.currentPatient}>Current Patient</Text>
        <Text style={styles.patientName}>{patientName}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={onPlus}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onAddPatient}>
            <Link href='../home/PatientDetails'style={styles.buttonText}>Add Patient</Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.5,
    flexDirection: 'row',
    borderWidth: 0,
    borderColor: '#ddd',
    borderRadius: 0,
    overflow: 'hidden',
    margin: 0,
    backgroundColor : '#FFFFFF'
  },
  leftSection: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 0,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightSection: {
    width: '60%',
    padding: 10,
    justifyContent: 'center',
  },
  currentPatient: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  patientName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#164863',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '60%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default PatientCard;
