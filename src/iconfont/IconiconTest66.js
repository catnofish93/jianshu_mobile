/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest66 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M640 768l-256-256 256-256z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest66.defaultProps = {
  size: 18,
};

IconiconTest66 = React.memo ? React.memo(IconiconTest66) : IconiconTest66;

export default IconiconTest66;
