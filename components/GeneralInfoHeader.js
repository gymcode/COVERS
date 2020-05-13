import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function InfoHeader(props){

    return(
            <View style={{ padding: 20, marginTop: 10,width: 380,backgroundColor: "#fff",  borderBottomWidth: .6, borderBottomColor: "#ccc"}}>
                <Text style={{fontSize: 35, fontWeight: "bold"}}>General information</Text>
            </View>
        
    )
}