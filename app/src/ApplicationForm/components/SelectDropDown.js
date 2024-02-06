import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import {View} from 'react-native';

const userTYPE = [
    {key: 'Individual', value: 'ລາຍບຸກຄົນ'},
    {key: 'Enterprice', value: 'ລັດວິສະຫະກິດ'},
]

export const SelectDropDown = ({data}) => {
    const [selectBranch, setBranch] = useState(userTYPE);
    return (
        <View>
            <SelectList
                setSelected={setBranch}
                data={data}
                boxStyles={{
                    borderWidth: 0.5,
                    borderColor: '#8d8d8d',
                    paddingVertical: 16,
                    backgroundColor: '#f3f3f3',                       
                }}
                search={false}
                placeholder='ປະເພດລູກຄ້າ'
                inputStyles={{
                    fontSize: 18,
                    fontWeight: '900',
                }}
                dropdownItemStyles={{
                    paddingVertical: 10,
                }}
                dropdownTextStyles={{
                    fontSize: 18,
                    fontWeight: '900',
                }}
            />
        </View>
        
                  
    )
}

export default SelectDropDown ;
