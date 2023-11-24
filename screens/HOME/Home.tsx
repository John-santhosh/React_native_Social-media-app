/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Switch,
  StatusBar,
  // StatusBar,
} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import Title from '../../components/title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import UserStories from '../../components/userStory/UserStories';
import UserPost from '../../components/userPost/UserPost';
import {Routes} from '../../navigation/Routes';

// types
export type UserStoryType = {
  firstName: string;
  id: number;
  // need to look for this
  profileImage: any;
};

export type UserPostType = {
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookMarks: number;
  image: any;
  id: number;
  userProfileImage: any;
};
// component
function Home({navigation}: {navigation: any}) {
  const userStories: UserStoryType[] = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    }, // 0
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Oliver',
      id: 4,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('../../assets/images/default_profile.png'),
    }, // 4
    {
      firstName: 'Nicholas',
      id: 6,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 7,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Nova',
      id: 8,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Nielson',
      id: 9,
      profileImage: require('../../assets/images/default_profile.png'),
    }, // 8
  ];

  const userPost: UserPostType[] = [
    {
      firstName: 'John',
      lastName: 'santhosh',
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookMarks: 55,
      image: require('../../assets/images/default_profile.png'),
      userProfileImage: require('../../assets/images/default_post.png'),
      id: 1,
    },
    {
      firstName: 'John',
      lastName: 'santhosh',
      location: 'Chennai',
      likes: 1201,
      userProfileImage: require('../../assets/images/default_post.png'),
      image: require('../../assets/images/default_profile.png'),
      comments: 24,
      bookMarks: 55,
      id: 2,
    },
    {
      firstName: 'John',
      userProfileImage: require('../../assets/images/default_post.png'),
      image: require('../../assets/images/default_profile.png'),
      lastName: 'santhosh',
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookMarks: 55,
      id: 3,
    },
    {
      firstName: 'John',
      lastName: 'santhosh',
      userProfileImage: require('../../assets/images/default_post.png'),
      image: require('../../assets/images/default_profile.png'),
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookMarks: 55,
      id: 4,
    },
    {
      firstName: 'John',
      lastName: 'santhosh',
      userProfileImage: require('../../assets/images/default_post.png'),
      image: require('../../assets/images/default_profile.png'),
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookMarks: 55,
      id: 5,
    },
    {
      firstName: 'Smith',
      lastName: 'D',
      userProfileImage: require('../../assets/images/default_post.png'),
      image: require('../../assets/images/default_profile.png'),
      location: 'Pondok z, M Barat',
      likes: 1201,
      comments: 24,
      bookMarks: 55,
      id: 6,
    },
    {
      firstName: 'John',
      lastName: 'santhosh',
      userProfileImage: require('../../assets/images/default_post.png'),
      image: require('../../assets/images/default_profile.png'),
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookMarks: 55,
      id: 7,
    },
    {
      firstName: 'Smith',
      lastName: 'D',
      userProfileImage: require('../../assets/images/default_post.png'),
      image: require('../../assets/images/default_profile.png'),
      location: 'Pondok z, M Barat',
      likes: 1201,
      comments: 24,
      bookMarks: 55,
      id: 8,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderData, setUserStoriesRenderData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostPageSize = 2;
  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRenderData, setUserPostRenderData] = useState([]);
  const [isLoadingUserPost, setIsLoadingUserPost] = useState(false);

  const [isOn, setIsOn] = useState(false);

  // console.log({Platform});

  const pagination = (
    dataBase: any[],
    currentPage: number,
    pageSize: number,
  ) => {
    console.log('currentPage' + currentPage);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    // console.log({startIndex});

    if (startIndex >= dataBase.length) {
      return [];
    }
    // console.log({data: dataBase.slice(startIndex, endIndex)});

    return dataBase.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderData(getInitialData);
    setIsLoadingUserStories(false);

    // setUser
    setIsLoadingUserPost(true);
    const getInitialDataPost = pagination(userPost, 1, userPostPageSize);
    setUserPostRenderData(getInitialDataPost);
    setIsLoadingUserPost(false);
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <FlatList
        // contentContainerStyle={{backgroundColor: 'red'}}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (isLoadingUserPost) {
            return;
          }
          setIsLoadingUserPost(true);
          console.log('fetch more data', userPostCurrentPage + 1);

          const contentToAppend = pagination(
            userPost,
            userPostCurrentPage + 1,
            userPostPageSize,
          );
          if (contentToAppend.length > 0) {
            setUserPostCurrentPage(userPostCurrentPage + 1);
            setUserPostRenderData(prev => [...prev, ...contentToAppend]);
          }
          setIsLoadingUserPost(false);
        }}
        ListHeaderComponent={
          <>
            <View style={[style.pageSpacing, style.title]}>
              <Title title="Let's Explore" />
              {/* <View style={style.titleIcon}> */}
              <TouchableOpacity
                style={style.buttonStyle}
                onPress={() => navigation.navigate(Routes.Profile)}>
                <FontAwesomeIcon icon={faEnvelope} color={'#898DAE'} />
                <View style={style.messageCount}>
                  <Text style={style.messageCountText}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Switch
                value={isOn}
                onValueChange={value => setIsOn(value)}
                style={
                  Platform.OS === 'android' && {
                    transform: [{scaleX: 1.5}, {scaleY: 1.5}],
                  }
                }
              /> */}
            {/* </View> */}
            <View style={style.userStoryContainer}>
              <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (isLoadingUserStories) {
                    return;
                  }
                  setIsLoadingUserStories(true);
                  const contentToAppend = pagination(
                    userStories,
                    userStoriesCurrentPage + 1,
                    userStoriesPageSize,
                  );
                  if (contentToAppend.length > 0) {
                    setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                    setUserStoriesRenderData(prev => [
                      ...prev,
                      ...contentToAppend,
                    ]);
                  }
                  setIsLoadingUserStories(false);
                }}
                data={userStoriesRenderData}
                // keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return <UserStories key={'userStory' + item.id} {...item} />;
                }}
              />
            </View>
          </>
        }
        data={userPostRenderData}
        renderItem={({item}) => <UserPost {...item} />}
        showsVerticalScrollIndicator={false}
      />
      {/* </View> */}
    </SafeAreaView>
  );
}

export default Home;

export const style = StyleSheet.create({
  pageSpacing: {
    marginLeft: 27,
    marginRight: 17,
  },

  title: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleIcon: {},

  buttonStyle: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
    position: 'relative',
  },

  messageCount: {
    position: 'absolute',
    right: 10,
    top: 12,
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    width: 10,
    height: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  messageCountText: {
    color: '#fff',
    fontSize: 6,
    fontFamily: getFontFamily('600'),
  },
  fontFam: {
    fontFamily: getFontFamily('900'),
    fontSize: 50,
  },

  // stories

  userStoryContainer: {
    marginTop: 28,
    marginHorizontal: 28,
  },
});
