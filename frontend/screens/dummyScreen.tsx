import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function dummyScreen(){
    const  navigation = useNavigation();

    const onButtonPress = () => {
    navigation.navigate('ProfileSettings');
    }

    return (
        <TouchableOpacity style={styles.container}>
            <Text onPress={onButtonPress} style={styles.text}>Hello World</Text>
        </TouchableOpacity>
        )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {


    }
});

