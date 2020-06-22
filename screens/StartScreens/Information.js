import React, { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { validation } from '../../graphql/queries'
import {useMutation} from '@apollo/react-hooks'
import {contactContext} from '../../App'

import VeriHeader from '../../components/VerificationHeader'

export default function Verification({navigation}){
    const [text, setText] = useState("")
    const [validateLoginUser, {loading}] = useMutation(validation)
    const {phoneNumber} = React.useContext(contactContext)

    async function validate(){

      await validateLoginUser({variables: {phone: "0558691496", otp: text}})
      .then((data)=>{
        let success = data.data.validateLoginUser
        console.log(success)
        console.log(text)
        if (text === "12345") {
          alert(`Welcome Mr. ${ success.user.lastName}`)
          navigation.navigate('Verification')
        } else{
          alert("Incorrect pin. Enter a valid Pin eg. 12345")
        }
      })
      .catch(error => {
        console.log(error)
      })
      
      
    }
  

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
                <Text style={{textAlign: "center", fontWeight: "bold"}}>{phoneNumber}</Text>
              </View>

              <View style={{marginTop: 25}}>
                <TextInput 
                  style={{borderBottomColor: "#000", textAlign: "center",borderBottomWidth: .8, width: 250, height: 45}}
                  keyboardType="number-pad"
                  onChangeText={(text)=>{setText(text)}}
                />
              </View>

              <TouchableOpacity onPress={()=>{validate()}}>
                <View style={{marginVertical: 28, height: 45, width: 250 ,backgroundColor: "#000", justifyContent: 'center', alignItems: 'center',}}>
                    {
                      loading ?
                      <Text style={{color: "#fff"}}>loading...</Text>
                      :
                      <Text style={{color: "#fff"}}>Submit Code</Text>
                    }
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