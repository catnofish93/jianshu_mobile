/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconyejianmoshi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M472 991.6c-157 0-304.4-77.2-394.3-206.6-6.9-9.9-7.6-22.9-1.8-33.6 5.8-10.7 17.1-17.8 29.2-16.7l7.7 0.4c2.4 0.2 4.8 0.3 7.2 0.3 229.4 0 416-186.6 416-416 0-85-25.7-167-74.3-236.9-6.9-9.9-7.6-22.9-1.8-33.6 5.8-10.7 17.2-17.6 29.2-16.7C748.7 41.6 952 252.1 952 511.6c0 264.7-215.3 480-480 480zM169.7 797.1c78.1 82.7 187.2 130.6 302.3 130.6 229.4 0 416-186.6 416-416 0-204-144.9-373-339.7-408.6 34 66.9 51.7 140.7 51.7 216.6 0 247.8-188.9 452.4-430.3 477.4z"
        fill={getIconColor(color, 0, '#243154')}
      />
    </Svg>
  );
};

Iconyejianmoshi.defaultProps = {
  size: 18,
};

Iconyejianmoshi = React.memo ? React.memo(Iconyejianmoshi) : Iconyejianmoshi;

export default Iconyejianmoshi;
