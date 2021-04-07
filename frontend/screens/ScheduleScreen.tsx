import * as React from 'react';
import {Text, View} from "../components/Themed";
import {Modal, StyleSheet,  TouchableHighlight} from "react-native";
//import moment from "moment";
//import {useState} from "react";
//import DateTimePicker from "react-native-modal-datetime-picker";
import CustomDatePicker from "./CustomDatePicker";

export default function ScheduleScreen() {
    return (
        <View style={{flex:1,marginTop:50}}>
            <View style={{marginHorizontal:20}}>
            <Text>Birthday</Text>
            <CustomDatePicker
                textStyle={{
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    borderColor:'gray',
                    borderWidth:1,

            }}>

            </CustomDatePicker>
            </View>
        </View>
    );


};

