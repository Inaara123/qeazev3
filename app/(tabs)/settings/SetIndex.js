import { View, Text,Button } from 'react-native'
import React from 'react';
import { useState,useEffect } from 'react';
import { Link, router } from 'expo-router';
import { StyleSheet } from 'react-native'
import { storage } from '../home/index';
import SettingsList from '../../../components/SettingsList';
import { FlatList,Alert } from 'react-native';
import { useContext } from 'react';
import { DataContext, DataProvider } from '../../../DataContext';



const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems: 'center'

    },
    text : {
        fontSize : 40,
        fontWeight : 'bold',
        padding : 20,
    },
    add : {
        fontSize : 25,
        padding : 20,
        fontWeight : 'bold',
        padding : 20,
        backgroundColor : 'blue',
        color : 'white',
        borderRadius : 25,
        width : 350,
        textAlign : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 20
        
    }

})
const Test = () => {
  const { data, updateData } = useContext(DataContext);
 

  const initdataArray = Object.keys(data).map(key => ({
    id: key,
    ...data[key]
  }));
  
 

  const handleModify = (id) => {
    // Alert.alert(`Modify item with ID: ${id}`);
    router.navigate({pathname: '/settings/ProfileModify', params : { post : id }});
  };

  const handleDelete = (id) => {
    Alert.alert(
      'DELETE USER',
      'Are you sure you want to delete this user ?',
      [
        {
          text: 'Confirm',
          onPress: () => {
            const updatedData = {...data};
            console.log("The data before is : ",updatedData);
            console.log("THe key is : ",updatedData[id]);
            delete updatedData[id];
            updateData(updatedData);
            console.log("The updated data is : ",updatedData);
            // masterData = JSON.parse(storage.getString('master'));
            // delete masterData[id];
            // console.log("THe new master Data is : ",masterData);
            // storage.set('master', JSON.stringify(masterData));
            

          }
        }
    
      ],

      { cancelable: true }
    );

   

  };
  const renderItem = ({ item }) => (
  <SettingsList
  name={item.name}
  phone={item.department}
  onModify={() => handleModify(item.id)}
  onDelete={() => handleDelete(item.id)}
/>
);
  return (
    <View style={styles.container}>
           <FlatList
        data={initdataArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}

      />
     <Link href='/settings/ProfileForm' style={styles.add}> Add Doctor </Link>
    </View>
  )
}
export default Test;
