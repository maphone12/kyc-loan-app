import React,{useState} from 'react';
import { StyleSheet, Text, ScrollView, View, Linking, StatusBar, Image, TextInput } from 'react-native';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttons from '../components/Button';
import Links from '../components/Linkings';
import Images from '../constants/Images';
import { firebase } from '@react-native-firebase/auth';


const Login = ({navigation}) => {

    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const handleLogin = () => {
        const { email, password } = formData;

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // ล็อกอินสำเร็จ
            const user = userCredential.user;
            console.log('ล็อกอินสำเร็จ:', user);

            // นำผู้ใช้ไปยังหน้า "HomeScreen" หรือหน้าอื่นตามที่คุณต้องการ
            navigation.navigate("HomeScreen");
        })
        .catch((error) => {
            // การล็อกอินล้มเหลว
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('ล็อกอินล้มเหลว:', errorCode, errorMessage);

            // แสดงข้อความข้อผิดพลาด
            Alert.alert('เกิดข้อผิดพลาด', errorMessage);
        });
    };

    return (
        <ScrollView style={{
            flex:1,
            backgroundColor:'#fff',
            flexDirection: 'column',
            padding: 20
        }}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View style={{
                flex:1,
                flexDirection:'column',
                backgroundColor:'#fff',
            }} >
                <View style={{
                    flex: 1,
                    justifyContent:'center',
                    alignItems:'center',
                    paddingTop: 10
                }} >
                    <Text style={{
                        fontSize:45,
                        color:"#000",
                        fontWeight: 'bold'
                    }} >ເຂົ້າສູ່ລະບົບ</Text>
                    
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 10
                }}>
                    <Image source={(Images.splashScreen)} style={{
                        width:220,
                        height:220
                    }}  />
                </View>
                <Text style={{
                    fontSize:18,
                    paddingTop:20,
                    color:"#444",
                    fontWeight: "600"
                }} >ຍິນດີຕອນຮັບທຸກໆທ່ານທີໜ້າຮັກ</Text>
                <Text style={{
                    fontSize:14,
                    color:"#777"
                }} >ພວກເຮົາສຸມໃສ່ການຮັບໃຊ້ເຂດຫ່າງໄກສອກຫຼີກຂອງ ສປປ ລາວ ທີ່ບໍ່ມີການເຂົ້າເຖິງການບໍລິການທາງດ້ານການເງິນ ແລະ ການສະໜັບສະໜູນ, ເພື່ອຊ່ວຍເສີມສ້າງຊີວິດການເປັນຢູ່ຂອງຄອບຄົວ ແລະ ທຸລະກິດໃຫ້ມີຄວາມຍືນຍົງ.</Text>
                <View style={{
                    flexDirection:'column',
                    paddingTop:20
                }} >
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
                        <TextInput onChangeText={(text)=>{setFormData((prevState)=>({
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
                        <Icon name="lock" size={26} color="#818181" />
                        <TextInput onChangeText={(text)=>{setFormData((prevState)=>({
                            ...prevState,
                            password:text}))}} style={styles.input} placeholder="ລະຫັດຜ່ານ" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    <View style={{
                        width:'100%',
                        marginBottom: 20,                        
                        top:20,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }} >
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <CheckBox onClick={() => ''}/>
                            <Text style={styles.label}>ຈົດຈຳບັນຊີຂອງຂ້ອຍ?</Text>
                        </View>
                        <Links on_press={()=> navigation.navigate("Samples")} link_text={"ລື່ມລະຫັດຜ່ານ?"}></Links>
                    </View>

                    <View style={{
                        height: 30,
                    }}></View>
                    <Buttons btn_text={"ເຂົ້າສູ່ລະບົບ"} on_press={() => navigation.navigate("HomeScreen")} />
                </View>
            </View>

            {/* social login section */}
            <View style={{
                flex:2,
                backgroundColor:'#fff',
                flexDirection:'column',
                paddingHorizontal:'3%'
            }} >
                
                <View style={{
                    flex:2,
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'flex-end',
                    backgroundColor:'#fff',
                    marginBottom:40,
                    top: 20
                }} >
                    <Text style={{
                        fontSize:17,
                        color:'#818181'
                    }} >ຂ້ອຍບໍ່ມີບັນຊີ? </Text>

                    <View>
                        <Links style={{
                            fontSize:18,
                            color:'#FFA500',
                        }} on_press={()=> navigation.navigate("Agree")} link_text={"ລົງທະບຽນ"}></Links>
                    </View>
                    
                </View>
                 
            </View>
            
        </ScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'95%',
        paddingLeft:20,
        fontWeight: '800',
        fontSize: 20,
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
    label:{
        color: '#444444',
        fontSize: 16
    }
})