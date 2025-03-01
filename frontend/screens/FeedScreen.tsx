import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import Feed from "../components/Feed";
import NewPostButton from "../components/NewPostButton";

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Feed />
      <NewPostButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
