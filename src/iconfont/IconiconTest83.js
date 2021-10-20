/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest83 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M553.6 790.4l-44.8-44.8 233.6-233.6-233.6-233.6 44.8-44.8L832 512z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M192 480h576v64H192z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconiconTest83.defaultProps = {
  size: 18,
};

IconiconTest83 = React.memo ? React.memo(IconiconTest83) : IconiconTest83;

export default IconiconTest83;
