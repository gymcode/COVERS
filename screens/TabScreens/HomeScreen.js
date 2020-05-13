import React from 'react';
import {View, Text, SafeAreaView, ImageBackground, ScrollView, Image} from 'react-native'

import Header from '../../components/header'


export default function Home(){
    return(
        <View style={{flex: 1, backgroundColor: "#fff"}}>
          <Header>
              <Text>Home</Text>
          </Header>
          <View> 
            <View style={{paddingVertical: 25}}>
              <ScrollView horizontal={true} >
                <ImageBackground source={require("../../assets/bloom-blooming-blossom-2132186.jpg")} imageStyle={{borderRadius: 10}} style={{height: 160, width: 300, marginHorizontal: 20, borderRadius: 50,}}>
                  <View style={{marginLeft: 190,}}>
                    <Text style={{color: "#fff", fontSize:43, fontWeight: "bold"}}> 3000</Text>
                    <Text style={{color: "#fff", fontWeight:"bold"}}> Confirmed cases</Text>
                  </View>
                </ImageBackground>

                <ImageBackground source={require("../../assets/bloom-blooming-blossom-2132186.jpg")} imageStyle={{borderRadius: 10}} style={{height: 160, width: 320, borderRadius: 50,}}>
                  <View style={{marginLeft: 190,}}>
                      <Text style={{color: "#fff", fontWeight:"bold", fontSize:43}}> 3000</Text>
                      <Text style={{color: "#fff", fontWeight:"bold"}}> Recovered</Text>
                    </View>
                </ImageBackground>

                <ImageBackground source={require("../../assets/bloom-blooming-blossom-2132186.jpg")} imageStyle={{borderRadius: 10}} style={{height: 160, width: 320, marginHorizontal: 20, borderRadius: 50,}}>
                  <View style={{marginLeft: 190,}}>
                      <Text style={{color: "#fff", fontWeight:"bold", fontSize:43}}> 3000</Text>
                      <Text style={{color: "#fff", fontWeight:"bold"}}> Death</Text>
                    </View>
                </ImageBackground>

              </ScrollView>
            </View>
            <View>
              <Text>Home</Text>
            </View>
          </View>
        </View>
      )
}