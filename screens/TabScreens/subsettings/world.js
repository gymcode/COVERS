import React from 'react'
import {
    View,
    Text, 
    Modal, 
    TouchableOpacity, 
    StyleSheet, 
    Image
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import WorldData from '../../../components/worldModal'

export default function World({Visible, Close}){
    const [data, setData] = React.useState(null)
    const [content, setContent] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [loading2, setLoading2] = React.useState(true)
    const [] = React.useState()
    const [iniCountry, setIniCountry] = React.useState({
        "country": "Algeria",
        "countryInfo": {
          "_id": "12",
          "flag": "https://disease.sh/assets/img/flags/dz.png",
          "iso3": "DZA",
          "iso2": "DZ"
        },
        "result": {
          "cases": 11631,
          "critical": 54,
          "deaths": 837,
          "recovered": 8324,
          "active": 2470,
          "tests": 0
        }
      })
    

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
                console.log(json.data.globalTotal)
                setData(json.data.globalTotal)
                setLoading(!loading)
           }
           fetchData()
    }, [])

    React.useEffect(()=>{  
        async function countryData(){
            let response = await fetch('https://covid19-graphql.netlify.app/', 
            {   method: 'POST', 
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                       query  {
                        countries {
                            country
                            countryInfo {
                              _id
                              flag
                              iso3
                              iso2
                            }
                            result{
                              cases
                              critical
                              deaths
                              recovered
                              active
                              tests
                            }
                          }
                        }
                    `
                    })
                })
                let json = await response.json();
                console.log(json)
                setContent(json)
                setLoading2(!loading)
           }
           countryData()
    }, [])

    

    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={'pageSheet'}>
            <View style={{padding: 20}}>

                <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                    <View>
                        <Text style={{fontSize: 35, fontWeight: "bold"}}>WorldWide Stats</Text>
                    </View>
                    <TouchableOpacity onPress={Close}>
                        <View>
                            <Ionicons
                            name="ios-close"
                            size={40}
                            />
                        </View>   
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: 30}}>
                    
                        <View style={{flexDirection: "row"}}>
                            <View style={{flex:1}}>
                                <Ionicons
                                    name="ios-globe"
                                    size={30}
                                    color="#033bb2"
                                />
                            </View>
                            <View style={{flex:7, marginTop: 4}}>
                                <Text style={{ fontSize: 20}}>Worldwide Statistics</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            {/* confirmed  view */}
                            <View style={styles.worldSection}>
                                <View>
                                    <Text style={{color: "#800080", fontSize: 16}}>Confirmed</Text>
                                    {
                                        loading ?
                                        <View> 
                                            <Text>hello</Text>
                                        </View>
                                        :
                                        <Text style={{fontSize: 24}}>
                                            {data.cases}
                                        </Text>
                                    }
                                </View>
                            </View>
                            {/* recovered view */}
                            <View style={styles.worldSection}>
                                <View>
                                    <Text style={{color: "green", fontSize: 16}}>Recovered</Text>
                                    {
                                        loading ?
                                        <View> 
                                            <Text>hello</Text>
                                        </View>
                                        :
                                        <Text style={{fontSize: 24}}>
                                            {data.recovered}
                                        </Text>
                                    }
                                </View>
                            </View> 
                        
                        {/* Death View */}
                        <View style={styles.worldSection}>
                            <View>
                                <Text style={{color: "red", fontSize: 16}}>Deaths</Text>
                                {
                                    loading ?
                                    <View> 
                                        <Text>hello</Text>
                                    </View>
                                    :
                                    <Text style={{fontSize: 24}}>
                                        {data.deaths}
                                    </Text>
                                }
                            </View>
                        </View>
                  </View>
                     {/* select country section */}
                <View style={styles.select_country}>
                    <Text>Select country:</Text>
                    <TouchableOpacity>
                        <View style={styles.options}>

                            <View style={{ flexDirection: "row"}}>
                                <View style={{justifyContent: "center"}}>
                                     <Image source={{uri: iniCountry.countryInfo.flag}} style={{width: 30, height: 20}}/>
                                </View>
                                <View style={{justifyContent: "center"}}>
                                    <Text style={{fontSize: 15}}>{iniCountry.country}</Text>
                                </View>
                            </View>
                            {/* drop down */}
                            <View style={{justifyContent: "center"}}>
                                <Ionicons
                                name="ios-arrow-down"
                                size={18}
                                />
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 10,
        flex: 1,
        backgroundColor: "whitesmoke"
    }, 
    
    worldSection: {
        marginTop: 18,
        marginLeft: 10,
        flex: 2,
        justifyContent: "center",
        borderRightWidth: .5, 
        borderRightColor: "#e3e3e3"

    },

    select_country: {
        marginTop: 30, 
        padding: 3
    }, 

    options: {
        padding: 15,
        justifyContent: "space-between",
        marginVertical: 5,
        flexDirection: "row",
        height: 55,
        backgroundColor: "#fff", 
        width: 330,
        borderRadius: 5,
        shadowColor: '#000', 
        shadowOffset: {width: 0, height: 1},
        shadowOpacity:0.1,
    },

    statistic:{
        padding: 15,
        marginTop: 4,
        flexDirection: "column",
        height: 170,
        backgroundColor: "#fff", 
        width: 350,
        borderRadius: 5,
        shadowColor: '#000', 
        shadowOffset: {width: 0, height: 1},
        shadowOpacity:0.1,
    }

})