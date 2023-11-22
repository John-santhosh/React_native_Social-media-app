import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    borderRadius: 100,
    padding: 3,
  },
  image: {},
  firstName: {
    color: '#022150',
    fontSize: 14,
    fontFamily: getFontFamily('500'),
    marginTop: 10,
    textAlign: 'center',
  },
});

export default style;
