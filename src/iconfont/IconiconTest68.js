/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest68 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256.32 640l256-256 256 256z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest68.defaultProps = {
  size: 18,
};

IconiconTest68 = React.memo ? React.memo(IconiconTest68) : IconiconTest68;

export default IconiconTest68;
