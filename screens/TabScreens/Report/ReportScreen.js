import React, {useState, useContext} from 'react';
import {View,
       Text, 
      TouchableOpacity,
      FlatList,
      Modal
      } from 'react-native'
import Lottie from 'lottie-react-native'
import {useIsFocused} from '@react-navigation/native'
import load from '../../../assets/loading/report.json'
import moment from 'moment'
import Header from '../../../components/header'
import ContentModal from './contentModal'
import {reportContext} from '../../../App'
import {AntDesign, Ionicons} from '@expo/vector-icons'
import FAB from 'react-native-fab'

const ListData = ({label, description, contact, date})=>{
  return (
    <View style={{padding: 15, borderWidth: .4, borderColor: "#ccc", flex: 1}}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                  <View>
                    <Text style={{fontWeight: "bold", fontSize: 17}}>{label}</Text>
                  </View>
                  <View>
                    <Text>{date}</Text>
                  </View>
                </View>
                <View style={{marginTop: 10}}>
                  <Text>{description}</Text>
                  <Text>{contact}</Text>
                </View>
    </View>
 )
}

export default function Report(){
  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(false)
  const {Generalreport, makeCaseReport} = useContext(reportContext)
  const isFocused = useIsFocused()

  function covertDateTime(value) {
    return moment(value).format('ddd, MMM DD, YYYY');
  }

  function CloseModal(){
    setModal(!modal)
  }

  function OpenModal(){
    setModal2(modal)
  }

  function CloseModal2(){
    setModal2(!modal)
  }
    return(
        <View style={{flex: 1,  backgroundColor: "#fff"}}> 
          <Header>
              <Text>Case Reports</Text>
          </Header>
         {
           Generalreport.length > 0 ?
           <View style={{flex: 1}}>
              <View>
                <FlatList
                  data={Generalreport}
                  renderItem = { ({item})=><ListData {...Generalreport} label={item.reporting.label} description={item.description} contact={item.contact} date={covertDateTime(Date.now())}/> }
                />
              </View>
              
              <FAB buttonColor="#000" 
                  iconTextColor="#fff" 
                  onClickAction={()=>{setModal2(true)}} 
                  visible={isFocused} 
                  iconTextComponent={<Ionicons name="ios-add" />} 
                  />
            <ContentModal Visible={modal2} Close={()=>{CloseModal2()}}/>
            
          </View>
          :
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
          
          
         }
        </View>
      )
}