import {Text} from 'react-native';
import React from 'react';

const ProfileTabTitle = props => {
  console.log(props);

  return <Text>{props.title}</Text>;
};

export default ProfileTabTitle;
