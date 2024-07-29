import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import {DataProvider} from '../../DataContext';
import {RealDataProvider} from '../../RealTimeContext'

export default function TabLayout() {
  return (
    <DataProvider>
        <RealDataProvider>

      <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            
    

            
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
      <Tabs.Screen
          name="two"
          options={{
            title: 'Manual Update',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          }}
        />
     

      </Tabs>
        </RealDataProvider>
    </DataProvider>

  
  )}