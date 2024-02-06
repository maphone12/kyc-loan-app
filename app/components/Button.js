import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORSS } from '../constants';

const Buttons = ({ on_press, btn_text }) => {
    return (
        <TouchableOpacity style={{
            justifyContent:'center',
            width:'100%',
            backgroundColor:"#28A578",
            height:60,
            marginBottom:30,
            borderRadius:10
        }} 
        onPress={on_press}
        >
            <Text style={{
                fontSize:18,
                fontWeight: "bold",
                letterSpacing:1,
                textAlign:'center',
                position:'relative',
                color:"#FFF"
            }} >
                {btn_text}
            </Text>

        </TouchableOpacity>
    )
}

export default Buttons

const styles = StyleSheet.create({})