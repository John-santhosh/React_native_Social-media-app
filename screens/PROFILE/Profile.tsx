import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {globalStyle} from '../../assets/styles/global.styles';
import style from './profile.styles';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';
import {ScrollView} from 'react-native-gesture-handler';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.whiteBG, globalStyle.flex]}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.ProfileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <Text style={style.userName}>Emmanuel Robertsen</Text>
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}>45</Text>
            <Text style={style.stateType}>Following</Text>
          </View>
          <View>
            <Text style={style.statAmount}>30M</Text>
            <Text style={style.stateType}>Follower</Text>
          </View>
          <View>
            <Text style={style.statAmount}>100</Text>
            <Text style={style.stateType}>Posts</Text>
          </View>
        </View>
        <View
          style={{flex: 1, flexGrow: 1, backgroundColor: 'blue', height: 1000}}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
