import React from "react";
import { View, FlatList } from "react-native";
import comments from '../../data/Comments';
import Comment from "../Comment";

const CommentList = () => (
    <View style={{ width: '100%'}}>
        <FlatList
            data={comments}
            renderItem={({item}) => <Comment comment={item} />}
            keyExtractor={(item) => item.id}
        />
    </View>
)

export default CommentList;