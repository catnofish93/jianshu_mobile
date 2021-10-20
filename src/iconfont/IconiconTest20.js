/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest20 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 960h640v-64H192z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M512 128a256 256 0 0 1 256 256 254.72 254.72 0 0 1-68.352 173.728l-13.92 13.92-128.832 128.832L512 745.376l-44.896-44.896-128.832-128.832-13.92-13.92A254.72 254.72 0 0 1 256 384a256 256 0 0 1 256-256M281.216 605.088l9.696 9.696 198.112 198.112a31.808 31.808 0 0 0 22.976 9.888c9.056 0 17.152-3.84 22.976-9.888l198.112-198.112 9.696-9.696c15.744-16.416 29.632-34.56 41.632-54.048A317.536 317.536 0 0 0 832 384c0-176.448-143.552-320-320-320S192 207.552 192 384c0 61.248 17.6 118.336 47.584 167.04 12 19.488 25.888 37.632 41.632 54.048"
        fill={getIconColor(color, 1, '#181818')}
      />
      <Path
        d="M512 320a64 64 0 1 1-0.032 128.032A64 64 0 0 1 512 320m0 192c70.592 0 128-57.408 128-128s-57.408-128-128-128-128 57.408-128 128 57.408 128 128 128"
        fill={getIconColor(color, 2, '#181818')}
      />
    </Svg>
  );
};

IconiconTest20.defaultProps = {
  size: 18,
};

IconiconTest20 = React.memo ? React.memo(IconiconTest20) : IconiconTest20;

export default IconiconTest20;
