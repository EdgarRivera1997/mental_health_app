import React, {useState, useEffect, useRef} from "react";
import {View, FlatList, ScrollView, RefreshControl, Text} from "react-native";
//import Posts from '../../data/Posts';
import Post from "../Post";
import { getPosts } from '../../constants/api';
import { PostType } from "../../types";

const Feed = () => {

    // const [posts, setPosts] = useState<PostType[]>([]);
    //
    // useEffect(() => {
    //     const fetchPosts = async () => (await getPosts());
    //     fetchPosts()
    //         .then((data) => {
    //             console.log(data)
    //             setPosts(data)
    //         });
    // }, []);

    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const postsData = await getPosts();
            setPosts(postsData);

            console.log(postsData);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts().then();
    }, [])

    const flatList = useRef<FlatList>(null);
    //const [ fetchingMore, onFetchMore ] = posts;

    return (
        <View style={{width: '100%'}}>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post post={item}/>}
                keyExtractor={(item) => item._id}
                inverted
                refreshing={loading}
                onRefresh={fetchPosts}
                ref={flatList}
                initialScrollIndex={posts.length - 1}
                onScrollToIndexFailed={info => {
                    const wait = new Promise(resolve => setTimeout(resolve, 500));
                    wait.then(() => {
                        flatList.current?.scrollToIndex({ index: info.index, animated: true });
                    })
                }}
            />
        </View>

        // <ScrollView
        //     contentContainerStyle={{
        //         flexDirection: 'row',
        //         alignSelf: 'flex-end',
        //         flexGrow: 1
        //     }}
        //     refreshControl={<RefreshControl refreshing={fetchingMore} onRefresh={onFetchMore} />}
        // >
        //     <FlatList
        //         inverted
        //         //style={styles.list}
        //         data={posts}
        //         keyExtractor={(item) => item.id}
        //         renderItem={({item}) => <Post post={item}/>}
        //     />
        // </ScrollView>
    );
};

export default Feed;