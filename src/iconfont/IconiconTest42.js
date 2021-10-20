/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest42 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M710.624 665.376l-45.248 45.248L512 557.248l-153.376 153.376-45.248-45.248L466.752 512l-153.376-153.376 45.248-45.248L512 466.752l153.376-153.376 45.248 45.248L557.248 512l153.376 153.376zM512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest42.defaultProps = {
  size: 18,
};

IconiconTest42 = React.memo ? React.memo(IconiconTest42) : IconiconTest42;

export default IconiconTest42;
