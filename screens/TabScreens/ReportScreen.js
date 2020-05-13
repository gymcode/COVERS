import React from 'react';
import {View, Text} from 'react-native'

import Header from '../../components/header'

export default function Report(){
    return(
        <View>
        <Header>
            <Text>Case Reports</Text>
        </Header>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text>report</Text>
        </View>
        </View>
      )
}