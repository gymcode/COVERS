import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default function Header({name}){
    return(
        <SafeAreaView>
            <View style={{height: 110, width: 380,backgroundColor: "#fff",  borderBottomWidth: .5, borderBottomColor: "#ccc"}}>
                <Text style={{}}>{name}</Text>
            </View>
        </SafeAreaView>
    )
}