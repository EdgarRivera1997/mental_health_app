import React from 'react';
import { Text, View, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./styles";
import moment from "moment";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const user = chatRoom.users[1];
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{uri: user.image}} style={styles.avatar}/>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.username}</Text>
                    <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            <Text style={styles.time}>
                {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
        </View>
    )
};

export default ChatListItem;