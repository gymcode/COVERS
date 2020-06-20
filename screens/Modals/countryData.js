import React from 'react';
import {
    View,
    Text,
    Modal, 
    ScrollView,
    SafeAreaView, 
    FlatList, 
    Image
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons'
import {useQuery} from '@apollo/react-hooks'
import {countryContext} from '../../App'


// graphql queries
import {getCountryData} from '../../graphql/queries'


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


export default function Country({Visible, close, SelectedTeam}){
    const {loading, error, data} = useQuery(getCountryData)
    const {editedItem, handleItem, setState} = React.useContext(countryContext)
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
                            data={listData}
                            renderItem={({item})=> <ListItem {...item} data={item} name={item.country} flag={{uri: item.countryInfo.flag}} select={data=>{
                                SelectedTeam({...data})
                                close()
                            }}/>}
                        />  
                    </ScrollView>

                </View>
            </Modal>
        </SafeAreaView>
    )
}