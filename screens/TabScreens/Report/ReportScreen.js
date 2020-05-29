import React, {useState} from 'react';
import {View,
       Text, 
      TouchableOpacity,
      } from 'react-native'
import Lottie from 'lottie-react-native'
import load from '../../../assets/loading/report.json'

import Header from '../../../components/header'
import ContentModal from './contentModal'

export default function Report(){
  const [modal, setModal] = useState(false)

  function CloseModal(){
    setModal(!modal)
  }

    return(
        <View style={{flex: 1,  backgroundColor: "#fff"}}> 
          <Header>
              <Text>Case Reports</Text>
          </Header>
          <View style={{justifyContent: "center", alignItems: "center"}}>
              <Lottie source={load} autoPlay loop style={{width: 50, height: 250}}/>
              <View>
                <Text>You have not made any case report</Text>
              </View>
              <TouchableOpacity onPress={()=>{setModal(!modal)}}>
                <View style={{marginVertical: 25, borderWidth: 1, padding: 18, width: 180, justifyContent: "center", alignItems: "center", borderStyle: "dashed"}}>
                  <Text>Make Case Report</Text>
                </View>
              </TouchableOpacity>

              <ContentModal Visible={modal} Close={()=>{CloseModal()}}/>
          </View>
        </View>
      )
}