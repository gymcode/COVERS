import React from 'react'
import {
    View,
    Text, 
    Modal, 
    TouchableOpacity, 
    ActivityIndicator, 
    StyleSheet, 
    ScrollView
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import LogSymptoms from '../../../components/vitalComponents/logSymptoms'


export default function ContentModal({Visible, Close}){
    const [load, setLoad] = React.useState(false);
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

                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 30}}>
                    <LogSymptoms/>
                </ScrollView>
                
            </View>
        </Modal>
    )
}
