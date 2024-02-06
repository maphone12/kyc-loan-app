import React, {useState} from 'react';
import { Alert, Pressable, Animated, ScrollView, View, Text, Image, SafeAreaView, StatusBar, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORSS, SIZES, FONTS } from '../constants';
import {LoanLarge, 
    Notification, 
    PowerOFF, 
    promotion, 
    MapsLarge, Calculator, logout, ListPlay, ApplicatioForm, LandBank, Close, loan} from '../constants/Icons';
import {Profile} from '../constants/Images';



const HomeScreen =({navigation}) =>{
    const featuresData = [
        {
            id: 1,
            icon: LoanLarge,
            color: COLORSS.red,
            backgroundColor: COLORSS.lightRed,
            description: "ລາຍການເງິນກູ້",
            value: "Loanitems"
        },
        {
            id: 2,
            icon: ListPlay,
            color: COLORSS.yellow,
            backgroundColor: COLORSS.lightyellow,
            description: "ລາຍການຊຳລະ",
            value: "Playmentlist"
        },
        {
            id: 3,
            icon: promotion,
            color: COLORSS.primary,
            backgroundColor: COLORSS.lightGreen,
            description: "ໂປຣໂມຊັນ",
            value: "Promotion"
        },
        {
            id: 4,
            icon: LandBank,
            color: COLORSS.red,
            backgroundColor: COLORSS.lightRed,
            description: "ຊ່ອງທາງການຊໍາລະ",
            value: "PlaymentChannels"
        },
        {
            id: 5,
            icon: Calculator,
            color: COLORSS.yellow,
            backgroundColor: COLORSS.lightyellow,
            description: "ຄິດໄລ່ຄ່າງວດ",
            value: "Calculators"
        },
        {
            id: 6,
            icon: ApplicatioForm,
            color: COLORSS.primary,
            backgroundColor: COLORSS.lightGreen,
            description: "ສັນຍາເງິນກູ້",
            value: "Loancontract"
        },
        {
            id: 7,
            icon: MapsLarge,
            color: COLORSS.red,
            backgroundColor: COLORSS.lightRed,
            description: "ໜ່ວຍບໍລິການ",
            value: "LocationMaps"
        },
        
    ]

    
    const reanderHeader = () =>{
        const [modalVisible, setModalVisible] = useState(false);
        function renderModal(){
            return(
                <Modal visible={modalVisible} animationType="slide" transparent={true}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            margin: 20,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            width: '95%',
                            height: '80%',
                            alignItems: 'center',
                            shadowColor: '#000',                            
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                        }}>
                            <View style={{
                                flex: 0.13,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 19,
                                }}>ລາຍການແຈ້ງເຕືອນ</Text>

                                
                                <TouchableOpacity style={{
                                    width: 40,
                                    height: 40,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    backgroundColor: '#f3f3f3',
                                    position: 'absolute',
                                    right: -100
                                }}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Image source={Close} style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: "#5f5f5f"
                                    }}/>
                                </TouchableOpacity>
                                
                            </View>
                            <View >
                                <TouchableOpacity style={{
                                    height: 80,
                                    width: '95%',
                                    backgroundColor: '#f1f1f1',
                                    flexDirection:'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    padding: 10,
                                }}
                                onPress={() => navigation.navigate("Paidlist")}
                                >
                                    <View style={{
                                        width: '100%'
                                    }}>
                                        <Text style={{
                                            fontSize: 18,
                                            fontWeight: '600',
                                            marginLeft: 6,
                                            color: '#666',
                                        }}>ເລກທີສັນຍາ: 0000-10-0078327883-05</Text>
                                        <View style={{
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                            padding: 6,
                                            borderRadius: 10,
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{
                                                padding: 5,
                                                backgroundColor: '#ff3333',
                                                color: '#fff',
                                                borderRadius: 6,
                                                fontWeight: '600',
                                                fontSize: 12,
                                            }}>ຈຳນວນເງິນ: 1,418,333.34 LAK</Text>
                                            <Text style={{
                                                padding: 5,
                                                borderRadius: 10,
                                                fontSize: 11,
                                                alignItems: 'flex-end',
                                                justifyContent: 'flex-end',
                                                lineHeight: 22,
                                            }}>16/5/2023 12:52:54 AM</Text>
                                        </View>
                                        
                                    </View>
                                    
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    height: 80,
                                    width: '95%',
                                    backgroundColor: '#f1f1f1',
                                    flexDirection:'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    padding: 10,
                                    marginTop: 5,
                                }}
                                onPress={() => navigation.navigate("PaidlistNoemal")}
                                >
                                    <View style={{
                                        width: '100%'
                                    }}>
                                        <Text style={{
                                            fontSize: 18,
                                            fontWeight: '600',
                                            marginLeft: 6,
                                            color: '#666',
                                        }}>ເລກທີສັນຍາ: 0000-10-0078327653-05</Text>
                                        <View style={{
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                            padding: 6,
                                            borderRadius: 10,
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{
                                                padding: 5,
                                                backgroundColor: '#28A578',
                                                color: '#fff',
                                                borderRadius: 6,
                                                fontWeight: '600',
                                                fontSize: 12,
                                            }}>ຈຳນວນເງິນ: 0.00 LAK</Text>
                                            <Text style={{
                                                padding: 5,
                                                borderRadius: 10,
                                                fontSize: 11,
                                                alignItems: 'flex-end',
                                                justifyContent: 'flex-end',
                                                lineHeight: 22,
                                            }}>17/5/2023 12:52:54 AM</Text>
                                        </View>
                                        
                                    </View>
                                    
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </View>
                </Modal>
            )
        }
        return(
            <View style={{backgroundColor: "#000", height: 80,}}>
                <StatusBar barStyle='light-content' backgroundColor='#28A578' />

                <View style={{
                    flexDirection:'column',
                    paddingHorizontal:'5%',
                    backgroundColor:'#28A578',
                    paddingTop: 25,
                    paddingBottom: 25,
                }} >

                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'flex-start'
                    }} >
                        {/* Welcome message and name */}
                        <View style={{flexDirection:'column'}} >
                            <Text style={{fontSize:12,color:'#fff'}} >ຍິນດີຕອນຮັບ</Text>
                            <Text style={{color:'#fff',fontSize:18, fontWeight: '600',}} >ມາພອນ ເພັດລາວັນ</Text>
                        </View>

                        {/* Bell icon and profile pic */}
                        <View style={{flexDirection:'row',alignItems:'center'}} >

                            <TouchableOpacity onPress={() => setModalVisible(true)}
                            >
                                <Icon name='bell' size={30} color="#fff" />
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: -5,
                                        right: -5,
                                        height: 10,
                                        width: 10,
                                        backgroundColor: "red",
                                        borderRadius: 5
                                    }}
                                >
                                </View>
                                
                            </TouchableOpacity>
                            {renderModal()}
                            <TouchableOpacity>
                                <Image source={Profile} resizeMode='cover' style={{width:40,height:40,borderRadius:20,marginLeft:15}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>   
                            
            </View>
            
        )

    }

    const [features, setFeatures] = React.useState(featuresData)

    function renderFeatures() {

        const Header = () => (

            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Text style={{ fontSize: 20, padding: 15, fontWeight: 'bold', color: '#777'}}>ເມນູຫລັກ</Text>
                <View style={{height: 1, backgroundColor: '#d9d9d9', width: '93%', marginLeft: 15,}}/>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2, width: 110, alignItems: 'center' }}
                onPress={() => navigation.navigate(item.value)}
            >
                <View
                    style={{
                        height: 60,
                        width: 60,
                        marginBottom: 5,
                        borderRadius: 10,
                        backgroundColor: "#28A578",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            height: 50,
                            width: 50,
                            tintColor: item.color
                        }}
                    />
                </View>
                <Text style={{ textAlign: 'center', flexWrap: 'wrap', fontWeight: 'bold', color: '#777'}}>{item.description}</Text>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: SIZES.padding * 1, padding: 5 }}
            />
        )
    }

    function renderApplicationForm () {
        return(            
            <View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate("UserType")} activeOpacity={.5} style={{
                        flex: 1,
                        position: 'absolute',
                        bottom: 10,
                        right:10,
                        padding: 10,
                        backgroundColor: '#28A578',
                        borderRadius: 50
                    }}>
                        <Image
                            source={ApplicatioForm}
                            style={{ width: 35, height: 35,}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return(
        <SafeAreaView style={{ flex: 1}}>
            {reanderHeader()}
            {renderFeatures()}
            {renderApplicationForm()}        
        </SafeAreaView>
    )
    
}




export default HomeScreen;


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '800',
        lineHeight: 36,
    },
    content: {
        fontSize: 10,
    }
    
});