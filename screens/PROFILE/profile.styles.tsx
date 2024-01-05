import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  ProfileContainer: {
    paddingLeft: horizontalScale(20),
    paddingEnd: horizontalScale(28),
    // backgroundColor: 'red',
  },
  ProfileImage: {
    width: horizontalScale(110),
    height: horizontalScale(110),
    // borderRadius: 100 0,
  },
  profileImageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    // flex: 1,
    marginTop: verticalScale(32),
    // backgroundColor: 'red',
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    borderRadius: horizontalScale(100),
    padding: horizontalScale(4),
  },
  userName: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontFamily: getFontFamily('600'),
    fontSize: scaleFontSize(20),
    color: '#022150',
  },

  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    // border: 1,

    borderBottomWidth: 1,
    padding: verticalScale(20),
    borderColor: '#EFF2F6',
  },
  statAmount: {
    marginTop: verticalScale(20),
    fontFamily: getFontFamily('600'),
    color: '#022150',
    textAlign: 'center',
    fontSize: scaleFontSize(20),
  },
  stateType: {
    // marginTop: verticalScale(20),
    fontFamily: getFontFamily('400'),
    color: '#9aa1ab',
    textAlign: 'center',
    fontSize: scaleFontSize(16),
  },
  statBorder: {
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderColor: '#9aa1ab',
  },
});

export default style;
