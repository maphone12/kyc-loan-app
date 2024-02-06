import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native';
import { Profile } from '../../constants/Images';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoanDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{ 
      flex: 1,
    }}>
      <StatusBar  
          barStyle= 'light-content'
          backgroundColor="#28A578"
      />
      <ScrollView>
          <View style={{height: 20,}}/>
          <View style={{
              padding: 10,
          }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Profile} style={{borderRadius: 50, width: 120, height: 120,}}></Image>
              <View style={{height: 10,}}/>
              <Text style={styles.title}>
                  ມາພອນ ເພັດລາວັນ
              </Text>
            </View>
            <View style={{height: 15,}}/>
            <Text style={styles.titleT1}>
              ລາຍລະອຽດເງິນກູ້ຂອງທ່ານ
            </Text>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 8, 
              backgroundColor:'#28A578', 
              fontWeight: '600', 
              borderRadius: 5,
            }}>
              <Text style={{
                fontSize: 20,
                color: '#fff', 
                fontWeight: '600',}}>
                  ຈຳນວນເງິນ:
              </Text>
              <Text style={{
                alignItems:'flex-end', 
                fontSize: 20,  
                color: '#fff', 
                fontWeight: '600'
              }}>
                  18,911,111.12 LAK
              </Text>
            </View>

            <View style={{height: 20,}}/>
            <View>
              <Text style={{
                fontSize: 18,
                fontWeight: '600',}}>
                  ເລກທີ່ສັນຍາເງິນກູ້:
              </Text>
              <Text style={{
                alignItems:'flex-end', 
                fontSize: 26, 
                color: '#28A578',
                fontWeight: '600',
                fontFamily: 'NotoSansLao-Bold',
              }}>
                  0000-10-0078327653-05
              </Text>
            </View>
            <View style={{height: 10,}}/>
            <View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 8, 
              }}>
                <Text style={{
                  fontSize: 16,
                  color: '#444', 
                  fontWeight: '600',}}>
                    ເລີ່ມຕົ້ນ:
                </Text>
                <Text style={{
                  alignItems:'flex-end', 
                  fontSize: 16,  
                  color: '#444', 
                  fontWeight: '600'
                }}>
                    07/02/2021 9:34:54 AM
                </Text>
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 8, 
              }}>
                <Text style={{
                  fontSize: 16,
                  color: '#444', 
                  fontWeight: '600',}}>
                    ສີ້ນສຸດ:
                </Text>
                <Text style={{
                  alignItems:'flex-end', 
                  fontSize: 16,  
                  color: '#444', 
                  fontWeight: '600'
                }}>
                    07/01/2024 9:34:54 AM
                </Text>
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 8, 
              }}>
                <Text style={{
                  fontSize: 16,
                  color: '#444', 
                  fontWeight: '600',}}>
                    ຜະລິດຕະພັນເງິນກູ້:
                </Text>
                <Text style={{
                  alignItems:'flex-end', 
                  fontSize: 16,  
                  color: '#444', 
                  fontWeight: '600'
                }}>
                    ເງິນກູ້ລາຍບຸກຄົນ
                </Text>
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 8, 
              }}>
                <Text style={{
                  fontSize: 16,
                  color: '#444', 
                  fontWeight: '600',}}>
                    ໄລຍະກູ້ຢືມ:
                </Text>
                <Text style={{
                  alignItems:'flex-end', 
                  fontSize: 16,  
                  color: '#444', 
                  fontWeight: '600'
                }}>
                    3 ປີ (36 ເດືອນ)
                </Text>
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 8, 
              }}>
                <Text style={{
                  fontSize: 16,
                  color: '#444', 
                  fontWeight: '600',}}>
                    ປະເພດການຈ່າຍ:
                </Text>
                <Text style={{
                  alignItems:'flex-end', 
                  fontSize: 16,  
                  color: '#444', 
                  fontWeight: '600'
                }}>
                    ເດືອນ
                </Text>
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 8, 
              }}>
                <Text style={{
                  fontSize: 16,
                  color: '#444', 
                  fontWeight: '600',}}>
                    ອັດຕາອກເບ້ຍ:
                </Text>
                <Text style={{
                  alignItems:'flex-end', 
                  fontSize: 16,  
                  color: '#444', 
                  fontWeight: '600'
                }}>
                    1,95 %/ເດືອນ
                </Text>
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 8, 
              }}>
                <Text style={{
                  fontSize: 16,
                  color: '#444', 
                  fontWeight: '600',}}>
                    ຈຳນວນເງິນທີເບິກຈ່າຍ:
                </Text>
                <Text style={{
                  alignItems:'flex-end', 
                  fontSize: 16,  
                  color: '#444', 
                  fontWeight: '600'
                }}>
                    170,200,000.00 LAK
                </Text>
              </View>

              <View style={{height: 20,}}/>
              <TouchableOpacity style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 12, 
                backgroundColor:'#28A578', 
                fontWeight: '600', 
                borderRadius: 5,
              }}
              onPress={() => navigation.navigate("PlaymentNormal")}
              >
                <Text style={{
                  fontSize: 18,
                  color: '#fff', 
                  fontWeight: '400',}}>
                    ຈຳນວນຕ້ອງຈ່າຍ:
                </Text>
                <Text style={{
                  alignItems:'flex-end', 
                  fontSize: 18,  
                  color: '#fff', 
                  fontWeight: '600'
                }}>
                    0.00 LAK
                </Text>
                <Text style={{
                  alignItems:'flex-end', 
                  fontSize: 18,  
                  color: '#fff', 
                  fontWeight: '600'
                }}>
                  <Icon name="arrow-right" size={20} color="#fff" />
                </Text>
              </TouchableOpacity>

            </View>
            
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoanDetail;


const styles=StyleSheet.create({
  title: {
      fontSize: 22,
      fontWeight: '600',
      fontFamily: 'NotoSansLao-Bold',
      color: '#28A578'
  },
  titleT1: {
    fontSize: 23,
    fontWeight: '300',
    fontFamily: 'NotoSansLao-Medium',
    color: '#444'
},
  titleH2: {
      fontSize: 20,
      fontWeight: '600',
      fontFamily: 'NotoSansLao-Bold'
  },
  titleH3: {
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'NotoSansLao-Bold'
  },
  titleH4: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'NotoSansLao-Bold'
  },
  titleH5: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'NotoSansLao-Regular'
  },
})