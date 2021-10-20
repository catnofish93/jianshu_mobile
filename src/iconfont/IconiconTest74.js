/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest74 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M697.568 708V289.984h-96.736v265.824l-1.76 0.576-152.992-266.4h-97.344v418.016h97.344v-265.888l1.728-0.512 153.024 266.4h96.736zM511.968 64c247.488 0 448 200.576 448 448 0 247.392-200.512 448-448 448-247.392 0-448-200.608-448-448C64 264.576 264.608 64 512 64z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconiconTest74.defaultProps = {
  size: 18,
};

IconiconTest74 = React.memo ? React.memo(IconiconTest74) : IconiconTest74;

export default IconiconTest74;
