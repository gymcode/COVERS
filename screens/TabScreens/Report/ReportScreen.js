import React, {useState, useContext} from 'react';
import {View,
       Text, 
      TouchableOpacity,
      } from 'react-native'
import Lottie from 'lottie-react-native'
import load from '../../../assets/loading/report.json'
import moment from 'moment'
import Header from '../../../components/header'
import ContentModal from './contentModal'
import {reportContext} from '../../../App'
import {AntDesign} from '@expo/vector-icons'

export default function Report(){
  const [modal, setModal] = useState(false)
  const {Generalreport, makeCaseReport} = useContext(reportContext)
  console.log(Generalreport)

  function covertDateTime(value) {
    return moment(value).format('ddd, MMM DD, YYYY');
  }

  function CloseModal(){
    setModal(!modal)
  }

    return(
        <View style={{flex: 1,  backgroundColor: "#fff"}}> 
          <Header>
              <Text>Case Reports</Text>
          </Header>
         {
           Generalreport == undefined ?
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
          :
          <View>
            <View style={{padding: 15, borderWidth: .4, borderColor: "#ccc"}}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                  <View>
                    <Text style={{fontWeight: "bold", fontSize: 17}}>{Generalreport.reporting.label}</Text>
                  </View>
                  <View>
                    <Text>{covertDateTime(Date.now())}</Text>
                  </View>
                </View>
                <View style={{marginTop: 10}}>
                  <Text>{Generalreport.description}</Text>
                  <Text>{Generalreport.contact}</Text>
                </View>
            </View>

            <TouchableOpacity onPress={()=>{setModal(false)}}>
              <View style={{marginTop: 320, marginLeft: 290, height: 70, width: 70, backgroundColor: "#000", borderRadius: 60, justifyContent: "center", alignItems: "center"}}>
                <View>
                  <AntDesign
                    name="plus"
                    size={20}
                    color="#fff"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
         }
        </View>
      )
}