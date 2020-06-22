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

//tab imports 
import HomeScreen from './screens/TabScreens/HomeScreen';
import VitalsScreen from './screens/TabScreens/Vitals/VitalsScreen';
import ReportScreen from './screens/TabScreens/Report/ReportScreen';
import SettingsScreen from './screens/TabScreens/SettingsScreen';

// components
import TabBarIcon from './components/tabBarIcon'

//apollo stuff
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({uri: "https://signalc.herokuapp.com/GraphQL"}), 
  cache: new InMemoryCache()
})


const Tab = createBottomTabNavigator();

const MainSectionTab = ()=>{
  return (
    <Tab.Navigator 
      tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#ccc',
        }}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="md-home"/>
            )
        }}
      />
      <Tab.Screen name="Report" component={ReportScreen} 
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="ios-paper-plane"/>
            )
        }}
      />
      <Tab.Screen name="Vitals" component={VitalsScreen}
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="ios-pulse"/>
            )
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen}
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

export const reportContext = React.createContext({})

export default function App(){
  
  const [Generalreport, setGenaralReport] = React.useState()

  function makeCaseReport(report){
    setGenaralReport(report)
  }

  return(
    <ApolloProvider client={client}>
      <reportContext.Provider value={{Generalreport, makeCaseReport}}>
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
        </reportContext.Provider>
    </ApolloProvider>
  )
}