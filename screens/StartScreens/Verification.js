import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native'

export default function GetStarted({navigation}){
    return(
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>General information</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Main')}}>
            <View>
                <Text>Let's Get Started....</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
}