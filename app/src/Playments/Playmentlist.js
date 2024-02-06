import React from 'react';
import {View, ScrollView, SafeAreaView, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Profile } from '../../constants/Images';
const Playmentlist = ({navigation}) => {
  
  return (
    <SafeAreaView style={{ 
      flex: 1,
    }}>
      <StatusBar  
          barStyle= 'light-content'
          backgroundColor="#28A578"
      />
      <View style={{height: 10,}}/>
      <Text style={{
        padding: 12,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#777'
      }}>
        ບັນຊີເງິນກູ້ຂອງທ່ານ
      </Text>
      <ScrollView style={{padding: 12,}}>
        <View >
          <TouchableOpacity style={{
            borderWidth: 0.5, 
            width: '100%',
            borderRadius: 6,
            borderColor: '#999',
            padding: 5,
            backgroundColor: '#e3e3e3'
          }}
          onPress={() => navigation.navigate("Paidlist")}
          >
            <View style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 4,
            }}>
              <Image source={Profile} style={{
                width: 60,
                height: 60,
                borderRadius: 25,
              }}/>

              <View style={{
                padding: 5,
              }}>
                <Text style={{
                  fontSize: 18,
                  color: '#666',
                  fontWeight: 'bold',
                }}>
                  ມາພອນ ເພັດລາວັນ
                </Text>
                <View>
                  <Text style={{
                    fontSize: 12,
                    color: '#666',
                    fontWeight: '600',}}>
                      ເລກທີ່ສັນຍາເງິນກູ້:
                  </Text>
                  <Text style={{
                    fontSize: 20, 
                    color: '#777', 
                    fontWeight: '600'
                  }}>
                    0000-10-007832XXX-05
                  </Text>
                </View>
              </View>

              <Icon name="arrow-right" size={20} color="#777" />
            </View>
          </TouchableOpacity>
          
          {/* Pass due paid  */}
          <View style={{height: 10,}}/>
          <TouchableOpacity style={{
            borderWidth: 0.5, 
            width: '100%',
            borderRadius: 6,
            borderColor: '#999',
            padding: 5,
            backgroundColor: '#e3e3e3'
          }}
          onPress={() => navigation.navigate("PaidlistNormal")}
          >
            <View style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 4,
            }}>
              <Image source={Profile} style={{
                width: 60,
                height: 60,
                borderRadius: 25,
              }}/>

              <View style={{
                padding: 5,
              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#666',
                }}>
                  ມາພອນ ເພັດລາວັນ
                </Text>
                <View>
                  <Text style={{
                    fontSize: 12,
                    color: '#666',
                    fontWeight: '600',}}>
                      ເລກທີ່ສັນຍາເງິນກູ້:
                  </Text>
                  <Text style={{
                    fontSize: 20, 
                    color: '#777', 
                    fontWeight: '600'
                  }}>
                    0000-10-007832XXX-05
                  </Text>
                </View>
              </View>

              <Icon name="arrow-right" size={20} color="#777" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      
    </SafeAreaView>
  )
}

export default Playmentlist;