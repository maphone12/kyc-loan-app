import React, {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    ScrollView, 
    View, 
    Linking, 
    StatusBar, 
    SafeAreaView, 
    Image, 
    TextInput, 
    TouchableOpacity } from 'react-native';
    
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttons from '../components/Button';
import Images from '../constants/Images';

const Registered = ({navigation}) => {
    const [getData, getformData] = useState({
        email:'',
        password:'',
        crmpassword: ''
    });
   
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="#28A578" />
            <View style={styles.containerMain}>
                <ScrollView style={{
                    flex:1,
                    backgroundColor:'#fff',
                    flexDirection: 'column',
                    padding: 20
                }}>
                    <View style={{
                        flex:1,
                        flexDirection:'column',
                        backgroundColor:'#fff',
                    }} >
                        
                        <View style={{
                            flex:1,
                            flexDirection:'column',
                            paddingTop:10
                        }} >
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                top: 10
                            }}>
                                <Image source={(Images.splashScreen)} style={{
                                    width:230,
                                    height:230
                                }}  />
                            </View>
                            <View style={{height: 10}}></View>
                            <View style={{
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:'#ededed',
                                width:'100%',
                                borderRadius:10,
                                height:60,
                                paddingLeft:20
                            }} >
                                <Icon name="envelope-o" size={22} color="#818181" />
                                <TextInput onChangeText={(text)=>{getformData((prevState)=>({
                                    ...prevState,
                                    email:text
                                }))}} style={styles.input} placeholder="ອີເມວ ຫຼື ເບີໂທລະສັບ" placeholderTextColor="#818181" />

                            </View>

                            <View style={{
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:'#ededed',
                                width:'100%',
                                borderRadius:10,
                                height:60,
                                paddingLeft:20,
                                marginTop:20
                            }} >
                                <Icon name="user" size={22} color="#818181" />
                                <TextInput onChangeText={(text)=>{getformData((prevState)=>({
                                    ...prevState,
                                    password:text}))}} style={styles.input} placeholder="ຊື່ ແລະ ນາມສະກຸນ" secureTextEntry={true} placeholderTextColor="#818181" />
                            </View>

                            <View style={{
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:'#ededed',
                                width:'100%',
                                borderRadius:10,
                                height:60,
                                paddingLeft:20,
                                marginTop:20
                            }} >
                                <Icon name="lock" size={22} color="#818181" />
                                <TextInput onChangeText={(text)=>{getformData((prevState)=>({
                                    ...prevState,
                                    password:text}))}} style={styles.input} placeholder="ລະຫັດຜ່ານໃໝ່" secureTextEntry={true} placeholderTextColor="#818181" />
                            </View>

                            <View style={{
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:'#ededed',
                                width:'100%',
                                borderRadius:10,
                                height:60,
                                paddingLeft:20,
                                marginTop:20
                            }} >
                                <Icon name="lock" size={22} color="#818181" />
                                <TextInput onChangeText={(text)=>{getformData((prevState)=>({
                                    ...prevState,
                                    crmpassword:text}))}} style={styles.input} placeholder="ຢືນຢັ້ນລະຫັດຜ່ານ" secureTextEntry={true} placeholderTextColor="#818181" />
                            </View>

                            
                            <View style={{
                                height: 10
                            }}></View>
                            
                            <Text style={{
                                fontSize:14,
                                paddingTop:20,
                                color:"#777"
                            }} >
                            ພວກເຮົາເປັນສະຖາບັນການເງິນຈຸລະພາກທີ່ມີຈັນຍາບັນ ແລະ ວິສາຫະກິດສັງຄົມຊັ້ນນໍາໃນລາວ.</Text>

                        </View>
                    </View>
                    
                </ScrollView>
                
                <View style={styles.bottomView}>
                    <Buttons btn_text="ລົງທະບຽນ" on_press={()=>navigation.navigate("Otp")} />
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
    textStyle: {
        color: '#fff',
        fontSize: 18,
    },
    input:{
        position:'relative',
        height:'100%',
        width:'95%',
        paddingLeft:20,
        fontWeight: '800',
    },
    social_btn:{
        height:55,
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    social_img:{
        width:25,
        height:25,
        marginLeft:15
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    
});

export default Registered;