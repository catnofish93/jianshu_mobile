/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest4 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M805.088 759.84L589.248 544h305.152a382.144 382.144 0 0 1-89.312 215.84M127.968 512C128 310.72 282.976 145.92 480 129.6V512c0 8.864 3.648 16.864 9.44 22.656l270.4 270.4A382.208 382.208 0 0 1 512 896C299.936 896 128 724.096 128 512m766.4-32H544V129.6A383.68 383.68 0 0 1 894.4 480M512 64C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest4.defaultProps = {
  size: 18,
};

IconiconTest4 = React.memo ? React.memo(IconiconTest4) : IconiconTest4;

export default IconiconTest4;
