import React from 'react';
import {UserStoryType} from '../../App';
import {Text, View} from 'react-native';
import {Image} from 'react-native';
import style from './style';

const UserStories = ({firstName, profileImage}: UserStoryType) => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={profileImage} style={style.image} />
      </View>
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStories;
