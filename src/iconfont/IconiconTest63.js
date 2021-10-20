/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest63 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M790.624 301.248L745.376 256 512 489.376 278.624 256 233.376 301.248 512 579.872zM192 736h640v-64H192z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest63.defaultProps = {
  size: 18,
};

IconiconTest63 = React.memo ? React.memo(IconiconTest63) : IconiconTest63;

export default IconiconTest63;
