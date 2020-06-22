import React, {useState} from 'react';
import {View,
        Text,
        TouchableOpacity,
        } from 'react-native'
import Lottie from 'lottie-react-native'
import load from '../../../assets/loading/vitals.json'

import Header from '../../../components/header'
import ContentModal from './contentModal'
import { vitalContext} from '../../../App'
import UserSymptoms from '../../../components/vitalComponents/userSymptoms'


export default function Vitals(){
  const [modal, setModal] = useState(false)
  const {vitalSymptoms} = React.useContext(vitalContext)
  console.log(vitalSymptoms.length)

  function CloseModal(){
    setModal(false)
  }
    return(
        <View style={{flex: 1,  backgroundColor: "#fff"}}> 
          <Header>
              <Text>Vitals</Text>
          </Header>
          {
            vitalSymptoms.length > 0 ?
            <UserSymptoms/>
          :
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <Lottie source={load} autoPlay loop style={{width: 70, height: 140, marginLeft: 25, marginVertical: 15}}/>

              <View style={{marginTop: 55, justifyContent: "center", alignItems: "center"}}>
                <View>
                  <Text>You have not logged your vitals yet...</Text>
                </View>
                <TouchableOpacity onPress={()=>{setModal(!modal)}}>
                  <View style={{marginVertical: 25, borderWidth: 1, padding: 20, width: 150, justifyContent: "center", alignItems: "center", borderStyle: "dashed"}}>
                    <Text>Log Vitals</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <ContentModal Visible={modal} Close={()=>{CloseModal()}}/>
          </View>
          }

        </View>
      )
}