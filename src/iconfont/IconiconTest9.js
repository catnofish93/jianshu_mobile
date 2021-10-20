/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest9 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 160c-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64-28.8-64-64-64"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M320 480h384v-64H320z"
        fill={getIconColor(color, 1, '#181818')}
      />
      <Path
        d="M320 608h256v-64h-256z"
        fill={getIconColor(color, 2, '#181818')}
      />
      <Path
        d="M320 736h256v-64h-256z"
        fill={getIconColor(color, 3, '#181818')}
      />
      <Path
        d="M800 352v512H224V224h96v64h384V96H320v64H192c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h640c19.2 0 32-12.8 32-32V352h-64zM384 160h256v64h-256V160z"
        fill={getIconColor(color, 4, '#181818')}
      />
    </Svg>
  );
};

IconiconTest9.defaultProps = {
  size: 18,
};

IconiconTest9 = React.memo ? React.memo(IconiconTest9) : IconiconTest9;

export default IconiconTest9;
