import React from 'react'
import {
    View,
    Text, 
    Modal, 
    TouchableOpacity
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'


export default function Assessment({Visible, Close}){
    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={'pageSheet'}>
            <View style={{padding: 20}}>

                <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                    <View>
                        <Text style={{}} style={{fontSize: 35, fontWeight: "bold"}}>Self Assessment</Text>
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
                    
                </View>
            </View>
        </Modal>
    )
}

