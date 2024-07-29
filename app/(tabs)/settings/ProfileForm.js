import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // For image picking functionality
import { router } from 'expo-router';
import { DataContext } from '../../../DataContext';
import { useContext } from 'react';
const ProfileForm = () => {
    const { data, updateData } = useContext(DataContext);

  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState(null);
  const onSubmit = () => {  
    alert('Details Submitted!');
    console.log("The keys are : ",data);
    if (Object.keys(data).length === 0) {
      const masterelement = {
        name: name,
        department: department,
        phoneNumber: phoneNumber,
      };
      data[1] = masterelement;
      updateData(data);
      router.navigate('settings/SetIndex');

    //   storage.set('master', JSON.stringify({1:masterelement}));
    }
    else {
      const masterelement = {
        name: name,
        department: department,
        phoneNumber: phoneNumber,
      };
      newKey = Object.keys(data).length + 1;
      data[newKey] = masterelement;
      updateData(data);
    //   storage.set('master', JSON.stringify(master ));
    // router.push('settings/setindex');
    router.navigate('settings/SetIndex');
  }};


  const pickImage = async () => {
    // Request permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Pick an image from the media library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Department</Text>
      <TextInput
        style={styles.input}
        value={department}
        onChangeText={setDepartment}
        placeholder="Enter your department"
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />

      <View style={styles.photoContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload Photo</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>

      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  photoContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});

export default ProfileForm;
