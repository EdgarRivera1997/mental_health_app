import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
//import posts from '../../data/Posts';
import Post from "../Post";
import { getPosts } from '../../constants/api';
import {PostType} from "../../types";

const Feed = () => {

    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        try{
            const postData = await getPosts();
            setPosts(postData);
            console.log(postData);
        } catch (e) {
            console.log(e);
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts().then();
    }, [])

    return (
        <View style={{width: '100%'}}>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post post={item}/>}
                keyExtractor={(item) => item._id}
                refreshing={loading}
                onRefresh={fetchPosts}
            />
        </View>
    );
};

export default Feed;