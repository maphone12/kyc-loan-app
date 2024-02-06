import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Profile } from '../../constants/Images';

const Settings = ({navigation}) => {
  const dataSettings = [
    {id: 1, nameTitle: "ຂໍ້ມູນສ່ວນຕົວ", scriptDetail: "ລາຍລະອຽດຂໍ້ມູນບຸກຄົນ..", iconName: "user-alt"},
    {id: 2, nameTitle: "ປ່ຽນລະຫັດຜ່ານ", scriptDetail: "ປ່ຽນລະຫັດຜ່ານທຸກໆ..", iconName: "key"},
    {id: 3, nameTitle: "ລາຍນິ້ວມື", scriptDetail: "ຕັ້ງຄ່າລາຍນີ້ວມື..", iconName: "fingerprint"},
    {id: 4, nameTitle: "ປ່ຽນລະຫັດປິນ", scriptDetail: "ປ່ຽນລະຫັດປິນທຸກໆ..", iconName: "ellipsis-h"},
    {id: 5, nameTitle: "ເປິດການແຈ້ງເຕືອນ", scriptDetail: "ແານແຈ້ງເຕື່ອນ..", iconName: "bell"},
    {id: 6, nameTitle: "ຕັ້ງຕ່າອຸປະກ່ອນ", scriptDetail: "ຄວບຄຸ່ມອຸປະກ່ອນ..", iconName: "mobile"},
    {id: 7, nameTitle: "ປ່ຽນພາສາ", scriptDetail: "ເລືອກພາສາທີ່..", iconName: "language"},
    {id: 8, nameTitle: "ອື່ນໆ", scriptDetail: "ທົ່ວໄປ..", iconName: "quote-left"}
  ];

  const [listSettings, setListSettings] = React.useState(dataSettings);
  return (
    <SafeAreaView style={{ 
        flex: 1,
        backgroundColor: '#fff'
    }}>
      <StatusBar  
          barStyle= 'light-content'
          backgroundColor="#28A578"
      />
      <View style={{
          backgroundColor: '#28A578',
          justifyContent: 'center',
          flex: 1,
          height: 80,
          flexDirection: 'row',
          alignItems: 'center'
      }}>
        <Text style={styles.title}>
            ຕັ້ງຄ່າທົ່ວໄປ
        </Text>
      </View>
        <ScrollView style={{height: 600}}>
          <View style={{padding: 10}}>
            {/* <Text>ຕັ້ງຄ່າອຸປະກ່ອນຂອງທ່ານໃຫ້ປອດໄພ</Text> */}
            <View style={{
              padding: 10,flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Image source={Profile} style={{
                width: 100,
                height: 100,
                borderRadius: 40,
              }}/>
              <View style={{
                width: 260,
              }}>
                <Text style={styles.titleH3}>ມາພອນ ເພັດລາວັນ</Text>
                <Text>maphonegtth@gmail.com</Text>
                <Text>20 98 814 666</Text>
              </View>
            </View>
            <View height={15}/>
            <View>
              <FlatList 
                data= {listSettings}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                  <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 10,
                    borderColor: '#777',
                    marginBottom: 6,
                    borderRadius: 10,
                    borderBottomWidth: 0.5
                  }}
                  >
                    <View style={{
                        padding: 5,
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        backgroundColor: '#e3e3e3',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                      <Icon name={`${item.iconName}`} size={30} color="#777"/>
                    </View>
                    
                    <View style={{
                      width: '70%',

                    }}> 
                      <Text style={styles.titleH4}>{item.nameTitle}</Text>
                      <Text>{item.scriptDetail}</Text>
                    </View>
                    <Icon name="chevron-right" size={18} color="#777" style={{padding: 8}} />
                  </TouchableOpacity>
                }
              />
              
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Settings;


const styles=StyleSheet.create({
  title: {
      fontSize: 22,
      fontWeight: '600',
      fontFamily: 'NotoSansLao-Bold',
      color: '#fff'
  },
  titleH3: {
      fontSize: 24,
      color: '#666',
      fontWeight: '600',
      fontFamily: 'NotoSansLao-Bold'
  },
  titleH4: {
      fontSize: 16,
      color: '#666',
      fontWeight: '600',
      fontFamily: 'NotoSansLao-Bold'
  },
  titleH5: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'NotoSansLao-Regular'
  },
})