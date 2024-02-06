import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet, StatusBar} from 'react-native'; 
import { TextInputs, SelectDropDown, SelectBranch } from './components';
import Buttons from '../../components/Button';

const userTYPE = [
    {key: 'Individual', value: 'ລາຍບຸກຄົນ'},
    {key: 'Enterprice', value: 'ລັດວິສະຫະກິດ'},
]

const UserType = ({navigation}) => {

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
            }}>
                <View style={{
                    padding: 5,
                }}>
                    <Text style={styles.title}>
                        ຂໍ້ມູນປະເພດຂອງລູກຄ້າ
                    </Text>
                    <Text style={styles.titleH5}>
                        ກະລຸນາເລືອກປະເພດລູກຄ້າ ແລະ ສາຂາທີໃກ້ບ້ານທ່ານ.
                    </Text>
                    <Text style={styles.titleH4}>
                        ປະເພດລູກຄ້າ
                    </Text>
                </View>
                
                <SelectDropDown 
                  data={userTYPE}  
                />
                <View style={{
                    height: 8,
                }}></View>
                <Text style={styles.titleH4}>
                    ໜ່ວຍບໍລິການ
                </Text>
                <SelectBranch/>
            </View>
        </ScrollView>
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={styles.bottomView}>
                <Buttons btn_text="ຖັດໄປ" on_press={()=>navigation.navigate("ApplicationForm")} />
            </View>
        </View>
        
    </SafeAreaView>
    
  )
}


export default UserType;

const styles=StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '600',
        fontFamily: 'NotoSansLao-Bold',
        color: '#28A578'
    },
    titleH3: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'NotoSansLao-Bold',
        color: '#777'
    },
    titleH4: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'NotoSansLao-Bold',
        color: '#777'
    },
    titleH5: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'NotoSansLao-Regular'
    },
    bottomView: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    }

})