/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {UserPostType} from '../../App';
import UserProfileImage from '../userProfileImage/UserProfileImage';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark, faHeart} from '@fortawesome/free-regular-svg-icons';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

const UserPost = (props: UserPostType) => {
  return (
    <View style={style.postContainer}>
      {/* card heading */}
      <View style={style.cardHeading}>
        <UserProfileImage
          profileImage={props.image}
          dimension={horizontalScale(48)}
        />
        <View style={style.headingTitle}>
          <View>
            <Text style={style.name}>
              {props.firstName} {props.lastName}
            </Text>
            <Text style={style.location}>
              {props.location && props.location}
            </Text>
          </View>

          <TouchableOpacity>
            <FontAwesomeIcon
              icon={faEllipsis}
              color={'#79869F'}
              size={scaleFontSize(24)}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* card body image */}

      <View style={style.postImageContainer}>
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.postImage}
          // resizeMode="cover"
        />
      </View>

      {/* card Footer */}
      <View style={[style.flexRow, style.hr, {marginTop: 16}]}>
        <View style={[style.flexRow, {alignItems: 'center'}]}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faHeart} color="#79869F" />
          </TouchableOpacity>
          <Text style={{marginLeft: 3, color: '#79869F'}}>{props.likes}</Text>
        </View>

        <View
          style={[style.flexRow, {marginHorizontal: 27, alignItems: 'center'}]}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          </TouchableOpacity>
          <Text style={{marginLeft: 3, color: '#79869F'}}>
            {props.bookMarks}
          </Text>
        </View>

        <View style={[style.flexRow, {alignItems: 'center'}]}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faHeart} color="#79869F" />
          </TouchableOpacity>
          <Text style={{marginLeft: 3, color: '#79869F'}}>
            {props.comments}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
