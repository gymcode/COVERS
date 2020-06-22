import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import {useQuery, useMutation} from '@apollo/react-hooks'
import { userMutation } from '../../graphql/queries';

export default function GetStarted({navigation}){
  
  const [phoneNumber, setphoneNumber] = useState("0") 
  const [loginUser, {loading}] = useMutation(userMutation)

  async function login(){

    await loginUser({variables: {phone: phoneNumber}})
    .then((data)=>{
      let success = data.data.loginUser.success
      console.log(success)
      if (success) {
        alert("phone number valid proceed")
        navigation.navigate('Information')
      } else {
        alert("invalid number try 0558691496")
      }
    })
    .catch(error => {
      console.log(error)
    })
    
    
  }

  
    return(
        
          <ImageBackground source={require('../../assets/fusion-medical-animation-EAgGqOiDDMg-unsplash.jpg')} resizeMode="cover" style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <View style={{display: "flex", justifyContent: "center", alignItems: "center",}}>

              <View>
                <Text style={{fontSize: 68, fontWeight: "bold", color: "#fff"}}>COVERS</Text>
              </View>

              <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontSize: 12, color:"#fff", fontWeight: "bold", lineHeight:20}}>(COVID-19 EMERGENCY RESPONSE SOLUTION)</Text>
                <Text style={{fontSize: 11, color:"#fff", lineHeight:15}}>Join the effort by well-meaning Africans using technology to slow</Text>
                <Text style={{fontSize: 11, color:"#fff", lineHeight:20}}>down and eventaully halt the spread of COVID-19</Text>
              </View>

              <View style={{marginTop: 35}}>

                <View style={{display: "flex", flexDirection: "row", height: 45, backgroundColor: "#fff"}}>
                  <View style={{}}>
                    <TextInput
                      style={{backgroundColor: "#fff", height: 45, width: 220, padding: 10}}
                      keyboardType="number-pad"
                      onChangeText={(phoneNumber)=>{setphoneNumber(phoneNumber)}}
                    />
                  </View>
                  <View style={{display: "flex", alignItemsL: "center", justifyContent: "center", padding: 10}}>
                    <Text>Phone Number</Text>
                  </View>
                </View>

              </View>
              {
                phoneNumber.length < 10 ? 
                    <View style={{display: "flex", justifyContent: 'center', alignItems: "center", height: 45, width: 325,backgroundColor: "#9f9999", marginVertical: 20}}>
                        <Text style={{color: "#fff"}}>Get Started</Text>
                    </View>
                : 
                  <TouchableOpacity onPress={()=>{navigation.navigate('Information')}}>
                    <View style={{display: "flex", justifyContent: 'center', alignItems: "center", height: 45, width: 325,backgroundColor: "#22b266", marginVertical: 20}}>
                        {
                          loading ? 
                          <Text  style={{color: "#fff"}} >loading</Text>
                          :
                          <Text style={{color: "#fff"}} >Get Started</Text>
                        }
                    </View>
                  </TouchableOpacity>
                }
            </View>
          </ImageBackground>
        
      )
}