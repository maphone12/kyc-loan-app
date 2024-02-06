import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';


const selectDocuments = [
    {key: 'NACARD', value: 'ບັດປະຈຳຕົວ'},
    {key: 'FAMBK', value: 'ປື່ມສຳມະໂນຄົວ'},
    {key: 'VEHICLE', value: 'ໃບຂັບຂີ່ຍານພະຫານະ'},
    {key: 'PASSCARD', value: 'ໜັງສືເດິນທາງ'},
]


export const SelectDocument = () => {
    const [selectDoc, setDoc] = useState(selectDocuments);
    return (        
        <SelectList
            setSelected={setDoc}
            data={selectDocuments}
            boxStyles={{
                borderWidth: 0.5,
                borderColor: '#8d8d8d',
                paddingVertical: 16,
                backgroundColor: '#f3f3f3',                            
            }}
            search={false}
            placeholder='ປະເພດເອກະສານ'
            inputStyles={{
                fontSize: 18,
                fontWeight: '600',
            }}
            dropdownItemStyles={{
                paddingVertical: 15,
            }}
            dropdownTextStyles={{
                fontSize: 18,
                fontWeight: '600',
            }}
        />                 
    )
}


export default SelectDocument;