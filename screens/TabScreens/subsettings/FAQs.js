import React from 'react'
import {
    View,
    Text, 
    Modal, 
    TouchableOpacity
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {AccordionList} from 'accordion-collapse-react-native'

import {FAQData} from '../../../Data/data'


export default function FAQs({Visible, Close}){
    const [details, setDetails] = React.useState(FAQData)

    function head(item){
        return(
         <View style={{paddingVertical:20, padding: 8}}>
            <Text style={{color: "#000", fontWeight: "bold"}}>{item.title}</Text>
          </View>
        )
    }

    function body(item){
        return(
            <View style={{padding:1}}>
                 <Text style={{}}>{item.content}</Text>
            </View>
        )
    }

    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={'pageSheet'}>
            <View style={{padding: 20}}>

                <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                    <View>
                        <Text style={{}} style={{fontSize: 35, fontWeight: "bold"}}>FAQs</Text>
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
                    <AccordionList
                        list={details}
                        header={head}
                        body={body}
                        keyExtractor={item => `${item.id}`}
                    />
                </View>
            </View>
        </Modal>
    )
}

