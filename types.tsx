export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album = {
  name: string;
  by: string;
  numberOfLikes: string;
  id: string;
  imageUri: string;
  artistsHeadline: string;
  albums: string;
};

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artistsHeadline: string;
};
