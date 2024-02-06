import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Profile } from '../../constants/Images';
import { COLORSS, SIZES, FONTS } from '../../constants';


const PaidlistNormal = ({navigation}) => {
  const dataStateMent = [
    {
      id: "1",
      typeName: "CWD",
      Titles: "ຊຳລະຄ່າງວດເງິນກູ້ດ້ວຍເງິນສົດ",
      Amount: "1,418,333.34 LAK",
      Discription: "ຊຳລະເງິນກູ້",
      RegDate: "07/09/2023 09:30:54 AM",
      textColor: "#28A578",
      bg_text: "#28A578",
      accName: "ມາພອນ ເພັດລາວັນ"
    },
    {
      id: "2",
      typeName: "BCEL",
      Titles: "ຊຳລະຄ່າງວດເງິນກູ້ຜ່ານທະນາຄານ",
      Amount: "1,418,333.34 LAK",
      Discription: "ຊຳລະເງິນກູ້",
      RegDate: "07/08/2023  09:30:54 AM",
      textColor: "#ff3333",
      bg_text: "#ff3333",
      accName: "ມາພອນ ເພັດລາວັນ"
    },
    {
      id: "3",
      typeName: "CWD",
      Titles: "ຊຳລະຄ່າງວດເງິນກູ້ດ້ວຍເງິນສົດ",
      Amount: "1,418,333.34 LAK",
      Discription: "ຊຳລະເງິນກູ້",
      RegDate: "07/07/2023  09:30:54 AM",
      textColor: "#28A578",
      bg_text: "#28A578",
      accName: "ມາພອນ ເພັດລາວັນ"
    },
    {
      id: "4",
      typeName: "BCEL",
      Titles: "ຊຳລະຄ່າງວດເງິນກູ້ຜ່ານທະນາຄານ",
      Amount: "1,418,333.34 LAK",
      Discription: "ຊຳລະເງິນກູ້",
      RegDate: "07/06/2023  09:30:54 AM",
      textColor: "#ff3333",
      bg_text: "#ff3333",
      accName: "ມາພອນ ເພັດລາວັນ"
    },
    {
      id: "5",
      typeName: "BCEL",
      Titles: "ຊຳລະຄ່າງວດເງິນກູ້ຜ່ານທະນາຄານ",
      Amount: "1,418,333.34 LAK",
      Discription: "ຊຳລະເງິນກູ້",
      RegDate: "07/05/2023  09:30:54 AM",
      textColor: "#ff3333",
      bg_text: "#ff3333",
      accName: "ມາພອນ ເພັດລາວັນ"
    },
    {
      id: "6",
      typeName: "CWD",
      Titles: "ຊຳລະຄ່າງວດເງິນກູ້ດ້ວຍເງິນສົດ",
      Amount: "1,418,333.34 LAK",
      Discription: "ຊຳລະເງິນກູ້",
      RegDate: "07/04/2023  09:30:54 AM",
      textColor: "#28A578",
      bg_text: "#28A578",
      accName: "ມາພອນ ເພັດລາວັນ"
    },
    {
      id: "7",
      typeName: "BCEL",
      Titles: "ຊຳລະຄ່າງວດເງິນກູ້ຜ່ານທະນາຄານ",
      Amount: "1,418,333.34 LAK",
      Discription: "ຊຳລະເງິນກູ້",
      RegDate: "07/03/2023  09:30:54 AM",
      textColor: "#ff3333",
      bg_text: "#ff3333",
      accName: "ມາພອນ ເພັດລາວັນ"
    },
    {
      id: "8",
      typeName: "BCEL",
      Titles: "ຊຳລະຄ່າງວດເງິນກູ້ຜ່ານທະນາຄານ",
      Amount: "1,418,333.34 LAK",
      Discription: "ຊຳລະເງິນກູ້",
      RegDate: "07/02/2023  09:30:54 AM",
      textColor: "#ff3333",
      bg_text: "#ff3333",
      accName: "ມາພອນ ເພັດລາວັນ"
    },
    {
      id: "9",
      typeName: "BCEL",
      Titles: "ຊຳລະຄ່າງວດເງິນກູ້ຜ່ານທະນາຄານ",
      Amount: "1,418,333.34 LAK",
      Discription: "ຊຳລະເງິນກູ້",
      RegDate: "07/01/2023  09:30:54 AM",
      textColor: "#ff3333",
      bg_text: "#ff3333",
      accName: "ມາພອນ ເພັດລາວັນ"
    },
  ];

  const [stateMent, setStateMent] = React.useState(dataStateMent);
  return (
    <SafeAreaView style={{ 
      flex: 1,
      backgroundColor: "#fff"
    }}> 
      <StatusBar  
          barStyle= 'light-content'
          backgroundColor="#28A578"
      />
      <View style={{
          padding: 10,
          borderBottomWidth: 0.3,
          borderColor: '#999',
        }}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#777'
        }}>
          ລາຍການເຄືອນໄຫວບັນຊີເງິນກູ້
        </Text>
        <Text style={{
          fontSize: 16,
          fontWeight: '300',
          color: '#777'
        }}>
          ຈຳນວນ: <Text style={{color: '#28A578', fontWeight: 'bold'}}>22,693,333.33 LAK</Text>
        </Text>
      </View>
      
      <View style={{height: 700,}}>
        <ScrollView>
          <FlatList 
            data={stateMent}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
              <TouchableOpacity style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 4,
                // borderWidth: 0.5,
                borderColor: '#777',
                marginBottom: 6,
                borderRadius: 10,
                borderBottomWidth: 0.5
              }}
              onPress={() => navigation.navigate("PaidListDetail", {itemData: item})}
              >
                <View style={{
                    width: 60,
                    height: 60,
                    backgroundColor: `${item.bg_text}`,
                    fontWeight: 'bold',
                    borderRadius: 40,
                    justifyContent: 'center',
                  }}>
                  <Text style={{
                    fontSize: 15,
                    padding: 5,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#fff'
                  }}>{item.typeName}</Text>
                </View>
                
                <View style={{
                  width: '69%',
                }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#666'}}>{item.Titles}</Text>
                  <Text style={{}}>ຈຳນວນ: <Text style={{fontWeight: 'bold',color: `${item.textColor}`}}>{item.Amount}</Text></Text>
                  <Text style={{}}>ລາຍລະອຽດ: <Text style={{fontWeight: 'bold',color: `${item.textColor}`}}>{item.Discription}</Text></Text>
                  <Text style={{}}>ວັນທີ່: <Text style={{fontWeight: 'bold',color: `${item.textColor}`}}>{item.RegDate}</Text></Text>
                </View>
                <Icon name="arrow-right" size={18} color="#777" style={{padding: 8}} />
              </TouchableOpacity>
            }
            style={{
              padding: 8,
            }}
          />
        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
}

export default PaidlistNormal;


const styles = StyleSheet.create({

});