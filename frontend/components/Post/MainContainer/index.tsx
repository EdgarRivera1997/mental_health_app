import React from 'react';
import {Image, Text, View} from "react-native";
import {PostType} from "../../../types";
import styles from "./styles";
import { Ionicons} from "@expo/vector-icons";
import moment from 'moment'; //download with 'npm install moment --save'

import Footer from './Footer';

export type MainContainerProps = {
    post: PostType
}

const MainContainer = ({post}: MainContainerProps) => (
    <View style={styles.container}>
        <View style={styles.PostHeaderContainer}>
            <View style={styles.PostHeaderNames}>
                <Text style={styles.username}>@{post.user.username}</Text>
                <Text style={styles.createdAt}>{moment(post.createdAt).fromNow()}</Text>
            </View>
            <Ionicons name={'chevron-down'} size={16} color={'grey'}/>
        </View>
        <View>
            <Text style={styles.content}> {post.content}</Text>
            {!!post.image && <Image style={styles.image} source={{uri: post.image}}/> }
        </View>
        <Footer post={post}/>
    </View>
)

export default MainContainer;