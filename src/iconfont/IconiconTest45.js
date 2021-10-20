/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest45 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M432 709.248l-166.624-166.624 45.248-45.248 121.376 121.376 281.376-281.376 45.248 45.248L432 709.248zM512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest45.defaultProps = {
  size: 18,
};

IconiconTest45 = React.memo ? React.memo(IconiconTest45) : IconiconTest45;

export default IconiconTest45;
