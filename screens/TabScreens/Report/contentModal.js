import React from 'react'
import {
    View,
    Text, 
    Modal, 
    TouchableOpacity, 
    TextInput
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'


export default function ContentModal({Visible, Close}){
    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={'pageSheet'}>
            <View style={{padding: 20}}>

                <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                    <View>
                        <Text style={{}} style={{fontSize: 35, fontWeight: "bold"}}>Make Report</Text>
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

                    {/* RadioButtons */}
                    <View style={{flexDirection: "row", marginTop: 10}}>
                             <View style={{flexDirection: "row"}}>
                                <View>
                                    <Ionicons
                                     name="ios-checkmark-circle"
                                     size={22}
                                    />
                                </View>                                
                                <View style={{paddingHorizontal: 8, alignItems: "center", justifyContent: "center"}}>
                                    <Text>Self</Text>
                                </View>                                
                             </View>
                             <View style={{flexDirection: "row", paddingHorizontal: 5}}>
                                <View>
                                    <Ionicons
                                     name="ios-checkmark-circle"
                                     size={22}
                                    />
                                </View>    
                                <View style={{paddingHorizontal: 8, alignItems: "center", justifyContent: "center"}}>
                                    <Text>Other individual</Text>
                                </View>                                
                             </View>
                     </View>

                    <View style={{marginTop: 20}}>
                        <View style={{marginLeft: 5}}>
                            <Text style={{fontWeight: "bold"}}>Location or Digital Address</Text>
                        </View>

                        <View style={{marginVertical: 8}}>
                            <TextInput
                                style={{borderWidth: 1, borderColor: "#eee", height: 45, padding: 10}}
                                onPress={(age)=>{setAge(age)}}
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
                                        onPress={(age)=>{setAge(age)}}
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
                                        onPress={(age)=>{setAge(age)}}
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
                                    style={{borderWidth: 1, borderColor: "#eee", height: 90, padding: 10}}
                                    onPress={(age)=>{setAge(age)}}
                                />
                            </View>
                        </View>
                    </View>
                    
                    <TouchableOpacity onPress={()=>{console.log("is pressed")}}>
                        <View style={{justifyContent: "center", alignItems: 'center', top: 140, position: "fixed", height: 45, backgroundColor: "#000"}}>
                            <Text style={{fontWeight: "bold", color: "#fff"}}>Report case</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

