/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshezhi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 925.8c-20.8 0-41.7-5.4-60.3-16.1l-254-146.6c-37.2-21.5-60.3-61.5-60.3-104.4V365.3c0-42.9 23.1-82.9 60.3-104.4l254.1-146.7c37.2-21.5 83.4-21.5 120.5 0l254.1 146.7c37.2 21.5 60.3 61.5 60.3 104.4v293.3c0 42.9-23.1 82.9-60.3 104.4l-254 146.7c-18.7 10.8-39.6 16.1-60.4 16.1z m-28.6-756.7L229.3 315.8c-17.7 10.2-28.6 29.2-28.6 49.6v293.3c0 20.4 11 39.4 28.6 49.6L483.4 855c17.7 10.2 39.6 10.2 57.3 0l254-146.7c17.7-10.2 28.6-29.2 28.6-49.6V365.3c0-20.4-11-39.4-28.6-49.6L540.6 169.1c-17.6-10.2-39.5-10.2-57.2 0z"
        fill={getIconColor(color, 0, '#686868')}
      />
      <Path
        d="M512 638.6c-69.8 0-126.6-56.8-126.6-126.6S442.2 385.4 512 385.4 638.6 442.2 638.6 512 581.8 638.6 512 638.6z m0-189.9c-34.9 0-63.3 28.4-63.3 63.3s28.4 63.3 63.3 63.3 63.3-28.4 63.3-63.3-28.4-63.3-63.3-63.3z"
        fill={getIconColor(color, 1, '#2BA8FC')}
      />
    </Svg>
  );
};

Iconshezhi.defaultProps = {
  size: 18,
};

Iconshezhi = React.memo ? React.memo(Iconshezhi) : Iconshezhi;

export default Iconshezhi;
