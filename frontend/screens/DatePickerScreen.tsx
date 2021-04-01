import React,{Component,useState} from 'react';
import {Button, StyleSheet} from "react-native";
import { Text, View } from '../components/Themed';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function DatePickerScreen(){

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return(
        <View style={styles.MainView}>
            <Text>React Native</Text>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />


        </View>

    );
}

const styles = StyleSheet.create({
    MainView:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
});


