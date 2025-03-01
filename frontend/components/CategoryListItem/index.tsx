import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import {Category, ChatRoom} from "../../types";
import styles from "./styles";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export type CategoryListItemProps = {
    category: Category;
}

const CategoryListItem = (props: CategoryListItemProps) => {
    const { category } = props;

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('GroupChatList', {
            id: category.id,
            name: category.name,
            groupChats: category.groupChats,
        });
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <Text style={styles.name}>{category.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default CategoryListItem;