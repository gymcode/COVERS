import React from 'react'; 
import {View, Modal, Text, TouchableOpacity} from 'react-native'

export default function Notification ({Visible, Close}){
    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={"formSheet"} style={{borderRaduis: 10}}>
            <View style={{padding: 20}}>
                <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                    <View>
                        <Text>Notification</Text>
                    </View>
                    <TouchableOpacity onPress={Close}>
                        <View>
                            <Text>close</Text>
                        </View>   
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}