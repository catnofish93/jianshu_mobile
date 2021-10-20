/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest52 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 640h64v-256h-64z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M512 800a48 48 0 1 0 0-96 48 48 0 0 0 0 96"
        fill={getIconColor(color, 1, '#181818')}
      />
      <Path
        d="M512 195.2L874.272 864H149.728L512 195.2z m443.744 685.76l0.384-0.192-416-768-0.384 0.224A31.584 31.584 0 0 0 512 96a31.584 31.584 0 0 0-27.744 16.96l-0.384-0.192-416 768 0.384 0.224A31.2 31.2 0 0 0 64 896a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32 31.2 31.2 0 0 0-4.256-15.04z"
        fill={getIconColor(color, 2, '#181818')}
      />
    </Svg>
  );
};

IconiconTest52.defaultProps = {
  size: 18,
};

IconiconTest52 = React.memo ? React.memo(IconiconTest52) : IconiconTest52;

export default IconiconTest52;
