import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet, StatusBar} from 'react-native'; 
import { TextInputs } from './components';
import Buttons from '../../components/Button';


const TransferAmount = ({navigation}) => {

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
                <View>
                    <Text style={styles.title}>
                        ຈຸດປະສົງຂອງການຂໍກູ້ຢືມ
                    </Text>
                    <Text style={styles.titleH5}>
                        ປ້ອນຂໍ້ມູນຜູ້ຄ້ຳປະກັນໃຫ້ຄົບຖ້ວນ, ລະອຽດ ແລະ ຖືກຕ້ອງ.
                    </Text>
                </View>
                
                
                <View style={{
                    height: 5,
                }}></View>
                <Text style={styles.titleH3}>ຈຳນວນເງິນ</Text>

                <TextInputs title='ຈຳນວນເງິນ [Total Amount]'/>
                <View style={{
                    height: 5,
                }}></View>

                <TextInputs title='ຈຸດປະສົງຂໍກູ້ຢືມ [Loan Purpose]'/>
                <TextInputs title='ເປົ້າໝາຍ'/>
                
            
                <View style={{
                    paddingBottom: 10,
                }}></View>
            </View>
        </ScrollView>
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '100%',
            height: 80
        }}>
            <View style={styles.bottomView}>
                <Buttons btn_text="ບັນທືກຂໍ້ມູນ" on_press={()=>navigation.navigate("RegistSuccess")} />
            </View>
        </View>
    </SafeAreaView>
    
  )
}


export default TransferAmount;

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
        fontFamily: 'NotoSansLao-Bold'
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