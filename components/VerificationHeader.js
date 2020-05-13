import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function VerificationHeader(props){

    return(
            <View style={{ padding: 20, marginTop: 10,width: 380,backgroundColor: "#fff",  borderBottomWidth: .2, borderBottomColor: "#ccc"}}>
              
                   <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                       <TouchableOpacity onPress={props.back}>
                            <View style={{flexDirection: "row"}}>
                                <View style={{marginTop: 2}}>
                                    <Ionicons
                                        name="ios-arrow-back"
                                        size={20}
                                    />
                                </View>
                                <View style={{paddingHorizontal:10, marginTop: 5}}>
                                    <Text>Change phone</Text>
                                </View>
                            </View>
                       </TouchableOpacity>
                   </View>
            </View>
        
    )
}