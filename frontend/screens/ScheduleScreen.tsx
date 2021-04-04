import * as React from 'react';
import {View} from "../components/Themed";
import {StyleSheet, Text} from "react-native";


export default function ScheduleScreen() {
    return (
        <View style={styles.container}>
            <Text>Copy paste ScheduleScreen's code here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});