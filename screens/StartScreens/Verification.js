import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native'

import InfoHeader from '../../components/GeneralInfoHeader'

export default function Information({navigation}){
    return(
        <View  style={{ flex: 1, backgroundColor: "#fff"}}>
          <InfoHeader/>

          <View style={{flex: 1, justifyContent: "center", alignItems: 'center',}}>

            <TouchableOpacity onPress={()=>{navigation.navigate('Main')}}>
              <View style={{
                top:255, 
                height: 45, 
                width: 330 ,
                backgroundColor: "#000",
                justifyContent: "center",
                alignItems:"center"
              }}>
                  <Text style={{color: "#fff"}}>Let's Get Started...</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      )
}