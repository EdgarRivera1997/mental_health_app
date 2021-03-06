import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { GroupChatRoom } from "../../types";
import styles from "./styles";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import ProfilePicture from "../ProfilePicture";

export type GroupChatListItemProps = {
    groupChat: GroupChatRoom;
}

const GroupChatListItem = (props: GroupChatListItemProps) => {
    const { groupChat } = props;

    const navigation = useNavigation();

    const onClick = () => {
        //navigate to Group Chat's room
        navigation.navigate('GroupChatRoom', {
            id: groupChat.id,
            name: groupChat.name,
            users: groupChat.users,
            image: groupChat.image
        });
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <ProfilePicture image={groupChat.image} size={60} />
                    <View style={styles.midContainer}>
                        <Text style={styles.groupName}>{groupChat.name}</Text>
                        <Text numberOfLines={1} style={styles.description}>{groupChat.description}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default GroupChatListItem;