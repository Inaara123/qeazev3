import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { RealTimeContext } from '../../RealTimeContext';



const two = () => {
  function arrayToObject(arr) {
    const result = {};
    arr.forEach((item, index) => {
        // Use index + 1 as the key to start from 1
        result[index + 1] = item;
    });
    return result;
}
  const dataArray = [{key:1,name:'John'},{key:2,name:'Doe'},{key:3,name:'Jane'},{key:4,name:'Doe'}]
  const {realData, updateRealData} = useContext(RealTimeContext);

  const initdataArray = Object.keys(realData).map(key => ({
    id: key,
    ...realData[key]
  }));
 
  console.log("The initdataArray is :",realData)


  return (
    <GestureHandlerRootView>
      <DraggableFlatList 
      data={Object.values(realData)}
      keyExtractor={(item) => Object.keys(realData).find((key) => realData[key] === item)}
        renderItem={({item,drag,isActive}) => {
          return (
            <ScaleDecorator>
              <TouchableOpacity
     
                onLongPress={drag}
                disabled={isActive}>

           
              <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </ScaleDecorator>
            
          )
        }}
    
        onDragEnd={({data}) => updateRealData(arrayToObject(data))} 


       
        />

    </GestureHandlerRootView>

  )
}
const styles = StyleSheet.create({
  text : {  
    fontSize : 40,
    fontWeight : 'bold',
    padding : 20,
    color : 'black',
    paddingBottom : 20, 
    borderRadius : 10,
    borderWidth : 2,
    margin : 10,

  },  
})
export default two