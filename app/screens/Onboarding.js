import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Buttons from '../components/Button';
import Images from '../constants/Images';


const Onboarding = ({navigation}) => {
    
    return (
        <View style={{
            flex:1,
            backgroundColor: "#fff",
        }} >
            <StatusBar  
                barStyle= 'dark-content'
                backgroundColor="white"
            />
            {/* handshake image */}
            <View style={{
                flex: 1,
                position: 'absolute',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                right: 25,
                top: 15
            }}>
                <TouchableOpacity onPress={() => setVisible(true)} style={{justifyContent: 'center', alignItems: 'center',width:50, height:50}}>
                    <Image source={Images.defaultLangauge} resizeMode='center' style={{
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        backgroundColor: '#28A578',
                        borderRadius: 50,
                    }}></Image>
                </TouchableOpacity>
            </View>
            <View style={{
                flex:3,
                padding: 25,
                flexDirection:"row",                
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                top: 10,
            }} >
                <Image source={Images.splashScreen}
                style={{
                    flex:1,
                    width:'80%',
                    height:'80%',
                }}  />
            </View>

            {/* button and text */}
            <View style={{
                flex:2,
            }} >
                {/* Text part */}
                <View style={{
                    flex:1,
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    alignItems:'center',
                }} >
                    <Text style={{
                        color:"#000",
                        fontSize:36,
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }} >ບໍລິການດ້ານເງິນກູ້!</Text>
                    <Text style={{
                        maxWidth:'80%', 
                        color:"#999",
                        fontSize:18, 
                        textAlign:'center',
                        paddingTop:10,
                    }} >ສະຖາບັນການເງິນຈຸລະພາກທີຮັບເງິນຝາກ Company Name</Text>
                </View>   

                {/* Button */}
                <View style={{
                    flex:1,
                    padding: 20,
                    flexDirection:'column',
                    justifyContent:'flex-end',
                    alignItems:'center',
                }} >
                    {/* <TouchableOpacity style={{justifyContent:'center',width:'90%',backgroundColor:Colors.primary,height:50,marginBottom:30,borderRadius:10}} 
                    onPress={()=>navigation.navigate("Login")}
                    >
                        <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',fontFamily:'OpenSans-SemiBold',color:Colors.white}} >Get Started</Text>


                    </TouchableOpacity> */}
                    <Buttons btn_text={"ເລີ່ມກັນເລີຍ"} on_press={()=>navigation.navigate("Login")} />
                    
                </View>
            </View>            
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    }
})