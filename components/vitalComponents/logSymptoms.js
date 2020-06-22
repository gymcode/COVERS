import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import {  ScrollView } from 'react-native-gesture-handler';
import {Symptoms} from '../../Data/data'
import {vitalContext} from '../../App'

const Card = ({ value, sign, handleSelect, idOfSymptom, valueData, selectStatus }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => handleSelect(valueData, idOfSymptom)}
          style={[styles.values, selectStatus ? styles.selectedValue : styles.values]}>
          <Text style={styles.number}>{value}</Text>
        </TouchableOpacity>
        <View style={{ marginHorizontal: 10, paddingTop: 10 }}>
          <Text style={styles.description}>{sign}</Text>
        </View>
      </View>
    );
  };

export default function LogSymptoms(){
    const [load, setLoad] = useState(false);
    const [active,setActive] = useState(null)
    const [fever, setFever] = useState({});
    const [aches, setAches] = useState({});
    const [breath, setBreath] = useState({});
    const [throat, setThroat] = useState({});
    const [cough, setCough] = useState({});
    const [headache, setHeadache] = useState({});
    const {vitalSymptoms, reportSymptom} = React.useContext(vitalContext)

    function handleSelect(valueData, idOfSymptom) {
        if (idOfSymptom === 1 ) {
           valueData.selectStatus = !valueData.selectStatus  
           setFever(valueData); 
           return {...valueData}
        } else if (idOfSymptom === 2 ) {
          valueData.selectStatus = !valueData.selectStatus  
          setAches(valueData);
          return {...valueData}
        } else if (idOfSymptom === 3 ) {
          valueData.selectStatus = !valueData.selectStatus  
          setBreath(valueData);
          return {...valueData}
        } else if (idOfSymptom === 4 ) {
          valueData.selectStatus = !valueData.selectStatus  
          setThroat(valueData);
          return {...valueData}
        } else if (idOfSymptom === 5) {
          valueData.selectStatus = !valueData.selectStatus  
           setCough(valueData);
           return {...valueData}
        } else {
          valueData.selectStatus = !valueData.selectStatus  
          setHeadache(valueData);
          return {...valueData}
        }
     
      }
     

      function submit() {
        setLoad(true)
        
        setTimeout(() => {
          const newSymptoms = { 
            fever,
            aches,
            breath,
            throat,
            cough,
            headache,
          };
          reportSymptom(newSymptoms);
          
        },2000)
      }
    
      
    return(
          <View>
           <View showsVerticalScrollIndicator={false}>
                <View style={{ paddingTop: 10 }}>
                {Symptoms.map(symptom => (
                    <View key={symptom.id} style={styles.container}>
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={styles.mainTitle}>{symptom.name}</Text>
                        <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingTop: 10,
                        }}>
                        {symptom.selected.map(select => (
                            <Card
                            key={select.id}
                            handleSelect={handleSelect}
                            idOfSymptom={symptom.id}
                            valueData={select}
                            {...select}
                            />
                        ))}
                        </View>
                    </View>
                    </View>
                ))}
                </View>
           
            {/* Button */}
          <TouchableOpacity onPress={()=>{submit()}} style={styles.button}>
            {load ? (
              <ActivityIndicator color="black" />
            ):(
              <Text style={([styles.description], { color: 'white' })}>
                Log Vitals
              </Text>
            )}
        
          </TouchableOpacity>
         </View>
          </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      shadowColor: 'grey',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.2,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      
    },
    values: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedValue: {
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#738096',
    },
    mainTitle: {
      
      letterSpacing: -0.5,
    },
    number: {
      
      letterSpacing: -0.4,
      fontSize: 16,
    },
    selectedNumber: {
      
      letterSpacing: -0.4,
      fontSize: 16,
      color: 'white',
    },
    button: {
      backgroundColor: '#738096',
      height: 52,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
    },
    description: {
      
      letterSpacing: -0.4,
      color: 'grey',
    },
  });