/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest23 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 736v-18.752l56.384-56.384 46.144-46.144 0.096-0.096-0.416-0.416A253.984 253.984 0 0 1 256 480a256 256 0 0 1 256-256c49.6 0 95.744 14.336 134.976 38.752l46.24-46.208A318.432 318.432 0 0 0 544 161.792V96h-64v65.632C318.528 177.728 192 314.336 192 480c0 43.328 8.736 84.608 24.448 122.304l-79.072 79.04A32.032 32.032 0 0 0 128 704v32h64zM301.248 768L727.04 342.208a253.504 253.504 0 0 1 2.752 272l-0.416 0.416 0.096 0.096 46.144 46.144L832 717.248V768H301.248zM512 896a64 64 0 0 1-64-64h128a64 64 0 0 1-64 64z m374.592-214.656l-79.04-79.04A317.664 317.664 0 0 0 832 480a317.76 317.76 0 0 0-58.56-184.16l145.184-145.216-45.248-45.248-142.336 142.336-45.28 45.28L105.376 873.376l45.248 45.248L237.248 832H384c0 70.592 57.408 128 128 128s128-57.408 128-128h256v-128a31.936 31.936 0 0 0-9.408-22.656z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest23.defaultProps = {
  size: 18,
};

IconiconTest23 = React.memo ? React.memo(IconiconTest23) : IconiconTest23;

export default IconiconTest23;
