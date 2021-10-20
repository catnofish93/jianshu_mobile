/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest69 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 384l-256 256-256-256z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest69.defaultProps = {
  size: 18,
};

IconiconTest69 = React.memo ? React.memo(IconiconTest69) : IconiconTest69;

export default IconiconTest69;
