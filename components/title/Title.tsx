import React from 'react';
import {Text} from 'react-native';
import {style} from './style';

type TitlePropTypes = {title: string};

const Title = ({title}: TitlePropTypes) => {
  return <Text style={style.title}>{title}</Text>;
};

export default Title;
