/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest19 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 896C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384m0-832C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M416 345.728L704 512l-288 166.272V345.728zM800 512c0-11.84-6.72-21.728-16.256-27.264l0.256-0.448-384-221.728-0.256 0.48A30.912 30.912 0 0 0 384 258.304a32 32 0 0 0-32 32v443.392a32 32 0 0 0 32 32 30.912 30.912 0 0 0 15.744-4.736l0.256 0.448 384-221.696-0.256-0.448A31.584 31.584 0 0 0 800 512z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconiconTest19.defaultProps = {
  size: 18,
};

IconiconTest19 = React.memo ? React.memo(IconiconTest19) : IconiconTest19;

export default IconiconTest19;
