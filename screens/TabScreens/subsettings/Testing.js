import React from 'react'
import {
    View,
    Text, 
    Modal, 
    TouchableOpacity, 
    StyleSheet
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Constants from 'expo-constants';
import getDirections from 'react-native-google-maps-directions';



export default function Testing({Visible, Close}){
    const handleGetDirections = () => {
        const data = {
          
            destination:{
                latitude:6.673175,
                longitude:-1.565423
            },
            params: [
                {
                    key:'travelmode',
                    value:'driving'
                },
                {
                    key:'dir_action',
                    value:'navigate'
                }
            ],
            waypoints:[
                {
                    latitude:6.673175,
                    longitude:-1.565423
                },
                {
                    latitude:6.673175,
                    longitude:-1.565423
                },
                {
                    latitude:6.673175,
                    longitude:-1.565423
                }
            ]
        }

        getDirections(data)
    }
    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={'pageSheet'}>
            <View style={{padding: 20}}>

                <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                    <View>
                        <Text style={{}} style={{fontSize: 35, fontWeight: "bold"}}>Testing Centers</Text>
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
                <View style={{borderBottomWidth:StyleSheet.hairlineWidth, borderColor:'#dedede'}}>
                    <View style={styles.venueContainer}>
                        <View>
                            <Text style={styles.medium}>University of Ghana Medical School</Text>
                            <Text style={{color:'grey', fontWeight:'600', paddingTop:6}} >Accra, Ghana</Text>
                        </View>
                        <TouchableOpacity onPress={handleGetDirections}  >
                            <Text style={{color:'tomato', fontWeight:'500'}}>Get Directions</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:Constants.statusBarHeight,
      paddingHorizontal:20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
      },
      headerTitle: {
        
        letterSpacing: -0.2,
        fontSize: 32,
      },
      venueContainer:{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingVertical:20
      },
      medium: {
        
        letterSpacing: -0.3,
        fontSize: 15,
      },
})