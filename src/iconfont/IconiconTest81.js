/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest81 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z m-19.2 630.4H233.6v-48h259.2v48z m0-80H233.6v-48h259.2v48z m0-80H233.6v-48h259.2v48z m0-80H233.6v-48h259.2v48z m0-80H233.6v-48h259.2v48z m140.8 320h-105.6v-48h105.6v48z m0-80h-105.6v-48h105.6v48z m0-80h-105.6v-48h105.6v48z m0-80h-105.6v-48h105.6v48z m0-80h-105.6v-48h105.6v48z m144 320H672v-48h105.6v48z m0-80H672v-48h105.6v48z m0-80H672v-48h105.6v48z m0-80H672v-48h105.6v48z m0-80H672v-48h105.6v48z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest81.defaultProps = {
  size: 18,
};

IconiconTest81 = React.memo ? React.memo(IconiconTest81) : IconiconTest81;

export default IconiconTest81;
