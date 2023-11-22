/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
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

function App(): JSX.Element {
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
    // paddingHorizontal: 3,
    // paddingVertical: 2,
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
});
