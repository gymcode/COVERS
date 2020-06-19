import React from 'react';
import {View, Text, TouchableOpacity, ScrollView } from 'react-native'

import InfoHeader from '../../components/GeneralInfoHeader'
import InfoContent from '../../components/infoContent'

export default function Information({navigation}){
    return(
        <View  style={{ flex: 1, backgroundColor: "#fff"}}>
          <InfoHeader/>

          <ScrollView>
              <InfoContent/>
          </ScrollView>
         
          <View style={{flex: 1, justifyContent: "center", alignItems: 'center',}}>
            <TouchableOpacity style={{height:45, width:340, alignItems:"center", justifyContent:"center", marginTop:-80, backgroundColor:"#000"}} 
            onPress={()=>{navigation.navigate('Main')}}>
              <Text style={{color:"white"}}>Lets get started.....</Text>
            </TouchableOpacity>
          </View>

        </View>
      )
}