import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(14),
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
    fontSize: scaleFontSize(14),
    fontFamily: getFontFamily('500'),
    marginTop: verticalScale(10),
    textAlign: 'center',
  },
});

export default style;
