/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest7 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M704 576c-19.2 0-32 12.8-32 32s12.8 32 32 32 32-12.8 32-32-12.8-32-32-32"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M864 320H192V192h576V128H160c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h704c19.2 0 32-12.8 32-32V352c0-19.2-12.8-32-32-32z m-32 352h-256v-128h256v128z m0-192h-288c-19.2 0-32 12.8-32 32v192c0 19.2 12.8 32 32 32h288v96H192V384h640v96z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconiconTest7.defaultProps = {
  size: 18,
};

IconiconTest7 = React.memo ? React.memo(IconiconTest7) : IconiconTest7;

export default IconiconTest7;
