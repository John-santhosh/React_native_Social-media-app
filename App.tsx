/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';
import Title from './components/title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import UserStories from './components/userStory/UserStories';

// types
export type UserStoryType = {
  firstName: string;
  id: number;
  // need to look for this
  profileImage: any;
};

// component
function App() {
  const userStories: UserStoryType[] = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Oliver',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nicholas',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nova',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nielson',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  return (
    <SafeAreaView>
      <View style={[style.pageSpacing, style.title]}>
        <Title title="Let's Explore" />
        {/* <View style={style.titleIcon}> */}
        <TouchableOpacity style={style.buttonStyle}>
          <FontAwesomeIcon
            icon={faEnvelope}
            color={'#898DAE'}
            style={{width: 25, height: 20}}
          />
          <View style={style.messageCount}>
            <Text style={style.messageCountText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={style.userStoryContainer}>
        <FlatList
          data={userStories}
          // keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <UserStories {...item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

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
