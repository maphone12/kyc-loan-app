import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native';
import { Profile } from '../../constants/Images';


const Loanitems = ({navigation}) => {

  return (
    <SafeAreaView style={{ 
      flex: 1,
    }}>
      <StatusBar  
          barStyle= 'light-content'
          backgroundColor="#28A578"
      />
      <ScrollView>
          <View style={{
              padding: 10,
          }}>
            
            <View style={{height: 15,}}/>
            <Text style={styles.titleH4}>
                ລາຍການເງິນກູ້ທັງໝົດທີ່ທ່ານໄດ້ກູ້ຢືມ
            </Text>
            <Text style={{ 
              color: '#fff', 
              padding: 8, 
              backgroundColor:'#28A578', 
              fontWeight: '600', 
              borderRadius: 5,
              fontSize: 18,
            }}>
                ຈຳນວນເງິນທັງໝົດ: 41,604,444.45 LAK
            </Text>
            <Text style={styles.titleH5}>
                ຈຳນວນເງິນກູ້: 2
            </Text>
            <View style={{height: 20,}}/>
            <TouchableOpacity style={{
              borderWidth: 0.5, 
              width: '100%',
              borderRadius: 6,
              borderColor: '#999',
              padding: 5,
              backgroundColor: '#e3e3e3'
            }}
            onPress={() => navigation.navigate("LoanDetail")}
            >
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 5,
              }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: '600',}}>
                    ເລກທີ່ສັນຍາເງິນກູ້:
                </Text>
                <Text style={{
                  alignItems:'flex-end', 
                  fontSize: 16, 
                  color: '#444', 
                  fontWeight: '600'
                }}>
                    0000-10-007832XXX-05
                </Text>
              </View>
              <View style={{
                flex: 0.1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 5,
              }}>
                <Text style={{
                  alignItems: 'flex-start', 
                  color: '#fff', 
                  padding: 8, 
                  backgroundColor:'#28A578', 
                  fontWeight: '600', 
                  borderRadius: 5,
                }}>
                    ຈຳນວນເງິນ: 0.00 LAK
                </Text>
                <Text style={{alignItems:'flex-end'}}>
                    ວັນທີ່: --/--/----
                </Text>
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
            onPress={() => navigation.navigate('LoanDetailPaid')}
            >
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 5,
              }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: '600',}}>
                    ເລກທີ່ສັນຍາເງິນກູ້:
                </Text>
                <Text style={{
                  alignItems:'flex-end', 
                  fontSize: 16, 
                  color: '#444', 
                  fontWeight: '600'
                }}>
                    0000-10-007832XXX-05
                </Text>
              </View>
              <View style={{
                flex: 0.1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 5,
              }}>
                <Text style={{
                  alignItems: 'flex-start', 
                  color: '#fff', 
                  padding: 8, 
                  backgroundColor:'#ff3333', 
                  fontWeight: '600', 
                  borderRadius: 5,
                }}>
                    ຈຳນວນເງິນ: 1,418,333.34 LAK
                </Text>
                <Text style={{alignItems:'flex-end'}}>
                    ວັນທີ່: 07/09/2023
                </Text>
              </View>
            </TouchableOpacity>


            {/* Disapproved of loan */}
            <View style={{height: 10,}}/>
            <TouchableOpacity style={{
              borderWidth: 0.5, 
              width: '100%',
              borderRadius: 6,
              borderColor: '#999',
              padding: 5,
              backgroundColor: '#e3e3e3'
            }}>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 5,
              }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: '600',}}>
                    ເລກທີ່ສັນຍາເງິນກູ້:
                </Text>
                <Text style={{
                  alignItems:'flex-end', 
                  fontSize: 16, 
                  color: '#444', 
                  fontWeight: '600'
                }}>
                    0000-10-007832XXX-05
                </Text>
              </View>
              <View style={{
                flex: 0.1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 5,
              }}>
                <Text style={{
                  alignItems: 'flex-start', 
                  color: '#fff', 
                  padding: 8, 
                  backgroundColor:'#a6a6a6', 
                  fontWeight: '600', 
                  borderRadius: 5,
                }}>
                    ຈຳນວນເງິນ: 0.00 LAK
                </Text>
                <Text style={{alignItems:'flex-end'}}>
                    ວັນທີ່: 11/12/2023
                </Text>
              </View>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Loanitems;


const styles=StyleSheet.create({
  title: {
      fontSize: 22,
      fontWeight: '600',
      fontFamily: 'NotoSansLao-Bold',
      color: '#28A578'
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