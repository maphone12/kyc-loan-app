import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Linkings = ({on_press, link_text}) => {
    return (
        <TouchableOpacity style={{
            justifyContent: 'center',
        }}
        onPress={on_press}>            
            <Text style={{
                fontSize:16,
                letterSpacing:0.5,
                textAlign:'right',
                position:'relative',
                color:'#FFA500',                
            }}>
                {link_text}
            </Text>
        </TouchableOpacity>
    )
}

export default Linkings
