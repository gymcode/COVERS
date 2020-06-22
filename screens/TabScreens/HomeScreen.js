import React from 'react';
import {View, Text, SafeAreaView, ImageBackground, ScrollView, Image} from 'react-native'

import Header from '../../components/header'
import Hr from '../../components/Hr'



export default function Home(){
    return(
        <View style={{flex: 1, backgroundColor: "#fff"}}>
          <Header>
              <Text>Home</Text>
          </Header>
          <ScrollView> 
            <View style={{paddingTop: 25}}>
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
            <View style={{padding: 20,  marginTop:13}}>
              <View>
                  <Text style={{fontSize: 16, fontWeight: "bold"}}>Ghana's Situation Updates</Text>
                  <Text>Last updated : 4/16/2020</Text>
              </View>
              <View style={{padding: 25,}}>
                  <View>
                    <Text style={{fontWeight: "bold"}}>Confirmed Covid-19 Cases In Ghana As At 25 March 2020, 09:00 Hr</Text>
                  </View>
                  <Hr/>
                  <View>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Nibh venenatis cras sed felis eget velit aliquet sagittis. Vitae nunc sed velit dignissim sodales ut eu sem integer. Fermentum leo vel orci porta. Morbi tristique senectus et netus et malesuada. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Id semper risus in hendrerit gravida rutrum quisque. Lectus vestibulum mattis ullamcorper velit. Viverra maecenas accumsan lacus vel facilisis. Cursus risus at ultrices mi.</Text>
                  </View>
              </View>
              <View style={{padding: 25,}}>
                  <View>
                    <Text style={{fontWeight: "bold"}}>Confirmed Covid-19 Cases In Ghana As At 25 March 2020, 09:00 Hr</Text>
                  </View>
                  <Hr/>
                  <View>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Nibh venenatis cras sed felis eget velit aliquet sagittis. Vitae nunc sed velit dignissim sodales ut eu sem integer. Fermentum leo vel orci porta. Morbi tristique senectus et netus et malesuada. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Id semper risus in hendrerit gravida rutrum quisque. Lectus vestibulum mattis ullamcorper velit. Viverra maecenas accumsan lacus vel facilisis. Cursus risus at ultrices mi.</Text>
                  </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )
}