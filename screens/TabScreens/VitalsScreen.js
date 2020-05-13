import React from 'react';
import {View, Text} from 'react-native'

import Header from '../../components/header'

export default function Vitals(){
    return(
        <View>
        <Header>
            <Text>Vitals</Text>
        </Header>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text>vitals</Text>
        </View>
        </View>
      )
}