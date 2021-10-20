/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest64 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M233.376 722.752L278.624 768 512 534.624 745.376 768l45.248-45.248L512 444.128zM192 352h640V288H192z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest64.defaultProps = {
  size: 18,
};

IconiconTest64 = React.memo ? React.memo(IconiconTest64) : IconiconTest64;

export default IconiconTest64;
