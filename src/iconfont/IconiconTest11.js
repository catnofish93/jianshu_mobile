/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest11 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 768a64 64 0 1 0 0.032 128.032A64 64 0 0 0 384 768M704 768a64 64 0 1 0 0.032 128.032A64 64 0 0 0 704 768M312.672 512l-51.424-192h560.96l-51.456 192H312.672z m583.36-224a32 32 0 0 0-32-32H244.064L209.792 128H96.032v64h64.64l145.728 544H800v-64H355.52l-25.696-96h490.048l12.16-45.376 64-238.88-0.768-0.192C895.424 290.336 896 289.28 896 288z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M448 448h192v-64h-192z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconiconTest11.defaultProps = {
  size: 18,
};

IconiconTest11 = React.memo ? React.memo(IconiconTest11) : IconiconTest11;

export default IconiconTest11;
