import React, {useState, useContext} from 'react'; 
import {View, Modal, Text, TouchableOpacity, TextInput, FlatList, Image} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {useQuery} from '@apollo/react-hooks'
import {countryContext} from '../../App'
import Lottie  from 'lottie-react-native'
import load from '../../assets/loading/loading_2.json'

//other imports
import Country_1 from './countryData'
import Country_2 from './countryData_2'


export default function Account ({Visible, Close}){

    const [age, setAge] = useState("")
    const [initialModal, setInitialmodal] = useState(false)
    const [subModal, setSubmodal] = useState(false)
    const [flag_1, setFlag_1] = useState( {
        "country": "Ghana",
        "countryInfo": {
          "_id": "288",
          "lat": 8,
          "long": -2,
          "flag": "https://disease.sh/assets/img/flags/gh.png"
        }
      })
    const [flag_2, setFlag_2] = useState({
        "country": "Ghana",
        "countryInfo": {
          "_id": "288",
          "lat": 8,
          "long": -2,
          "flag": "https://disease.sh/assets/img/flags/gh.png"
        }
      })
      const [loading, setLoading] = useState(true)
      const [data, setData] = useState(null)
 
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
                            countries {
                                country
                                countryInfo {
                                    _id
                                    flag
                                    iso3
                                    iso2
                                }
                            }
                        }
                    `
                    })
                })
                let json = await response.json();
                console.log(json.data.countries)
                setData(json.data.countries)
                setLoading(false)
           }
           fetchData()
    }, [])
    
    // declaring of all functions 
    function closeCountry_1(){
        setInitialmodal(!initialModal)
    }

    function closeSubModal(){
        setSubmodal(!subModal)
    }

    function selectedData(data){
        console.log(data)
        setFlag_1({...data})
    }

    function selectedData2(data){
        console.log(data)
        setFlag_2({...data})
    }

    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={"pageSheet"} style={{borderRaduis: 10}}>

            {
                loading ?
                <View style={{flex: 1, justifyContent: "center", alignItems: 'center',}}>
                    <Lottie source={load} autoPlay style={{width: 150}}/>
                </View> 
                : 
                <View style={{padding: 20}}>

                    <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                        <View>
                            <Text style={{}} style={{fontSize: 35, fontWeight: "bold"}}>Profile</Text>
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

                    {/* content */}
                    <View style={{marginTop: 40}}>

                        <View>
                            <Text style={{fontWeight: "bold"}}>Personal Details</Text>
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text>Enter Age</Text>
                        </View>
                        <View style={{marginVertical: 14}}>
                            <TextInput
                                style={{borderWidth: 1, borderColor: "#eee", height: 45, padding: 10}}
                                onPress={(age)=>{setAge(age)}}
                            />
                        </View>

                        {/* RadioButtons */}
                         <View style={{flexDirection: "row"}}>
                             <View style={{flexDirection: "row"}}>
                                <View>
                                    <Ionicons
                                     name="ios-checkmark-circle"
                                     size={25}
                                    />
                                </View>                                
                                <View style={{paddingHorizontal: 8, alignItems: "center", justifyContent: "center"}}>
                                    <Text>Female</Text>
                                </View>                                
                             </View>
                             <View style={{flexDirection: "row", paddingHorizontal: 30}}>
                                <View>
                                    <Ionicons
                                     name="ios-checkmark-circle"
                                     size={25}
                                    />
                                </View>    
                                <View style={{paddingHorizontal: 8, alignItems: "center", justifyContent: "center"}}>
                                    <Text>Male</Text>
                                </View>                                
                             </View>
                         </View>

                        {/* travelhistory */}
                        <View style={{marginVertical: 20}}>
                            <View>
                                <Text style={{fontWeight: "bold"}}>Travel History</Text>
                                <Text>Select the last two countries you visited(if Applicable)</Text>
                            </View>
                            <View style={{marginTop: 25, flexDirection: "row"}}>
                                <View style={{flex: 8, height: 80,borderWidth: 1, borderColor: "#aaa",  borderRadius: 5,paddingHorizontal: 10, justifyContent: "center", alignItems: "center"}}>
                                    <TouchableOpacity onPress={()=>{setInitialmodal(!initialModal)}}>
                                       <Image source={{uri: flag_1.countryInfo.flag}} style={{height: 20, width: 30}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex: 1}}/>
                                <View style={{flex: 8, height: 80,borderWidth: 1, borderColor: "#aaa", borderRadius: 5 ,paddingHorizontal: 10, justifyContent: "center", alignItems: "center"}}>
                                    <TouchableOpacity onPress={()=>{setSubmodal(!subModal)}}>
                                        <Image source={{uri: flag_2.countryInfo.flag}} style={{height: 20, width: 30}} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* travel History modals  */}
                            <Country_1  Visible={initialModal} SelectedTeam={selectedData} close={()=>{closeCountry_1()}}/>

                            <Country_2 Visible={subModal} selectedCountry={selectedData2} close={()=>{closeSubModal()}}/>


                            <View style={{marginVertical: 20}}>
                                <Text style={{fontWeight: "bold"}}>Medical Professional Information</Text>
                                <Text>Applicable if you are a health worker</Text>
                            </View>

                            <View>
                                <Text>Health License Number</Text>
                            </View>

                            <View style={{marginVertical: 14}}>
                                <TextInput
                                    style={{borderWidth: 1, borderColor: "#eee", height: 45, padding: 10}}
                                    onPress={(age)=>{setAge(age)}}
                                />
                            </View>

                            <TouchableOpacity>
                                <View style={{height: 45, backgroundColor: "#000", justifyContent: 'center', alignItems: 'center',}}>
                                    <Text style={{color: "#fff"}}>Update Profile</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>

            </View>

            }

            
        </Modal>
    )
}