import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet, StatusBar} from 'react-native'; 
import { TextInputs, SelectDropDown, UploadImage, SelectDocument, DatePicker } from './components';
import Buttons from '../../components/Button';


const Guarantor = ({navigation}) => {

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
                        ຂໍ້ມູນຜູ້ຄ້ຳປະກັນ ເພື່ອໃຫ້ງ່າຍຕໍ່ການປະເມິນເງິນກູ້ຂອງທ່ານ (ຈຳເປັນຕ້ອງປ້ອນ)
                    </Text>
                    <Text style={styles.titleH5}>
                        ປ້ອນຂໍ້ມູນຜູ້ຄ້ຳປະກັນໃຫ້ຄົບຖ້ວນ, ລະອຽດ ແລະ ຖືກຕ້ອງ.
                    </Text>
                    <Text style={styles.titleH3}>
                        ຂໍ້ມູນສ່ວນຕົວຂອງຜູ້ຄ້ຳປະກັນ
                    </Text>
                </View>
                
                
                <View style={{
                    height: 5,
                }}></View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={{width: '49%'}}><TextInputs title='ຊື່ [LAO]'/></View>
                    <View  style={{width: '50%'}}><TextInputs title='ນາມສະກຸນ [LAO]'/></View>                    
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={{width: '49%'}}><TextInputs title='ຊື່ [ENG]'/></View>
                    <View  style={{width: '50%'}}><TextInputs title='ນາມສະກຸນ [ENG]'/></View>                    
                </View>
                <Text style={{
                    marginTop: 8,
                    fontSize: 18,
                    fontWeight: '300'
                }}>
                    ວັນເດືອນປີເກີດ
                </Text>
                <DatePicker/>
                <TextInputs title='ເພດ [Gender]'/>
                <TextInputs title='ເຮືອນເລກທີ [House No]'/>
                <TextInputs title='ໜ່ວຍ [Unit]'/>
                <TextInputs title='ບ້ານຢູ່ປະຈຸບັນ [Village]'/>
                <TextInputs title='ເມືອງ [District]'/>
                <TextInputs title='ແຂວງ [Province]'/>
                <TextInputs title='ເບີໂທຕິດຕໍ່ສຸກເສິນ [Emergency Call]'/>
                <View style={{
                    height: 8,
                }}></View>
                <Text style={styles.titleH3}>
                    ຂໍ້ມູນເຮັດວຽກປະຈຸບັນ
                </Text>
                <TextInputs title='ຊື່ບໍລິສັດ [Company Name]'/>
                <TextInputs title='ທີ່ຕັ້ງບໍລິສັດ [Location Company]'/>
                <TextInputs title='ຕຳແໜ່ງ [Position]'/>
                <TextInputs title='ເງິນເດືອນ [Salary]'/>
                <View style={{
                    height: 8,
                }}></View>
                <Text style={styles.titleH3}>
                    ຂໍ້ມູນຂອງເອກະສານຕິດຂັດ
                </Text>
                <SelectDocument />
                <TextInputs title='ເລກບັດປະຈຳຕົວ [Card No]'/>
                <TextInputs title='ວັນທີ່ອອກບັດ [Start Date]'/>
                <TextInputs title='ວັນໝົດອາຍຸ [End Date]'/>
                <TextInputs title='ອອກໂດຍ [By]'/>

                <View style={{
                    height: 8,
                }}></View>
                <Text style={{
                    marginTop: 8,
                    fontSize: 18,
                    fontWeight: '300'
                }}>
                    ອັບໂຫລດຮູບ
                </Text>
                <UploadImage text={'Upload Image'}/>

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
                <Buttons btn_text="ຖັດໄປ" on_press={()=>navigation.navigate("TransferAmount")} />
            </View>
        </View>
    </SafeAreaView>
    
  )
}


export default Guarantor;

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