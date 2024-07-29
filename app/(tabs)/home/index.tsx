import { View, Text ,FlatList} from 'react-native'
import React from 'react';
import { DataContext } from '../../../DataContext';  
import { useState,useContext } from 'react';
import { Link } from 'expo-router';
import {StyleSheet} from 'react-native';
import PatientCard from '../../../components/PatientCard';

const index = () => {
  const {data,setData} = useContext(DataContext);
  if (Object.keys(data).length === 0) {
    console.log('No data found');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You haven't added any Doctors yet !</Text>
        <Link href='/settings/ProfileForm' style={styles.add}> Add </Link>
  
      </View>);}
  else {
    const initdataArray = Object.keys(data).map(key => ({
      id: key,
      ...data[key]
    }));
    const renderItem = ({ item }) => (
      <PatientCard
      name={item.name}
    />
    );
    console.log('Data found');  
    return (
          
      <View style={styles.container}>
             <FlatList
          data={initdataArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
  
        />
       
      </View>) ;

}
}
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
      backgroundColor : 'blue',
      color : 'white',
      borderRadius : 25,
      width : 150,
      textAlign : 'center',
      justifyContent : 'center',
      alignItems : 'center',
      marginTop : 20
      
  }

})

export default index