import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { RealTimeContext } from '../RealTimeContext';
import { router } from 'expo-router';

const AddPatient = () => {
    const {realData, updateRealData} = useContext(RealTimeContext);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    age: '',
    department: '',
    reasonForVisit: '',
    mobileNumber: '',
    gender: '',
    discovery: ''
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    if (Object.keys(realData).length === 0) {
        const masterelement = {
            name: formData.name,

        };
        realData[1]=(masterelement);
        updateRealData(realData);
        console.log('Real Data form:', realData);
        router.navigate('../home/index');
  
      //   storage.set('master', JSON.stringify({1:masterelement}));
      }
      else {
        const masterelement = {
            name: formData.name,
        };
        newKey = Object.keys(realData).length + 1;
        console.log("the type is :",typeof(realData));
        realData[newKey] = masterelement;
        updateRealData(realData);
        router.navigate('../home/index');
    console.log('realData foem:', realData);
    // You can add further logic for form submission here
  }};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={formData.address}
        onChangeText={(value) => handleInputChange('address', value)}
      />

      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={formData.age}
        onChangeText={(value) => handleInputChange('age', value)}
      />

      <Text style={styles.label}>Department:</Text>
      <TextInput
        style={styles.input}
        value={formData.department}
        onChangeText={(value) => handleInputChange('department', value)}
      />

      <Text style={styles.label}>Reason for Visit:</Text>
      <TextInput
        style={styles.input}
        value={formData.reasonForVisit}
        onChangeText={(value) => handleInputChange('reasonForVisit', value)}
      />

      <Text style={styles.label}>Mobile Number:</Text>
      <TextInput
        style={styles.input}
        keyboardType='phone-pad'
        value={formData.mobileNumber}
        onChangeText={(value) => handleInputChange('mobileNumber', value)}
      />

      <Text style={styles.label}>Gender:</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => handleInputChange('gender', value)}
        items={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' }
        ]}
        value={formData.gender}
      />

      <Text style={styles.label}>Discovery:</Text>
      <TextInput
        style={styles.input}
        value={formData.discovery}
        onChangeText={(value) => handleInputChange('discovery', value)}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputIOS: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
});

export default AddPatient;
