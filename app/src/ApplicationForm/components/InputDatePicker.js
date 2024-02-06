import React, { useState } from 'react';
import { View, Button, Platform, Pressable, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-paper';

function DateTime() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [dateofBirth, setDateOfBirht] = useState("");

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
    setDate(currentDate);
  };

  const onChange = ({type}, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if(Platform.OS === "android") {
        toggleDatePicker();
        setDateOfBirht(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  }
  return (
    <View>
      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChange}
        />
      )}
      {showPicker && Platform.OS === "ios" && (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity>

          </TouchableOpacity>
        </View>
      )}
      {!showPicker && (
        <Pressable
          onChange={toggleDatePicker}
        >
          <TextInput
            placeholder='ວັນເດືອນປີເກິດ'
            value={dateofBirth}
            onChangeText={setDateOfBirht}
            placeholderTextColor="#11182744"
            onPressIn={toggleDatePicker}
          />
        </Pressable>
      )}
      
    </View>
  );
};

export default DateTime;
