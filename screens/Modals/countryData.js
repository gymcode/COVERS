import React from 'react';
import {
    View,
    Text,
    Modal, 
    SafeAreaView
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Country({Visible, close}){
    return(
        <SafeAreaView>
            <Modal visible={Visible} animationType="slide">
                <View>

                    <TouchableOpacity onPress={close}>
                        <View>
                            <Text>dfsdfsdfsf</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </Modal>
        </SafeAreaView>
    )
}