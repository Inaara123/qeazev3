import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { RealTimeContext } from '../../RealTimeContext';



const two = () => {
  const dataArray = [{key:1,name:'John'},{key:2,name:'Doe'},{key:3,name:'Jane'},{key:4,name:'Doe'}]
  const {realData, updateRealData} = useContext(RealTimeContext);
  
  console.log("The realData is :",realData)
  const initdataArray = Object.keys(realData).map(key => ({
    id: key,
    ...realData[key]
  }));
  const {data,setData} = useState(initdataArray)
  console.log("The initdataArray is :",initdataArray)
  const handleMarkAsCompleted = (key) => {
    updateRealData((prevData) => {
      prevData.map((item) => {
        if (item.key === key) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
    });
  };

  return (
    <GestureHandlerRootView>
      <DraggableFlatList 
        keyExtractor={(item) => item.id}
        data={data}
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
        onDragEnd={({data}) => setData(data)} 


       
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