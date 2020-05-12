import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native'

export default function GetStarted({navigation}){
    return(
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>COVERS</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Information')}}>
            <View>
                <Text>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
}