import React from 'react';
import {View, Text} from 'react-native'

import Header from '../../components/header'

export default function Settings(){
    return(
        <View>
        <Header>
            <Text>Settings</Text>
        </Header>
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <Text>settings</Text>
        </View>
        </View>
      )
}