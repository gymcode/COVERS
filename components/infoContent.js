import React from 'react';
import {View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { height } from '../constants/constants';

export default function InfoContent({navigation}){
    return(
        <View >
            
            <View style={{padding:20, paddingTop:20}}>
             <Text style={{fontWeight:"bold",fontSize:20}}>Background</Text>
             <Text style={{paddingTop:2, fontSize:13}}>Citizens are advised to provide accurate information on this</Text>
             <Text style={{paddingTop:2, fontSize:13}}>application to support the government and health services in</Text>
             <Text style={{paddingTop:2, fontSize:13}}>managing and accurately containing the spread of coronavirus</Text>
           </View>

           <View style={{padding:20, paddingTop:10}}>
             <Text style={{fontWeight:"bold", fontSize:20}}>Collection of your information</Text>
             <Text style={{paddingTop:2, fontSize:13}}>We may collect information about you in a variety of ways. The</Text>
             <Text style={{paddingTop:2, fontSize:13}}>information we may collect via the Application depends on the</Text>
             <Text style={{paddingTop:2, fontSize:13}}>content and materials you use, and includes:</Text>
           </View>

           <View style={{padding:20, paddingTop:10}}>
             <Text style={{fontWeight:"bold", fontSize:20}}>Personal information</Text>
             <Text style={{paddingTop:2, fontSize:12}}>Demographic and other personally identifiable information that you</Text>
             <Text style={{paddingTop:2, fontSize:12}}>voluntarily give to us while using the application is anonymized and</Text>
             <Text style={{paddingTop:2, fontSize:12}}>is only made available to the relevant authorities in cases of</Text>
             <Text style={{paddingTop:2, fontSize:12}}>emergency.</Text>
           </View>

           <View style={{padding:20, paddingTop:10}}>
             <Text style={{fontWeight:"bold", fontSize:20}}>Geo-location information</Text>
             <Text style={{paddingTop:3, fontSize:12}}>We may request access or permission to and track location-based</Text>
             <Text style={{paddingTop:3, fontSize:12}}>information from your mobile device, either continuously or while</Text>
             <Text style={{paddingTop:3, fontSize:12}}>you are using the Application, to provide location-based services. If</Text>
             <Text style={{paddingTop:3, fontSize:12}}>you wish to change our access or permissions, you may do so in</Text>
             <Text style={{paddingTop:3, fontSize:12}}>your device's settings</Text>
           </View>

           <View style={{padding:20, paddingTop:10}}>
             <Text style={{fontWeight:"bold", fontSize:20}}>Mobile device access</Text>
             <Text style={{paddingTop:2, fontSize:12}}>We may request access or permission to certain features from your</Text>
             <Text style={{paddingTop:2, fontSize:12}}>mobile devices, including your mobile device's bluetooth,gps.If you</Text>
             <Text style={{paddingTop:2, fontSize:12}}>wish to change our access or permissions, you may do so in the</Text>
             <Text style={{paddingTop:2, fontSize:12}}>app's settings.</Text>
           </View>

           <View style={{padding:20, paddingTop:10}}>
             <Text style={{fontWeight:"bold", fontSize:20}}>Mobile device access</Text>
             <Text style={{paddingTop:2, fontSize:12}}>We may request access or permission to certain features from your</Text>
             <Text style={{paddingTop:2, fontSize:12}}>mobile devices, including your mobile device's bluetooth,gps.If you</Text>
             <Text style={{paddingTop:2, fontSize:12}}>wish to change our access or permissions, you may do so in the</Text>
             <Text style={{paddingTop:2, fontSize:12}}>app's settings.</Text>
           </View>

           <View style={{padding:20, paddingTop:10}}>
             <Text style={{fontWeight:"bold", fontSize:20}}>Push notifications</Text>
             <Text style={{paddingTop:2, fontSize:12}}>We may request to send you push notifications regarding your</Text>
             <Text style={{paddingTop:2, fontSize:12}}>account or the Application. If you wish to opt-out from receiving</Text>
             <Text style={{paddingTop:2, fontSize:12}}>these types of communications, you may turn them off in the app's</Text>
             <Text style={{paddingTop:2, fontSize:12}}>settings.</Text>
           </View>


           <View style={{padding:20, paddingTop:10}}>
             <Text style={{fontWeight:"bold", fontSize:20}}>Use of information</Text>
             <Text style={{paddingTop:2, fontSize:12}}>Having accurate information about you permits us to provide you</Text>
             <Text style={{paddingTop:2, fontSize:12}}>with a smooth,efficient, and customized experience. Specifically</Text>
             <Text style={{paddingTop:2, fontSize:12}}>we may use information collected about you via the Application to</Text>
             <Text style={{paddingTop:2, fontSize:12}}>-Assist relevant authority to respond to suspect COVID-19 cases</Text>
             <Text style={{paddingTop:2, fontSize:12}}>-Compile anonymous statistical data and analysis</Text>
             <Text style={{paddingTop:2, fontSize:12}}>-Deliver targeted notifications concerning COVID-19 to you</Text>
             <Text style={{paddingTop:2, fontSize:12}}>-Monitor and analyze usage trends to inform sensitization efforts</Text>
           </View>

           <View style={{padding:20, paddingTop:10}}>
             <Text style={{fontWeight:"bold", fontSize:20}}>Disclosure of your information</Text>
             <Text style={{paddingTop:2, fontSize:12}}>We will be sharing anonymized information we collect about you</Text>
             <Text style={{paddingTop:2, fontSize:12}}>with the relevant government agencies and health services</Text>
            </View>

            <View style={{padding:20, paddingTop:10}}>
             <Text style={{fontWeight:"bold", fontSize:20}}>Options regarding your information</Text>
             <Text style={{paddingTop:2, fontSize:12}}>You may at any time review or change the information in your</Text>
             <Text style={{paddingTop:2, fontSize:12}}>account or terminate your account by</Text>
             <Text style={{paddingTop:2, fontSize:12}}>-Logging into your account settings and updating your account</Text>
             <Text style={{paddingTop:2, fontSize:12}}>-Contacting us using the contact information provided below</Text>
             <Text style={{paddingTop:2, fontSize:12}}>[send emails to:info@polymorphlabs.io]</Text>
           </View>

           <View style={{padding:20, paddingTop:10}}>
             <Text style={{paddingTop:2, fontSize:12}}>Upon your request to terminate your account, we will deactivate or</Text>
             <Text style={{paddingTop:2, fontSize:12}}>delete your account and information from your active databases.</Text>
             <Text style={{paddingTop:2, fontSize:12}}>However, some information may be retained in our files to prevent</Text>
             <Text style={{paddingTop:2, fontSize:12}}>fraud, troubleshoot problems, assist with any investigations,</Text>
             <Text style={{paddingTop:2, fontSize:12}}>enforce our Terms of Use and/or comply with legal requirements.</Text>
           </View>

           <View style={{padding:20, paddingTop:10}}>
           <Text style={{fontWeight:"bold", fontSize:20}}>Contact Us</Text>
             <Text style={{paddingTop:2, fontSize:12}}>If you have questions or comments about this Privacy Policy, please</Text>
             <Text style={{paddingTop:2, fontSize:12}}>contact us at</Text>
           </View>

           <View style={{padding:20, paddingTop:10, paddingBottom:140}}>
           <Text style={{fontSize:12, paddingLeft:"60%", fontSize:12}}>Polymorph Labs Gh. Ltd.</Text>
             <Text style={{paddingTop:2, fontSize:12, paddingLeft:"35%"}}>17 National Service Avenue Market Street</Text>
             <Text style={{paddingTop:2, fontSize:12, paddingLeft:"75%"}}>Haatso, Accra</Text>
             <Text style={{paddingTop:2, fontSize:12, paddingLeft:"85%"}}>Ghana</Text>
             <Text style={{paddingTop:2, fontSize:12, paddingLeft:"70%"}}>+233 20498950</Text>
             <Text style={{paddingTop:2, fontSize:12, paddingLeft:"62%"}}>info@polymorphlabs.io</Text>
           </View>

        </View>
      )
}