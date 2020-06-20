import React from 'react'
import {
    View,
    Text, 
    Modal, 
    TouchableOpacity
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import LogSymptoms from '../../../components/vitalComponents/logSymptoms'


export default function ContentModal({Visible, Close}){
    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={'pageSheet'}>
            <View style={{padding: 20}}>

                <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                    <View>
                        <Text style={{fontSize: 35, fontWeight: "bold"}}>Log Symptoms</Text>
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

                <View style={{marginTop: 30}}>
                    <LogSymptoms/>
                </View>
            </View>
        </Modal>
    )
}

