import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Splash, 
  Onboarding, 
  Login, 
  Registered, 
  Agree, 
  Success, 
  Otp, 
  HomeScreen, 
  Tabs,
  UserType,
  ApplicatioForm,
  Guarantor,
  TransferAmount,
  RegistSuccess
} from './app/screens';

import { 
  Settings, 
  TopNews, 
  Notifications, 
  Loancontract,
  LocationMaps,
  Paidlist,
  Promotions,
  Playmentlist,
  Loanitems,
  Calculators,
  LoanDetail,
  LoanDetailPaid,
  PlaymentLoan,
  PlaymentNormal,
  PaidlistNormal,
  PlaymentChannels,
  PaidListDetail
} from './app/src';


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();

function App (){
  const [loaded] = useFonts({
      "NotoSansLao-Bold" : require('./app/assets/fonts/NotoSansLao-Bold.ttf'),
      "NotoSansLao-Medium" : require('./app/assets/fonts/NotoSansLao-Medium.ttf'),
      "NotoSansLao-Regular" : require('./app/assets/fonts/NotoSansLao-Regular.ttf'),
  })

  if(!loaded){
    return null;
  }
  return(
    <Stack.Navigator >              
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      
      <Stack.Screen name="Agree" component={Agree} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ຂໍ້ກຳນົດ ແລະ ເງື່ອນໄຂ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }}/>

      <Stack.Screen name="Registered" component={Registered} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ລົງທະບຽນ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="Success" component={Success} options={{headerShown:false}} />
      <Stack.Screen name="Otp" component={Otp} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ລະຫັດ OTP",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="HomeScreen" component={Tabs} options={{headerShown:false}} />
      <Stack.Screen name="UserType" component={UserType} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ສະໝັກຂໍກູ້ຢືມເງິນ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />
      <Stack.Screen name="ApplicationForm" component={ApplicatioForm} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ຜູ້ສະໝັກຂໍກູ້ຢືມເງິນ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="Guarantor" component={Guarantor} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ຜູ້ຄ້ຳປະກັນ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="TransferAmount" component={TransferAmount} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ວົງເງິນຂໍກູ້ຢືມ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="RegistSuccess" component={RegistSuccess} options={{headerShown:false}} />
      
      <Stack.Screen name="Settings" component={Settings} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ຕັ້ງຄ່າທົວໄປ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="Notifications" component={Notifications} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ລາຍການແຈ້ງເຕືອນ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="TopNews" component={TopNews} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ຂ່າວສານ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="Loanitems" component={Loanitems} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ລາຍການເງິນກູ້",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="LoanDetail" component={LoanDetail} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ລາຍລະອຽດເງິນກູ້",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="LoanDetailPaid" component={LoanDetailPaid} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ຂໍ້ມູນເງິນກູ້",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="Playmentlist" component={Playmentlist} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ບັນຊີເຄືອນໄຫວເງິນກູ້",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="PlaymentLoan" component={PlaymentLoan} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ລາຍການຊຳລະເງິນກູ້",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="PlaymentNormal" component={PlaymentNormal} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ລາຍການຊຳລະເງິນກູ້",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />
      
      <Stack.Screen name="Paidlist" component={Paidlist} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ຂໍ້ມູນການເຄືອນໄຫວ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />
      
      <Stack.Screen name="PaidlistNormal" component={PaidlistNormal} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ລາຍການຊຳລະເງິນກູ້",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="PaidListDetail" component={PaidListDetail} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ລາຍລະອຽດຂໍ້ມູນ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="PlaymentChannels" component={PlaymentChannels} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ຊ່ອງທາງການຊຳລະ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />


      <Stack.Screen name="Calculators" component={Calculators} options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: '#28A578',
        },
        headerTitle: "ຄິດໄລ່ດອກເບ້ຍ",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />

    </Stack.Navigator>
    
  )
}

export default () => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>    
  )
}