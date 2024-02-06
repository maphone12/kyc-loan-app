import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity, Image} from 'react-native';
import { BCEL } from '../../constants/Images';


const PlaymentChannels = () => {
  return (
    <SafeAreaView style={{ 
      flex: 1,
      backgroundColor: '#fff'
  }}>
    <StatusBar  
        barStyle= 'light-content'
        backgroundColor="#28A578"
    />
    <View style={{
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 3,
    }}>
      <Text style={styles.titleH4}>
          ຊ່ອງທາງການຊຳລະເງິນກູ້ຂອງທ່ານສາມາດຊຳລະໄດ້ຫຼາຍຊ່ອງທາງດັ່ງນີ້:
      </Text>
    </View>
    <ScrollView style={{height: 600}}>
      <View style={{padding: 10}}>
        <Image source={BCEL} style={{width: 100, height: 100,}}/>
        <Text>ທ່ານສາມາດຊຳລະເງິນກູ້ຜ່ານທະນາຄານການຄ້າໄດ້ແລ້ວ</Text>
        <Text>ວິທີ່ຊຳລະມີດັ່ງຕໍ່ໄປນີ້:</Text>
        <View>
        </View>
        <View>
          
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default PlaymentChannels;



const styles=StyleSheet.create({
  title: {
      fontSize: 22,
      fontWeight: '600',
      fontFamily: 'NotoSansLao-Bold',
      color: '#666'
  },
  titleH3: {
      fontSize: 24,
      color: '#666',
      fontWeight: '600',
      fontFamily: 'NotoSansLao-Bold'
  },
  titleH4: {
      fontSize: 16,
      color: '#666',
      fontWeight: '600',
      fontFamily: 'NotoSansLao-Bold'
  },
  titleH5: {
      fontSize: 16,
      fontWeight: '400',
      fontFamily: 'NotoSansLao-Regular'
  },
});