import React from 'react';
import {
    View,
    Text,
    Modal, 
    SafeAreaView,
    ScrollView,
    Image, 
    FlatList
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons'


const ListItem = ({name, flag, select, data})=>{
    return(
      <TouchableOpacity onPress={()=>{select(data)}}>
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
      </TouchableOpacity>
    )
  }




export default function Country_2({Visible, close, selectedCountry}){
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
                setLoading(!loading)
           }
           fetchData()
    }, [])

    return(
        <SafeAreaView>
            <Modal visible={Visible} animationType="slide">
                <View style={{marginTop: 30, flex: 1}}>

                    <TouchableOpacity onPress={close}>
                        <View style={{margin: 15, paddingHorizontal: 10}}>
                            <EvilIcons
                                name="close"
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>

                    <ScrollView style={{padding: 10, }}>
                     <FlatList
                            keyExtractor = {(item)=> item.id}
                            data={data}
                            renderItem={({item})=> <ListItem {...item} data={item} name={item.country} flag={{uri: item.countryInfo.flag}}
                                select={data => {selectedCountry({...data})
                                close()
                            }}
                                
                            />}
                        />  
                    </ScrollView>

                </View>
            </Modal>
        </SafeAreaView>
    )
}