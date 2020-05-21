import React, {useState} from 'react'; 
import {View, Modal, Text, TouchableOpacity, TextInput, FlatList} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

//other imports
import Country_1 from './countryData'


const getCountryData = gql`

query {
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

const ListItem = ({name, flag})=>{
    return(
      <View style={{flexDirection: "row",borderBottomWidth: .3, height: 50, borderBottomColor: "#e3e3e3"}}>
         <View style={{flex:1, paddingVertical:17}}>
            <Image source={flag} style={{width: 30, height: 20}}/>
        </View>
        <View style={{flex: 8, flexDirection: "row", paddingVertical: 17, marginLeft: 15}}>
          <View>
              <Text style={{fontSize: 15}}>{name}</Text>
          </View>
        </View>
      </View>
    )
  }


export default function Account ({Visible, Close}){

    const [age, setAge] = useState("")
    const [modal, setModal] = useState(false)
    const {loading, error, data} = useQuery(getCountryData)
 

    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={"pageSheet"} style={{borderRaduis: 10}}>

            {
                loading ?
                <View style={{flex: 1, justifyContent: "center", alignItems: 'center',}}>
                    <Text>hello</Text>
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

                        {/* checkboxes */}

                        {/* travelhistory */}
                        <View style={{marginVertical: 20}}>
                            <View>
                                <Text style={{fontWeight: "bold"}}>Travel History</Text>
                                <Text>Select the last two countries you visited(if Applicable)</Text>
                            </View>
                            <View style={{marginTop: 25, flexDirection: "row"}}>
                                <View style={{flex: 8, height: 80,borderWidth: 1, borderColor: "#aaa",  borderRadius: 5,paddingHorizontal: 10, justifyContent: "center", alignItems: "center"}}>
                                    <TouchableOpacity>
                                        <Text>fsdfdfdf</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex: 1}}/>
                                <View style={{flex: 8, height: 80,borderWidth: 1, borderColor: "#aaa", borderRadius: 5 ,paddingHorizontal: 10, justifyContent: "center", alignItems: "center"}}>
                                    <TouchableOpacity>
                                        <Text>dfdsfsd</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

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