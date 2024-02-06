import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { Notification } from '../../constants/Icons';

const NotificationModal = () => {
  return (
    <View>
        <TouchableOpacity style={{
            width: '100%',
            height: '80px',
            backgroundColor: '#03f139',
        }}>
            <Image source={Notification} style={{
                width: 50,
                height: 50
            }}/>
            <View>
                <Text>Agreement ID: 0001-012-01233459-6</Text>
                <Text>MAPHONE PHETDAVANH</Text>
                <Text>16/5/2023 12:52:54 AM</Text>
            </View>
            <Text>Total: 520,000.00 LAK</Text>
        </TouchableOpacity>
    </View>
  )
}

export default NotificationModal;
