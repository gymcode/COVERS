import React, { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'

import VeriHeader from '../../components/VerificationHeader'

export default function Verification({navigation}){
    const [text, setText] = useState("")

    return(
        <View  style={{ flex: 1, backgroundColor: '#fff'}}>
           <VeriHeader back={()=>{navigation.goBack()}}/>
          
           <ScrollView style={{display: "flex", flex: 1}}>
              <View style={{flex: 1, justifyContent: "center", alignItems:"center", marginTop: 120}}>
              <View style={{paddingVertical: 20}}>
                 <Text style={{fontWeight: "bold"}}>Verification PIN</Text>
              </View>

              <View>
                <Text>Enter the verification code</Text>
                <Text style={{textAlign: "center", lineHeight:20}}>we just sent you on</Text>
                <Text style={{textAlign: "center"}}>0505050505</Text>
              </View>

              <View style={{marginTop: 25}}>
                <TextInput 
                  style={{borderBottomColor: "#000", textAlign: "center",borderBottomWidth: .8, width: 250, height: 45}}
                  keyboardType="number-pad"
                  onChangeText={(text)=>{setText(text)}}
                />
              </View>

              <TouchableOpacity onPress={()=>{navigation.navigate('Verification')}}>
                <View style={{marginVertical: 28, height: 45, width: 250 ,backgroundColor: "#000", justifyContent: 'center', alignItems: 'center',}}>
                    <Text style={{color: "#fff"}}>Sumit Code</Text>
                </View>
              </TouchableOpacity>

              <View>
                <Text>Have not received your code?</Text>
              </View>

              <View style={{marginVertical: 28}}>
                <Text>Resend code</Text>
              </View>
              </View>
          </ScrollView>
        </View>
      )
}