import React, {useState} from 'react';
import { View, SafeAreaView, ScrollView, StatusBar, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import { Profile } from '../../constants/Images';
import QRCode from 'react-native-qrcode-svg';

const PaidListDetail = ({ route }) => {
    const {itemData} = route.params;
    
    let base64Logo = `data:image/png;base64, ${uuidv4()}`;
    return (
        <SafeAreaView style={{ 
            flex: 1,
            backgroundColor: "#fff"
          }}> 
            <StatusBar  
                barStyle= 'light-content'
                backgroundColor="#28A578"
            />
            <ScrollView style={{
                padding: 5,
              }}>
              
              <View style={{
                alignContent: 'center',
                alignItems: 'center',
                padding: 10,

              }}>
                <Icon name="check-circle" size={90} color="#28A578"/>
                <Text style={{
                  fontSize: 24,
                  color: '#28A578',
                  fontWeight: '600',
                  padding: 8
                }}>ສຳເລັດ!</Text>
              </View>
              <View style={{
                padding: 10,
              }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: '#666',}}>{itemData.Titles}</Text>
                <Text>{Date.now()}</Text>
                <Text>{itemData.RegDate}</Text>
              </View>
              <View style={{
                padding: 10,
                height: 120,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'space-around',
              }}>
                <View style={{
                  alignItems: 'center',
                  alignContent: 'center',
                }}>
                  <Image source={Profile} name="user-alt" style={{padding: 20, backgroundColor: '#e3e3e3', borderRadius: 30, width: 80, height: 80}}/>
                  <Text style={{fontSize: 16, padding: 5}}>{itemData.accName}</Text>
                </View>
                <View><Icon name="exchange-alt" size={30} color="#28A578"/></View>
                <View style={{
                  alignItems: 'center',
                  alignContent: 'center',
                }}>
                  <Image source={Profile} name="user-alt" style={{padding: 20, backgroundColor: '#e3e3e3', borderRadius: 30, width: 80, height: 80}}/>
                  <Text style={{fontSize: 16, padding: 5}}>{itemData.accName}</Text>
                </View>
              </View>
              <View style={{
                padding: 10,
              }}>
                  <Text style={{color: '#666', fontSize: 18, fontWeight: 'bold'}}>ຈຳນວນເງິນ:</Text>
                  <Text style={{fontSize: 28, fontWeight: 'bold',color: `${itemData.textColor}`}}>{itemData.Amount}</Text>
                  <Text style={{fontSize: 16,color: '#666', fontWeight: 'bold'}}>ລາຍລະອຽດ:</Text>
                  <Text style={{fontWeight: 'bold',color: `${itemData.textColor}`}}>{itemData.Discription}</Text>
                  <Text style={{color: '#666', fontWeight: 'bold'}}>ວັນທີຊຳລະ:</Text>
                  <Text style={{fontWeight: 'bold',color: `${itemData.textColor}`}}>{itemData.RegDate}</Text>
              </View>
              <View  style={{
                padding: 10,
              }}>
                <QRCode
                  value={"MAPHONE PHETDAVANH BY DEVELOPER"}
                  logo={{uri: base64Logo}}
                  logoSize={30}
                  logoBackgroundColor='transparent'
                />
              </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PaidListDetail;