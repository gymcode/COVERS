import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function Header(props){

    return(
            <View style={{height: 110, padding: 20, width: 380,backgroundColor: "#fff",  borderBottomWidth: .3, borderBottomColor: "#ccc"}}>
               <SafeAreaView>
                   <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                       <View>
                           <Text>dfdsfsfdf</Text>
                       </View>
                       <View>
                           <Ionicons
                            name="ios-notifications-outline"
                            size={35}
                           />
                       </View>
                   </View>
                    <View style={{marginTop: 7}}>
                        <Text style={{fontSize: 35, fontWeight: "bold"}}>{props.children}</Text>
                     </View>
                </SafeAreaView>
            </View>
        
    )
}