import React from 'react'
import {
    View,
    Text, 
    Modal, 
    TouchableOpacity, 
    StyleSheet
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'


export default function Assessment({Visible, Close}){
    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={'pageSheet'}>
            <View style={{padding: 20}}>

                <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                    <View>
                        <Text style={{}} style={{fontSize: 35, fontWeight: "bold"}}>Self Assessment</Text>
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
                    <View>
                        <Text>Getting Started!</Text>
                        <Text>
                            {
                            "This tool is intended to help you understand what to do next about COVID-19. You'll answer a few questions about your symptoms, travel and contact you've had with others"
                            }
                        </Text>
                    </View>
                    <View>
                        <Text>Getting Started!</Text>
                        <Text>
                            {
                            "Recommendations provided by this tool do not constitute medidal advice and should not be used to diagnose or treat medical conditions"
                            }
                        </Text>
                    </View>
                    <View style={{ marginTop: 1000 * 0.34 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={([styles.mainTitle], { color: 'white' })}>
                        Start Assessment...
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    mainTitle: {
        
        letterSpacing: -0.5,
        fontSize: 15,
    }, 
    button: {
        height: 53,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
    })
    
