/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest67 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 256l256 256-256 256z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest67.defaultProps = {
  size: 18,
};

IconiconTest67 = React.memo ? React.memo(IconiconTest67) : IconiconTest67;

export default IconiconTest67;
