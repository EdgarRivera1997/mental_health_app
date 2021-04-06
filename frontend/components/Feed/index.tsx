import React, {useState, useEffect, useRef} from "react";
import { View, FlatList } from "react-native";
//import posts from '../../data/Posts';
import Post from "../Post";
import { getPosts } from '../../constants/api';
import {PostType} from "../../types";

const Feed = () => {

    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(false);

    const flatList = useRef<FlatList>(null);


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
                ref={flatList}
                refreshing={loading}
                onRefresh={fetchPosts}
                inverted
                // initialScrollIndex={posts.length - 1}
                // onScrollToIndexFailed={info => {
                //     const wait = new Promise(resolve => setTimeout(resolve, 1000));
                //     wait.then(() => {
                //         flatList.current?.scrollToIndex({ index: info.index, animated: true });
                //     });
                // }}
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
        //         style={styles.list}
        //         data={messages}
        //         keyExtractor={this.extractItemKey}
        //         renderItem={this.renderItem}
        //     />
        // </ScrollView>
    );
};

export default Feed;