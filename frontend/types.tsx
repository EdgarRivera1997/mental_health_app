export type RootStackParamList = {
  Root: undefined;
  NewPost: undefined;
  NewComment: undefined;
  CommentList: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
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