import React from 'react'; 
import {View, Modal, Text, TouchableOpacity} from 'react-native'

export default function Notification ({Visible, Close}){
    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={"formSheet"} style={{borderRaduis: 10}}>
            <View style={{padding: 20}}>
                <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                    <View>
                        <Text style={{fontSize: 35, fontWeight: "bold"}}>Notification</Text>
                    </View>
                    <TouchableOpacity onPress={Close}>
                        <View>
                            <Text>close</Text>
                        </View>   
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent: "center", alignItems: "center", marginTop: 20}}>
                    <View>
                        <Text>Opps no messages yet</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}