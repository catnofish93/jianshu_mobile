/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest48 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z m32 704h-64v-288h64v288z m-32-400c-25.6 0-48-22.4-48-48s22.4-48 48-48 48 22.4 48 48-22.4 48-48 48z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest48.defaultProps = {
  size: 18,
};

IconiconTest48 = React.memo ? React.memo(IconiconTest48) : IconiconTest48;

export default IconiconTest48;
