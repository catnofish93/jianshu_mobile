/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest79 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M640 512h-32v-64h32a96 96 0 1 0-96-96v320c0 88.224-71.776 160-160 160s-160-71.776-160-160 71.776-160 160-160h32v64h-32a96 96 0 1 0 96 96V352c0-88.224 71.776-160 160-160s160 71.776 160 160-71.776 160-160 160M512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest79.defaultProps = {
  size: 18,
};

IconiconTest79 = React.memo ? React.memo(IconiconTest79) : IconiconTest79;

export default IconiconTest79;
