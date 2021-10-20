/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest27 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 480v-160c0-70.4 57.6-128 128-128s128 57.6 128 128v64h64v-64c0-105.6-86.4-192-192-192s-192 86.4-192 192v160H160v416h704V480H384z m416 352H224v-288h576v288z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M416 736h192v-64h-192z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconiconTest27.defaultProps = {
  size: 18,
};

IconiconTest27 = React.memo ? React.memo(IconiconTest27) : IconiconTest27;

export default IconiconTest27;
