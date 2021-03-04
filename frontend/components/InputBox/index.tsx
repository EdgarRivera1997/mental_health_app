import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

const InputBox = () => {
    let [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('Microphone pressed')
    }

    const onSendPress = () => {
        console.warn(`Sending: ${message}`)

        //send the message to the backend

        setMessage('')
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress()
        } else {
            onSendPress()
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name={'laugh-beam'} size={24} color={'grey'}/>
                <TextInput
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                    placeholder={'Type a message'}
                />
                <Entypo name={'attachment'} size={24} color={'grey'} style={styles.icon}/>
                {!message && <Fontisto name={'camera'} size={24} color={'grey'} style={styles.icon}/>}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {!message
                        ? <MaterialCommunityIcons name={'microphone'} size={28} color={'white'}/>
                        : <MaterialIcons name={'send'} size={28} color={'white'} />}
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;