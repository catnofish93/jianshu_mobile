/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest34 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 320v576h576V320H128z m512 512H192V384h448v448z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M832 128H384v128h64V192h384v384h-64v64h128V128z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconiconTest34.defaultProps = {
  size: 18,
};

IconiconTest34 = React.memo ? React.memo(IconiconTest34) : IconiconTest34;

export default IconiconTest34;
