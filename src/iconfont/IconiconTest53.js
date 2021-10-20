/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest53 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M956.8 880l-416-768c-6.4-9.6-16-16-28.8-16s-22.4 6.4-28.8 16l-416 768c0 6.4-3.2 9.6-3.2 16 0 19.2 12.8 32 32 32h832c19.2 0 32-12.8 32-32 0-6.4-3.2-9.6-3.2-16zM480 384h64v256h-64v-256z m32 416c-25.6 0-48-22.4-48-48S486.4 704 512 704s48 22.4 48 48S537.6 800 512 800z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest53.defaultProps = {
  size: 18,
};

IconiconTest53 = React.memo ? React.memo(IconiconTest53) : IconiconTest53;

export default IconiconTest53;
