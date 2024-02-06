import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const TextInputs = ({ sting, next, title}) => {

    return (
        <View>            
            <View style={{
                marginTop: 10,
            }} >
                {/* <Icon name="envelope-o" size={22} color="#818181" /> */}
                <TextInput 
                    style={styles.input} 
                    placeholderTextColor="#818181" 
                    ref={sting}
                    returnKeyType={next} 
                    label={title}               
                />
            </View>
        </View>    
    )
}


export default TextInputs;

const styles = StyleSheet.create({
    input: { 
        paddingLeft:2,
        fontWeight: '900', 
        fontSize: 16,
        borderWidth: 0.5,
        borderColor: '#8d8d8d',
        backgroundColor: '#f3f3f3',
    }
})