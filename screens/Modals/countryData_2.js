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
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'


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
      <TouchableOpacity>
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




export default function Country_2({Visible, close}){
    const {loading, error, data} = useQuery(getCountryData)
    const listData = data.countries

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
                            data={listData}
                            renderItem={({item})=> <ListItem name={item.country} flag={{uri: item.countryInfo.flag}}/>}
                        />  
                    </ScrollView>

                </View>
            </Modal>
        </SafeAreaView>
    )
}