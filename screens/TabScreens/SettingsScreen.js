import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import Header from '../../components/header'
import FAQs from './subsettings/FAQs'
import Assessment from './subsettings/Assessment'
import TestingScreen from './subsettings/Testing'
import World from './subsettings/world'

export default function Settings(){
  const [FaqModal, setFaqModal] = React.useState(false)
  const [AssessModal, setAssessModal] = React.useState(false)
  const [Testing, setTesting] = React.useState(false)
  const [worldStat, setWorld] = React.useState(false)

  function CloseModal(){
    setFaqModal(false)
  }

  function CloseAssess(){
    setAssessModal(!AssessModal)
  }

  function CloseTesting(){
    setTesting(!Testing)
  }

  function CloseWorld(){
    setWorld(!worldStat)
  }
    return(
        <View style={{flex: 1, backgroundColor: "#fff"}}>
        <Header>
            <Text>Settings</Text>
        </Header>
      
            <ScrollView style={{marginTop: 15}}>

              <View style={{borderBottomWidth: .3, borderColor: "#ccc"}}>
                  <TouchableOpacity onPress={()=>{setAssessModal(!AssessModal)}}>
                    <View style={{padding: 20, flexDirection: "row"}}>
                      <View style={{flex: 7}}>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>Self Assessment</Text>
                        <Text style={{fontSize: 13}}>Ascertain your codiv-19 risk using our screenning tool</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Ionicons
                          name="ios-arrow-forward"
                          size= {20}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <Assessment Visible={AssessModal} Close={()=>{CloseAssess()}}/>

                <View style={{borderBottomWidth: .3, borderColor: "#ccc"}}>
                  <TouchableOpacity onPress={()=>{setFaqModal(!FaqModal)}}>
                    <View style={{padding: 20, flexDirection: "row"}}>
                      <View style={{flex: 7}}>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>FAQs</Text>
                        <Text>Get answers to frequently asked questions</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Ionicons
                          name="ios-arrow-forward"
                          size= {20}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <FAQs Visible={FaqModal} Close={()=>{CloseModal()}}/>

                <View style={{borderBottomWidth: .3, borderColor: "#ccc"}}>
                  <TouchableOpacity onPress={()=>{setTesting(!Testing)}}>
                    <View style={{padding: 20, flexDirection: "row"}}>
                      <View style={{flex: 7}}>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>Testing Centers</Text>
                        <Text style={{fontSize: 13}}>View Testing centers near you</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Ionicons
                          name="ios-arrow-forward"
                          size= {20}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <TestingScreen Visible={Testing} Close={()=>{CloseTesting()}}/>

                <View style={{borderBottomWidth: .3, borderColor: "#ccc"}}>
                  <TouchableOpacity>
                    <View style={{padding: 20, flexDirection: "row"}}>
                      <View style={{flex: 7}}>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>Personal Details</Text>
                        <Text style={{fontSize: 13}}>View and update your personal details</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Ionicons
                          name="ios-arrow-forward"
                          size= {20}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: .3, borderColor: "#ccc"}}>
                  <TouchableOpacity onPress={()=>{setWorld(!worldStat)}}>
                    <View style={{padding: 20, flexDirection: "row"}}>
                      <View style={{flex: 7}}>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>WorldWIde Statistics</Text>
                        <Text style={{fontSize: 13}}>Check out the worldwide Statisticsof every country</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Ionicons
                          name="ios-arrow-forward"
                          size= {20}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <World Visible={worldStat} Close={()=>{CloseWorld()}}/>

                <View style={{borderBottomWidth: .3, borderColor: "#ccc"}}>
                  <TouchableOpacity>
                    <View style={{padding: 20, flexDirection: "row"}}>
                      <View style={{flex: 7, }}>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>Audio</Text>
                        <Text style={{fontSize: 13}}>Listen to audio</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Ionicons
                          name="ios-arrow-forward"
                          size= {20}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: .3, borderColor: "#ccc"}}>
                  <TouchableOpacity>
                    <View style={{padding: 20, flexDirection: "row"}}>
                      <View style={{flex: 7}}>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>Private Poilcy</Text>
                        <Text style={{fontSize: 13}}>View our private policy</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Ionicons
                          name="ios-arrow-forward"
                          size= {20}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: .3, borderColor: "#ccc"}}>
                  <TouchableOpacity>
                    <View style={{padding: 20, flexDirection: "row"}}>
                      <View style={{flex: 7}}>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>Share</Text>
                        <Text style={{fontSize:13}}>Share this app with friends and family</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Ionicons
                          name="ios-arrow-forward"
                          size= {20}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: .3, borderColor: "#ccc"}}>
                  <TouchableOpacity>
                    <View style={{padding: 20, flexDirection: "row"}}>
                      <View style={{flex: 7}}>
                        <Text style={{fontWeight: "bold"}}>sdjkbsbkdfsd</Text>
                        <Text>;fsdfsdfsdfsdf</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Ionicons
                          name="ios-arrow-forward"
                          size= {20}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: .3, borderColor: "#ccc"}}>
                  <TouchableOpacity>
                    <View style={{padding: 20, flexDirection: "row"}}>
                      <View style={{flex: 7}}>
                        <Text style={{fontWeight: "bold"}}>sdjkbsbkdfsd</Text>
                        <Text>;fsdfsdfsdfsdf</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Ionicons
                          name="ios-arrow-forward"
                          size= {20}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                
            </ScrollView>
        
        </View>
      )
}