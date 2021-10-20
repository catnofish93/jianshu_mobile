/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest17 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 128H128v128h64V192h640v64h64V128zM201.376 585.376l45.248 45.248L480 397.248V896h64V397.248l233.376 233.376 45.248-45.248L512 274.752z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest17.defaultProps = {
  size: 18,
};

IconiconTest17 = React.memo ? React.memo(IconiconTest17) : IconiconTest17;

export default IconiconTest17;
