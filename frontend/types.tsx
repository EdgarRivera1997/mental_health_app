export type RootStackParamList = {
  Root: undefined;
  NewPost: undefined;
  NewComment: undefined;
  CommentList: undefined;
  ChatRoom: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Post: undefined;
  TabTwo: undefined;
  Chat: undefined;
};

export type FeedNavigatorParamList = {
  FeedScreen: undefined;
};

export type ChatNavigatorParamList = {
  ChatScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type UserType = {
  id: string,
  name: string,
  username: string,
  image?: string,
}

export type PostType = {
  id: string,
  createdAt: string,
  user: UserType,
  content: string,
  image?: string,
  numberOfComments?: number,
  numberOfReposts?: number,
  numberOfLikes?: number,
}

export type CommentType = {
  id: string,
  createdAt: string,
  user: UserType,
  content: string,
}

export type Message = {
  id: string,
  content: string,
  createdAt: string,
  user: UserType,
}

export type ChatRoom = {
  id: string,
  users: UserType[],
  lastMessage: Message,

}