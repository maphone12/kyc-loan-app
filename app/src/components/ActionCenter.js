import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { Colors } from '../../constants';

const ActionCenter = ({img_src,img_text}) => {
    return (
        <TouchableOpacity style={{
            flexDirection:'column',
            alignItems:'center',
        }} >
            <Image style={{
                height:80,
                width:80,
                backgroundColor: Colors.primary,
                borderRadius: 10,
                padding: 10,
            }} source={img_src} />
            <Text style={{fontSize:15,color:'#333'}} >{img_text}</Text>
        </TouchableOpacity>
    )
}

export default ActionCenter;

const styles = StyleSheet.create({})