import React from 'react';
import { SafeAreaView, Image, View, Text, StyleSheet, StatusBar} from 'react-native';
import Icons from '../../constants/Icons';
import Buttons from '../../components/Button';

const RegistSuccess = ({navigation}) =>{
    return(
        <SafeAreaView style={{ 
            flex: 1, 
            backgroundColor:'#28A578',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <StatusBar  
                barStyle= 'light-content'
                backgroundColor='#28A578'
            />
            <View style={styles.containerMain}>
                <View style={{
                    flex:1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image source={Icons.Done} style={{
                        width: 250,
                        height: 250,
                        top: -50,
                    }}/>

                    <Text style={{
                        color: '#fff',
                        fontSize: 45,
                        fontWeight: '600',
                        top: -30,
                    }}>ສຳເລັດ</Text>
                    <Text  style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: '400',
                    }}>ລົງທະບຽນຂໍກູ້ຢືມເງິນຂອງທ່ານສຳເລັດ..!</Text>
                </View>
            </View>
            <View style={styles.bottomView}>
                <Buttons btn_text="ສຳເລັດ" on_press={()=>navigation.navigate("HomeScreen")} />
            </View>
        </SafeAreaView>
    )
}



export default RegistSuccess;


const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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