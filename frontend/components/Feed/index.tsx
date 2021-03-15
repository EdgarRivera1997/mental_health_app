import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import posts from '../../data/Posts';
import Post from "../Post";
// import { getPosts } from '../../constants/api';
// import {PostType} from "../../types";

const Feed = () => {

    // const [posts, setPosts] = useState<PostType[]>([]);
    //
    // useEffect(() => {
    //     const fetchPosts = async () => (await getPosts());
    //     fetchPosts()
    //         .then((data) => {
    //             console.log(data)
    //             setPosts(data)
    //         })
    // })

    return (
        <View style={{width: '100%'}}>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post post={item}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Feed;