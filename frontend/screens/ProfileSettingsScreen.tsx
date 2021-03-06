
import * as React from "react";
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import ProfilePicture from "../components/ProfilePicture";
import {AntDesign} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {useState} from "react";

export default function ProfileSettingsScreen() {
    const navigation = useNavigation();
    let [username, setUsername] = useState('JoseRivera'); //Dummy data

    const onCloseButton = () => {
        navigation.navigate('Root');
    }

    const onLogoutButton = () => {
        console.warn('Logout is pressed');
        //send to logout screen
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <AntDesign name={'close'} size={30} color={Colors.light.tint} onPress={onCloseButton}/>
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={styles.midContainer}>
                <ProfilePicture size={100} image={'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'}/>
                <Text style={styles.text}>First Name:
                    <Text style={styles.data}> Jose</Text>
                </Text>
                <Text style={styles.text}>Last Name:
                    <Text style={styles.data}> Rivera</Text>
                </Text>
                <View style={styles.usernameContainer}>
                    <Text style={styles.text}>*Username: </Text>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        placeholder={'username'}
                    />
                </View>
                <Text style={styles.text}>Email:
                    <Text style={styles.data}> joserivera@yahoo.com</Text>
                </Text>
                <Text style={styles.text}>Address:
                    <Text style={styles.data}> San Juan, Puerto Rico</Text>
                </Text>
                <TouchableOpacity onPress={onLogoutButton}>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>*Changeable information</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-start',
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        borderBottomWidth: 0.5,
        borderColor: 'lightgrey',
        padding: 10,
    },
    headerText: {
        color: Colors.light.tint,
        fontWeight: "bold",
    },
    midContainer: {
        alignItems: "center",
        padding: 20,
    },
    text: {
        color: Colors.light.tint,
    },
    usernameContainer: {
        flexDirection: "row",
    },
    data: {
        color: 'black',
    },
});