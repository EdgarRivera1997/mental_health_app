import * as React from 'react';
import {Text, View} from "../components/Themed";
import {Modal, StyleSheet,  TouchableHighlight} from "react-native";
//import moment from "moment";
//import {useState} from "react";
//import DateTimePicker from "react-native-modal-datetime-picker";
import CustomDatePicker from "./CustomDatePicker";
import CustomTimePicker from "./CustomTimePicker";

export default function ScheduleScreen() {
    return (
        <View style={{flex:1,marginTop:50}}>
            <View style={{marginHorizontal:20}}>
            <Text>Choose a Date</Text>
            <CustomDatePicker
                textStyle={{
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    borderColor: 'rgb(0, 128, 128)',
                    borderWidth:1,

            }}
                defaultDate= "2021-01-01"
                onDateChange={(value)=>console.log('Date changed: '+value)}
            >
            </CustomDatePicker>
            </View>
            <View style={{marginHorizontal:20}}>
                <Text>Choose a Time</Text>
                <CustomTimePicker
                    textStyle={{
                        paddingVertical: 15,
                        paddingHorizontal: 10,
                        borderColor: 'rgb(0, 128, 128)',
                        borderWidth:1,

                    }}
                    defaultTime= "2021-01-01"
                    onDateChange={(value)=>console.log('Time changed: '+value)}
                >
                </CustomTimePicker>
            </View>

        </View>
    );


};

