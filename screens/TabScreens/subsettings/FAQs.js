import React from 'react'
import {
    View,
    Text, 
    Modal, 
    TouchableOpacity
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {AccordionList} from 'accordion-collapse-react-native'

import LogSymptoms from '../../../components/vitalComponents/logSymptoms'

const data = [
    {
      id:1,
      title: 'Getting Started',
      body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
    },
    {
      id:2,
      title: 'Components',
      body: 'AccordionList,Collapse,CollapseHeader & CollapseBody'
    }
]

export default function FAQs({Visible, Close}){
    const [details, setDetails] = React.useState(data)

    function head(item){
        return(
         <View style={{padding:10}}>
            <Text style={{color: "#000"}}>{item.title}</Text>
          </View>
        )
    }

    function body(item){
        return(
            <View style={{padding:10}}>
             <Text style={{textAlign:'center'}}>{item.body}</Text>
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

