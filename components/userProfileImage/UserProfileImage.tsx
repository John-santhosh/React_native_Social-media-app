import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
// import style from '../userStory/style';

const UserProfileImage = ({
  profileImage,
  dimension,
}: {
  profileImage: any;
  dimension: number;
}) => {
  return (
    <View style={[style.userImageContainer, {borderRadius: dimension}]}>
      <Image
        source={profileImage}
        style={{width: dimension, height: dimension}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: 3,
  },
  image: {
    width: horizontalScale(65),
    height: verticalScale(65),
  },
});

export default UserProfileImage;
