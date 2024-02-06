import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';


const Branches = [
    {key: 'HQ', value: 'ຫ້ອງການໃຫຍ່ ນຄ ວຽງຈັນ'},
    {key: 'STN', value: 'ໜ່ວບໍລິການ ໄຊທານີ'},
    {key: 'STH', value: 'ໜ່ວບໍລິການ ໄຊເສດຖາ'},
    {key: 'SK', value: 'ໜ່ວບໍລິການ ສີໂຄດຄະບອງ'},
    {key: 'SVK', value: 'ໜ່ວບໍລິການ ສະຫວັນນະເຂດ'},
    {key: 'LPB', value: 'ໜ່ວບໍລິການ ຫລວງພະບາງ'},
    {key: 'XAY', value: 'ໜ່ວບໍລິການ ໄຊຍະບູລີ'},
    {key: 'MPH', value: 'ໜ່ວບໍລິການ ເມືອງເຟືອງ'},
    {key: 'VIV', value: 'ໜ່ວບໍລິການ ວັງວຽງ'},
    {key: 'MPG', value: 'ໜ່ວບໍລິການ ເມືອງພຽງ'},
    {key: 'PHO', value: 'ໜ່ວບໍລິການ ໂພນໂຮງ'},
    {key: 'PX', value: 'ໜ່ວບໍລິການ ປາກເຊ'},
    {key: 'HPH', value: 'ໜ່ວບໍລິການ ຫົວພັນ'},
]


export const SelectBranch = () => {
    const [selectBranch, setBranch] = useState(Branches);
    return (        
        <SelectList
            setSelected={setBranch}
            data={Branches}
            boxStyles={{
                borderWidth: 0.5,
                borderColor: '#8d8d8d',
                paddingVertical: 16,
                backgroundColor: '#f3f3f3',                            
            }}
            search={false}
            placeholder='ໜ່ວຍບໍລິການ'
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
    )
}


export default SelectBranch;