import React from 'react';
import {UserStoryType} from '../../App';
import {Text, View} from 'react-native';
import style from './style';
import UserProfileImage from '../userProfileImage/UserProfileImage';

const UserStories = ({firstName, profileImage}: UserStoryType) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={profileImage} dimension={65} />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStories;
