import React, {useContext} from 'react'
import {
    View,
    Text, 
    Modal, 
    TouchableOpacity, 
    TextInput,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native'
import {Ionicons, AntDesign} from '@expo/vector-icons'
import RadioButtons from 'radio-buttons-react-native';
import {reportContext} from '../../../App'
import {height} from '../../../constants/constants'

export default function ContentModal({Visible, Close, Close2}){
    const [reporting, setReporting] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [landmark, setLandmark] = React.useState('')
    const [contact, setContact] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const {Generalreport, makeCaseReport} = useContext(reportContext)
    
       // Radio Button data
       const rbData = [
        {label:'Self' },
        {label:'Other Individual'}
    ]
    
    function addReport(){
        setLoading(true)
        setTimeout(()=>{
            const newReport = {
                id : Math.floor(Math.random()*100), 
                reporting,
                location, 
                landmark, 
                contact, 
                description
            }
            makeCaseReport(newReport)
            setLoading(false)   
            
            Close()    
        }, 2000)
        alert("report added successfully")
        
    }

    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={'pageSheet'}>
            <KeyboardAvoidingView style={{padding: 20}}>

                <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                    <View>
                        <Text style={{fontSize: 35, fontWeight: "bold"}}>Make Report</Text>
                    </View>
                    <TouchableOpacity onPress={Close}>
                        <View>
                            <Ionicons
                            name="ios-close"
                            size={40}
                            />
                        </View>   
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical: 15}}>

                    <View style={{marginLeft: 5}}>
                        <Text style={{fontWeight: "bold"}}>Who are you reporting</Text>
                    </View>

                    {/* Radio buttons */}
                    <View>
                            <RadioButtons
                            data={rbData}
                            animationTypes={['shake']}
                            circleSize={16}
                            selectedBtn={reporting=>setReporting(reporting)}
                            initial={3}
                            box={false}
                            activeColor="black"
                            inactiveColor="grey"
                            textStyle={{letterSpacing:-0.4,}}
                            icon={
                                <AntDesign 
                                    name="checkcircle"
                                    size={20}
                                    // color="#2c9dd1"
                                />
                            }
                            />
                        </View>

                    <View style={{marginTop: 20}}>
                        <View style={{marginLeft: 5}}>
                            <Text style={{fontWeight: "bold"}}>Location or Digital Address</Text>
                        </View>

                        <View style={{marginVertical: 8}}>
                            <TextInput
                                style={{borderWidth: 1, borderColor: "#eee", height: 45, padding: 10}}
                                onChangeText={(location)=>{setLocation(location)}}
                            />
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <View style={{flex: 5 }}>
                                <View style={{marginLeft: 5}}> 
                                  <Text style={{fontWeight: "bold"}}>Nearest Landmark</Text>
                                </View>
                                <View style={{marginTop: 8}}>
                                    <TextInput
                                        style={{borderWidth: 1, borderColor: "#eee", height: 45, padding: 10}}
                                        onChangeText={(landmark)=>{setLandmark(landmark)}}
                                    />
                                </View>
                            </View>
                            <View style={{flex: 4, paddingLeft: 10}}>
                                <View style={{marginLeft: 5}}>  
                                    <Text style={{fontWeight: "bold"}}>Alternate contact</Text>
                                </View>
                                <View style={{marginTop: 8}}>
                                    <TextInput
                                        style={{borderWidth: 1, borderColor: "#eee", height: 45, padding: 10}}
                                        onChangeText={(contact)=>{setContact(contact)}}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ marginVertical: 10}}>
                            <View style={{marginLeft: 5,}}>
                                <Text style={{fontWeight: "bold"}}>Description</Text>
                            </View>

                            <View style={{marginVertical: 8}}>
                                <TextInput
                                    style={{borderWidth: 1, borderColor: "#eee", height: 90, paddingLeft: 10}}
                                    onChangeText={(description)=>{setDescription(description)}}
                                />
                            </View>
                        </View>
                    </View>
                    
                    <TouchableOpacity onPress={()=>{addReport()}}>
                        <View style={{justifyContent: "center", alignItems: 'center', top: height * 0.15, position: "fixed", height: 45, backgroundColor: "#000"}}>
                             {
                                 loading ?
                                 <ActivityIndicator color="#fff"/>
                                 :
                                 <Text style={{fontWeight: "bold", color: "#fff"}}>Report case</Text>
                             }
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    )
}

