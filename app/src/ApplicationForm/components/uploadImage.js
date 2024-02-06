import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'; 
// import ImagePicker from 'react-native-image-crop-picker';

export const UploadImage = ({image, text}) => {
    return(
        <View style={{
            width: '100%',
            height: 200,
            backgroundColor: '#f4f4f4',
            marginTop: 10,
            borderRadius: 8,
            borderWidth: 0.5,
            borderColor: '#777',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* <Image 
                source={image}
                alt="Upload"
                style={{with: '100%', height: '100%'}}
            /> */}
            <TouchableOpacity style={{padding: 10, backgroundColor: '#999', borderRadius: 8,}}>
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default UploadImage;
