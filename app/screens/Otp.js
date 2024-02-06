import React, {useRef, useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    ScrollView, 
    View, 
    Linking, 
    StatusBar, 
    SafeAreaView, 
    TextInput } from 'react-native';
    
import Buttons from '../components/Button';
import Links from '../components/Linkings';

const Otp = ({navigation}) => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fiveInput = useRef();
    const sixInput = useRef();
    const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '', 5: '', 6: ''});
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="#28A578" />
            <View style={styles.containerMain}>
                <ScrollView style={{
                    flex:1,
                    backgroundColor:'#fff',
                    flexDirection: 'column',
                }}>
                    <View >
                        <Text style={styles.title} >ຢືນຢັ້ນ OTP</Text>
                        <Text style={styles.content}>ກະລຸນາປ້ອນ OTP 6 ຕົວເລກ, ທີ່ຫາກໍສົ່ງໄປທີ່: ອີເມວ ຫຼື ເບີໂທລະສັບຂອງທ່ານ</Text>

                        <Text style={styles.content}>ກະລຸນາກວດເບີ່ງ: ອີເມວ ຫຼື ຂໍ້ຄວາມຂອງທ່ານ</Text>
                        <View style={styles.otpContainer}>
                            <View style={styles.otpBox}>
                            <TextInput
                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={firstInput}
                                onChangeText={text => {
                                setOtp({...otp, 1: text});
                                text && secondInput.current.focus();
                                }}
                            />
                            </View>
                            <View style={styles.otpBox}>
                            <TextInput
                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={secondInput}
                                onChangeText={text => {
                                setOtp({...otp, 2: text});
                                text ? thirdInput.current.focus() : firstInput.current.focus();
                                }}
                            />
                            </View>
                            <View style={styles.otpBox}>
                            <TextInput
                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={thirdInput}
                                onChangeText={text => {
                                setOtp({...otp, 3: text});
                                text ? fourthInput.current.focus() : secondInput.current.focus();
                                }}
                            />
                            </View>
                            <View style={styles.otpBox}>
                            <TextInput
                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={fourthInput}
                                onChangeText={text => {
                                setOtp({...otp, 4: text});
                                text ?fiveInput.current.focus() : thirdInput.current.focus();
                                }}
                            />
                            </View>
                            <View style={styles.otpBox}>
                            <TextInput
                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={fiveInput}
                                onChangeText={text => {
                                setOtp({...otp, 5: text});
                                text ? sixInput.current.focus() : fourthInput.current.focus();
                                }}
                            />
                            </View>
                            <View style={styles.otpBox}>
                            <TextInput
                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={sixInput}
                                onChangeText={text => {
                                setOtp({...otp, 6: text});
                                text ? firstInput.current.focus() : fiveInput.current.focus();
                                }}
                            />
                            </View>

                        </View>
                    </View>
                    <View style={{
                        width:'100%',    
                        justifyContent:'center',
                        alignItems: 'center',
                    }} >
                        <Links on_press={()=> console.log(otp)} link_text={"ສົ່ງໃໝ່ OTP"}></Links>
                    </View>
                </ScrollView>
                
                <View style={styles.bottomView}>
                    <Buttons btn_text="ຢືນຢັ້ນ OTP" on_press={()=>navigation.navigate("Success")} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomView: {
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    title: {
      fontSize: 30,
      marginTop: 50,
      marginBottom: 10,
      marginHorizontal: 20,
      fontWeight: '600',
    },
    content: {
      fontSize: 16,
      marginBottom: 20,
      marginHorizontal: 20,
    },
    otpContainer: {
        marginHorizontal: 20,
        marginBottom: 30,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
    },
    otpBox: {
        borderRadius: 5,
        borderColor: '#28A578',
        borderWidth: 0.5,
    },
    otpText: {
        fontSize: 25,
        color: '#000',
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
    },
    
});

export default Otp;