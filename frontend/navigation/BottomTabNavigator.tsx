import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import FeedScreen from '../screens/FeedScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import ChatScreen from "../screens/ChatScreen";
import {BottomTabParamList, ChatNavigatorParamList, FeedNavigatorParamList, TabTwoParamList} from '../types';
import ProfilePicture from "../components/ProfilePicture";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import InformationBoardScreen from "../screens/InformationBoardScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Post"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Post"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="post" color={color} size={30}/>,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
        <BottomTab.Screen
            name="Chat"
            component={ChatNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="chatbox" color={color} />,
            }}
        />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<FeedNavigatorParamList>();

function HomeNavigator() {
    const navigation = useNavigation();

    const onProfilePress = () => {
        navigation.navigate('ProfileSettings');
    }

  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
            headerRightContainerStyle: {
                marginRight: 15,
            },

            headerLeftContainerStyle: {
                marginLeft: 15,
            },

            headerTitle: () => (
               <MaterialCommunityIcons name={'brain'} size={30} color={Colors.light.tint}/>
            ),

            headerRight: () => (
                <View style={styles.container}>
                    <Text style={styles.containerHeader}>Feel Good</Text>
                </View>
            ),

            headerLeft: () => (
                <TouchableOpacity onPress={onProfilePress}>
                    <ProfilePicture size={40} image={'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'}/>
                </TouchableOpacity>
            )

        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const ChatStack = createStackNavigator<ChatNavigatorParamList>()

function ChatNavigator() {
    const navigation = useNavigation();

    const onProfilePress = () => {
        navigation.navigate('ProfileSettings');
    }

    return (
        <ChatStack.Navigator>
            <ChatStack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{
                    headerRightContainerStyle: {
                        marginRight: 15,
                    },

                    headerLeftContainerStyle: {
                        marginLeft: 15,
                    },

                    headerTitle: () => (
                        <MaterialCommunityIcons name={'brain'} size={30} color={Colors.light.tint}/>
                    ),

                    headerRight: () => (
                        <View style={styles.container}>
                            <Text style={styles.containerHeader}>Feel Good</Text>
                        </View>
                    ),

                    headerLeft: () => (
                        <TouchableOpacity onPress={onProfilePress}>
                            <ProfilePicture size={40} image={'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'}/>
                        </TouchableOpacity>
                    )

                }}
            />
        </ChatStack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    containerHeader: {
        color: Colors.light.tint,
        fontWeight: 'bold',
    },
});