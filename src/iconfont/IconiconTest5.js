/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest5 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M544 224h-64v288c0 8.832 3.584 16.832 9.376 22.656l192 191.968 45.248-45.248L544 498.752V224z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M512 896C300.256 896 128 723.744 128 512S300.256 128 512 128s384 172.256 384 384-172.256 384-384 384m0-832C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconiconTest5.defaultProps = {
  size: 18,
};

IconiconTest5 = React.memo ? React.memo(IconiconTest5) : IconiconTest5;

export default IconiconTest5;
