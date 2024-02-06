import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StatusBar } from 'react-native';
import { Table, Row, Rows } from "react-native-table-component";

const PlaymentLoan = () => {
  const tableHead = ["ລ/ດ", "ວັນທີ", "ຄ່າງວດຊຳລະ", "ຄ່າປັບໄໝ"];
  const tableData = [
    ["01", "07/02/2022", "0", "0"],
    ["02", "07/03/2022", "0", "0"],
    ["03", "07/04/2022", "0", "0"],
    ["04", "07/05/2022", "0", "0"],
    ["05", "07/06/2022", "0", "0"],
    ["06", "07/07/2022", "0", "0"],
    ["07", "07/08/2022", "0", "0"],
    ["08", "07/09/2022", "0", "0"],
    ["09", "07/10/2022", "0", "0"],
    ["10", "07/11/2022", "0", "0"],
    ["11", "07/12/2022", "0", "0"],
    ["12", "07/01/2023", "0", "0"],
    ["13", "07/02/2023", "0", "0"],
    ["14", "07/03/2023", "0", "0"],
    ["15", "07/04/2023", "0", "0"],
    ["16", "07/05/2023", "0", "0"],
    ["17", "07/06/2023", "0", "0"],
    ["18", "07/07/2023", "0", "0"],
    ["19", "07/08/2023", "0", "0"],
     
  ];
  const tablePaid = [
    ["20", "07/09/2023", "1,418,333.34", "0"],
    ["21", "07/10/2023", "1,418,333.34", "0"],
    ["22", "07/11/2023", "1,418,333.34", "0"],
    ["23", "07/12/2023", "1,418,333.34", "0"],
    ["24", "07/01/2024", "1,418,333.34", "0"],
    ["25", "07/02/2024", "1,418,333.34", "0"],
    ["26", "07/03/2024", "1,418,333.34", "0"],
    ["27", "07/04/2024", "1,418,333.34", "0"],
    ["28", "07/05/2024", "1,418,333.34", "0"],
    ["29", "07/06/2024", "1,418,333.34", "0"],
    ["30", "07/07/2024", "1,418,333.34", "0"],
    ["31", "07/08/2024", "1,418,333.34", "0"],
    ["32", "07/09/2024", "1,418,333.34", "0"],
    ["33", "07/10/2024", "1,418,333.34", "0"],
    ["34", "07/11/2024", "1,418,333.34", "0"],
    ["35", "07/12/2024", "1,418,333.34", "0"],
    ["36", "07/01/2025", "1,418,333.34", "0"],
  ];


  return (
    <SafeAreaView style={{ 
      flex: 1,
      backgroundColor:'#fff',
    }}>
      <StatusBar  
          barStyle= 'light-content'
          backgroundColor="#28A578"
      />
      <View>
        <View style={{
          height: 150,
        }}>
          <View style={{
            alignItems: 'center',
          }}
          >
            <View style={{
              alignItems: 'center',
            }}>
              <View style={{height: 10,}}/>
              <Text style={{
                fontSize: 22,
                fontWeight: '600',}}>
                  ເລກທີ່ສັນຍາເງິນກູ້:
              </Text>
              <Text style={{ 
                fontSize: 22, 
                color: '#444', 
                fontWeight: '600'
              }}>
                  0000-10-0078327883-05
              </Text>
            </View>
            <View style={{
              alignItems: 'center',
              padding: 5,
              
            }}>
              <Text style={{
                color: '#fff', 
                padding: 8, 
                fontSize: 17,
                backgroundColor:'#ff3333', 
                fontWeight: '600', 
                borderRadius: 5,
              }}>
                  ງວດທີ່: 20, ຈຳນວນເງິນ: 1,418,333.34 LAK
              </Text>
              <Text>
                  ວັນທີ່ຊຳລະ: 07/09/2023
              </Text>
            </View>
          </View>
        </View>
        <View style={{
          backgroundColor:'#fff',
          padding: 8,
        }}>
          <Table>
            <Row
              data={tableHead}
              style={{ 
                height: 50, 
              }}
              textStyle={{ 
                textAlign: "center",
                fontWeight: "bold" 
              }}
            />
            <View style={{height: 0.5,backgroundColor:'#999',}}/>
            <ScrollView style={{
              height: 500,
            }}>
              <Rows data={tableData} style={{ height: 40 }} textStyle={{ color:'#28A578', textAlign: "center" }} />
              <Rows data={tablePaid} style={{ height: 40 }} textStyle={{ textAlign: "center" }} />
            </ScrollView>
          </Table>
        </View>
        <View style={{
            padding: 15, 
          }}>
          <Text style={{
            color: '#fff', 
            padding: 8, 
            fontSize: 17,
            textAlign: 'center',
            backgroundColor:'#ff3333', 
            fontWeight: '600', 
            borderRadius: 5,
          }}>
            ລວມຍອດ: 22,693,333.33 LAK
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PlaymentLoan;