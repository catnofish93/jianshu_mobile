/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconindexCopy = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M566.55497187 51.95428531a77.02857187 77.02857187 0 0 0-103.47428625 0L44.68068594 449.16571437a38.5828575 38.5828575 0 0 0 51.67999969 57.32571375l6.65142843-6.33142781V914.74285719A77.16571406 77.16571406 0 0 0 180.2235425 992h224.64V759.65714281a54.33142875 54.33142875 0 0 1 54.37714313-54.40000031h105.69142875a54.35428594 54.35428594 0 0 1 54.40000031 54.40000031V992h229.94285719a77.23428563 77.23428563 0 0 0 77.23428562-77.25714281V505.21142844c17.14285687 15.52000031 41.4628575 14.33142844 55.74857063-1.55428594a38.5828575 38.5828575 0 0 0-2.78857125-54.51428531L566.55497187 51.9771425z"
        fill={getIconColor(color, 0, '#CCCCCC')}
      />
    </Svg>
  );
};

IconindexCopy.defaultProps = {
  size: 18,
};

IconindexCopy = React.memo ? React.memo(IconindexCopy) : IconindexCopy;

export default IconindexCopy;
