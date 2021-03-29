export type RootStackParamList = {
  Root: undefined;
  NewPost: undefined;
  NewComment: undefined;
  CommentList: undefined;
  ChatRoom: undefined;
  ChatCategory: undefined;
  GroupChatList: undefined;
  GroupChatRoom: undefined;
  ProfileSettings: undefined;
  SignUpScreen: undefined;
  NotFound: undefined;
  InformationBoardScreen: undefined;
  HelpCenterScreen:undefined;
  LoginPsychologistScreen:undefined;
  PsychologistMenuScreen:undefined;
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
  status?: string,
}

export type PostType = {
  id: string,
  createdAt: string,
  user: UserType,
  content: string,
  image?: string,
  video?: string,
  numberOfComments?: number,
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

export type GroupChatRoom = {
  id: string,
  name: string,
  users: UserType[],
  lastMessage: Message,
  description: string,
  image: string,
}

export type Category = {
  id: string,
  name: string,
  groupChats?: GroupChatRoom[],
  posts?: PostType[],
}
