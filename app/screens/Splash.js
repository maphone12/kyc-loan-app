import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import Images from '../constants/Images';


const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('Onboarding')
    },3000);

    return (
        <View style={{
            flex:1,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:"#28A578"
        }} >
            <StatusBar 
                barStyle="light-content" 
                hidden={false} 
                backgroundColor="#28A578" 
            />
            <Image source={(Images.splashScreen)} style={{
                width:250,
                height:250
            }}  />    
            <Text style={{
                top: 20,
                fontSize:18,
                color:"#fff",
                textAlign: 'center'
            }} >ບໍລິການດ້ານເງິນກູ້</Text>
        </View>
    )
}

export default Splash