import React from "react";
import { View, FlatList } from "react-native";
import posts from '../../data/Posts';
import Post from "../Post";

const Feed = () => (
    <View style={{ width: '100%'}}>
        <FlatList
            data={posts}
            renderItem={({item}) => <Post post={item} />}
            keyExtractor={(item) => item.id}
        />
    </View>
)

export default Feed;