import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native';
import { Profile } from '../../constants/Images';
import Icon from 'react-native-vector-icons/FontAwesome';


const Calculators = () => {
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
            <Text></Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Calculators;


