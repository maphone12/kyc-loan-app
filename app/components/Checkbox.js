import React from 'react';
import CheckBox from 'react-native-check-box';


const CheckBoxs =({chk_text}) =>{
    return(
        <CheckBox
        style={{
            alignSelf: 'center',
        }}
        >
            {chk_text}
        </CheckBox>
    )
}


export default CheckBoxs

