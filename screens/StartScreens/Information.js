import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native'

export default function Verification({navigation}){
    return(
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Check your phone number</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Verification')}}>
            <View>
                <Text>Verification</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
}