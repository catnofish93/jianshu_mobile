/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest14 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 128h-192v64h146.752l-265.376 265.376 45.248 45.248L832 237.248V384h64V128z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M768 832H192V256h352V192H160a32 32 0 0 0-32 32v640a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V480h-64v352z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconiconTest14.defaultProps = {
  size: 18,
};

IconiconTest14 = React.memo ? React.memo(IconiconTest14) : IconiconTest14;

export default IconiconTest14;
