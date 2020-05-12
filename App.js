import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

// necessary imports
import GetStarted from './screens/StartScreens/GetStarted'
import Information from './screens/StartScreens/Information'
import Verification from './screens/StartScreens/Verification'

// components
import TabBarIcon from './components/tabBarIcon'
import Header from './components/header'

const Home = ()=>{
  return(
    <View>
    <Header>
      <Text>gsdfgsfdgsgsf</Text>
    </Header>
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Home</Text>
    </View>
    </View>
  )
}

const Report = ()=>{
  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Reports</Text>
    </View>
  )
}

const Vitals = ()=>{
  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Vitals</Text>
    </View>
  )
}

const Settings = ()=>{
  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Settings</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

const MainSectionTab = ()=>{
  return (
    <Tab.Navigator 
      tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#ccc',
        }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="md-home"/>
            )
        }}
      />
      <Tab.Screen name="Report" component={Report} 
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="ios-paper-plane"/>
            )
        }}
      />
      <Tab.Screen name="Vitals" component={Vitals}
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="ios-pulse"/>
            )
        }}
      />
      <Tab.Screen name="Settings" component={Settings}
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="ios-settings"/>
            )
        }}
      />
    </Tab.Navigator>
  )
}


const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="GetStarted" component={GetStarted} 
        options={{headerShown: false}}
        />
        <Stack.Screen name="Verification" component={Verification} 
        options={{headerShown: false}}
        />
        <Stack.Screen name="Information" component={Information} 
        options={{ headerShown: false}}
        />
        <Stack.Screen name="Main" component={MainSectionTab} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}