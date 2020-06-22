import React, {useState} from 'react';
import {View,
        Text,
        TouchableOpacity,
        ScrollView
        } from 'react-native'
import {vitalContext} from '../../App'
import { Symptoms } from '../../Data/data';
import FAB from 'react-native-fab'
import moment from 'moment'
import {AntDesign, Ionicons} from '@expo/vector-icons'
import {useIsFocused} from '@react-navigation/native'
import ContentModal from '../../screens/TabScreens/Vitals/contentModal'
import {height} from '../../constants/constants'

export default function User({navigation}){
  const [modal2, setModal2] = useState(false)
  const {vitalSymptoms} = React.useContext(vitalContext)
  const isFocused = useIsFocused()
  console.log(vitalSymptoms)

  function CloseModal2(){
    setModal2(false)
  }

  function covertDateTime(value) {
    return moment(value).format('ddd, MMM DD, YYYY');
  }
 
    return(
        <ScrollView style={{flex: 1,  backgroundColor: "#fff", padding: 20}}> 
            {
                vitalSymptoms.map((userSym)=>{
                    return(
                        <View>
                            <View style={{paddingVertical: 10}}>
                                <Text>{covertDateTime(Date.now())}</Text>
                            </View>
                            <View style={{flexDirection: "row", paddingHorizontal: 7}}>
                                <View style={{flex: 2,  marginHorizontal: 10,justifyContent: "center", borderRadius: 10, alignItems: "center", backgroundColor: "#00ff78", paddingVertical: 10}}>
                                    <View >
                                        <Text>Fever</Text>
                                    </View>
                                    <View style={{marginVertical: 13}}>
                                        <Text>{userSym.fever.value}</Text>
                                    </View>
                                    <View>
                                        <Text>{userSym.fever.sign}</Text>
                                    </View>
                                </View>
                                <View style={{flex: 2,justifyContent: "center", marginHorizontal: 10,borderRadius: 10, alignItems: "center", backgroundColor: "#00ffdf", paddingVertical: 10}}>
                                    <View>
                                        <Text>Aches</Text>
                                    </View>
                                    <View   style={{marginVertical: 13}}>
                                        <Text>{userSym.aches.value}</Text>
                                    </View>
                                    <View>
                                        <Text>{userSym.aches.sign}</Text>
                                    </View>
                                </View>
                                <View style={{flex: 2,justifyContent: "center",marginHorizontal: 10,borderRadius: 10, alignItems: "center", backgroundColor: "#e300ff", paddingVertical: 10}}>
                                    <View>
                                        <Text>Breath</Text>
                                    </View>
                                    <View   style={{marginVertical: 13}}>
                                        <Text>{userSym.breath.value}</Text>
                                    </View>
                                    <View>
                                        <Text>{userSym.breath.sign}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection: "row", marginTop: 10, paddingHorizontal: 8}}>
                                <View style={{flex: 2,height:100,  marginHorizontal: 10,justifyContent: "center", borderRadius: 10,alignItems: "center", backgroundColor: "#ff7400", paddingVertical: 10}}>
                                        <View>
                                            <Text>Throat</Text>
                                        </View>
                                        <View   style={{marginVertical: 13}}>
                                            <Text>{userSym.throat.value}</Text>
                                        </View>
                                        <View>
                                            <Text>{userSym.throat.sign}</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 2,justifyContent: "center", marginHorizontal: 10, borderRadius: 10,alignItems: "center", backgroundColor: "red", paddingVertical: 10}}>
                                        <View>
                                            <Text>Cough</Text>
                                        </View>
                                        <View   style={{marginVertical: 13}}>
                                            <Text>{userSym.cough.value}</Text>
                                        </View>
                                        <View>
                                            <Text>{userSym.cough.sign}</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 2,justifyContent: "center",marginHorizontal: 10,borderRadius: 10, alignItems: "center", backgroundColor: "#89ff00", paddingVertical: 10}}>
                                        <View>
                                            <Text>Headache</Text>
                                        </View>
                                        <View   style={{marginVertical: 13}}>
                                            <Text>{userSym.headache.value}</Text>
                                        </View>
                                        <View>
                                            <Text>{userSym.headache.sign}</Text>
                                        </View>
                                    </View>
                            </View>
                            <FAB buttonColor="#000" 
                            iconTextColor="#fff" 
                            style={{
                                position: 'absolute',
                                width: 65,
                                height: 65,
                                top: height *.36,
                              }}
                            onClickAction={()=>{setModal2(true)}} 
                            visible={isFocused} 
                            iconTextComponent={<Ionicons name="ios-add" />} 
                            />
                            <ContentModal Visible={modal2} Close={()=>{CloseModal2()}}/>
                        </View>
                    )
                    
                })
            }
        </ScrollView>
      )
}