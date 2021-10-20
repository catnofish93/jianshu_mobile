/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest47 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M714.368 759.616L264.352 309.6c13.536-16.544 28.736-31.68 45.28-45.248l449.984 450.016c-13.536 16.544-28.704 31.68-45.248 45.248M512 64C264.544 64 64 264.576 64 512s200.544 448 448 448c247.424 0 448-200.576 448-448S759.424 64 512 64"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest47.defaultProps = {
  size: 18,
};

IconiconTest47 = React.memo ? React.memo(IconiconTest47) : IconiconTest47;

export default IconiconTest47;
