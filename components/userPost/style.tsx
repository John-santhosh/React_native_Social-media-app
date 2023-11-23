import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  postContainer: {
    paddingHorizontal: horizontalScale(24),
    marginTop: verticalScale(35),
  },
  cardHeading: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
    marginBottom: verticalScale(20),
  },
  headingTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('600'),
    color: '#000',
  },
  location: {
    fontSize: scaleFontSize(12),
    color: '#79869F',
    fontFamily: getFontFamily('500'),
    marginTop: verticalScale(5),
  },
  postImageContainer: {
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  postImage: {
    objectFit: 'cover',
    width: '100%',
    borderRadius: 10,
  },

  hr: {
    borderBottomWidth: 1,
    borderColor: '#EFF2F6',
    paddingBottom: verticalScale(20),
  },

  flexRow: {
    flexDirection: 'row',
  },
});

export default style;
