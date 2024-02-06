import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet, StatusBar} from 'react-native';

const Notifications = () => {
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
            padding: 20,
            backgroundColor: '#28A578',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'row',
          }}>
            <View>
              <Text style={styles.title}>
                  ລາຍການແຈ້ງເຕືອນ
              </Text>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Notifications;


const styles=StyleSheet.create({
  title: {
      fontSize: 22,
      fontWeight: '600',
      fontFamily: 'NotoSansLao-Bold',
      color: '#fff',
  },
  titleH3: {
      fontSize: 20,
      fontWeight: '600',
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