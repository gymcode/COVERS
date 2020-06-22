import React from 'react';
import {View, Text, SafeAreaView, ImageBackground, ScrollView, Image} from 'react-native'
import numeral from 'numeral'
import Header from '../../components/header'
import Hr from '../../components/Hr'
import Lottie from 'lottie-react-native'
import load from '../../assets/loading/lf30_editor_rMNwRp.json'

export default function Home(){
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{  
    async function fetchData(){
        let response = await fetch('https://covid19-graphql.netlify.app/', 
        {   method: 'POST', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                   query  {
                        globalTotal{
                            recovered
                            deaths
                            cases
                        }
                    }
                `
                })
            })
            let json = await response.json();
            setData(json.data.globalTotal)
            console.log(json.data.globalTotal)
            setLoading(false)
       }
       fetchData()
}, [])


function addCommas(value){
  return numeral(value).format('0,0')
}      



    return(
        <View style={{flex: 1, backgroundColor: "#fff"}}>
          <Header>
              <Text>Home</Text>
          </Header>
          <ScrollView> 
            <View style={{paddingTop: 25}}>
              {
                loading ? 
                <View style={{justifyContent:"center", alignItems: "center"}}>
                  <Lottie source={load} autoPlay loop style={{width: 35, height: 180}}/>
                </View>
                :
                <ScrollView horizontal={true} >
                <ImageBackground source={require("../../assets/patient-with-iv-line-3845126.jpg")} imageStyle={{borderRadius: 10}} style={{height: 160, width: 300, marginHorizontal: 20, borderRadius: 50,}}>
                  <View style={{marginLeft: 120,}}>
                    <Text style={{color: "#fff", fontSize:43, fontWeight: "bold"}}>{addCommas(data.cases)}</Text>
                    <Text style={{color: "#fff", fontWeight:"bold"}}> Confirmed cases</Text>
                  </View>
                </ImageBackground>

                <ImageBackground source={require("../../assets/top-view-of-various-pills-and-vitamins-placed-in-diverse-3850809.jpg")} imageStyle={{borderRadius: 10}} style={{height: 160, width: 320, borderRadius: 50,}}>
                  <View style={{marginLeft: 120,}}>
                      <Text style={{color: "#fff", fontWeight:"bold", fontSize:43}}>{addCommas(data.recovered)}</Text>
                      <Text style={{color: "#fff", fontWeight:"bold"}}> Recovered</Text>
                    </View>
                </ImageBackground>

                <ImageBackground source={require("../../assets/adult-alone-black-and-white-blur-568021.jpg")} imageStyle={{borderRadius: 10}} style={{height: 160, width: 320, marginHorizontal: 20, borderRadius: 50,}}>
                  <View style={{marginLeft: 140,}}>
                      <Text style={{color: "#fff", fontWeight:"bold", fontSize:43}}> {addCommas(data.deaths)}</Text>
                      <Text style={{color: "#fff", fontWeight:"bold"}}> Death</Text>
                    </View>
                </ImageBackground>

              </ScrollView>
              }
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