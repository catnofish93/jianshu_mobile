/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest28 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M464 544a48 48 0 1 0 96 0 48 48 0 0 0-96 0"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M832 660.896l-320 85.728-320-85.76v-297.76l320-85.76 320 85.76v297.792z m64-322.336a31.52 31.52 0 0 0-23.872-30.336l0.16-0.576-352-94.304-0.128 0.512c-2.688-0.704-5.28-1.632-8.16-1.632s-5.472 0.928-8.16 1.6l-0.128-0.48-352 94.304 0.16 0.576A31.52 31.52 0 0 0 128 338.56v345.216h0.352c-0.032 0.576-0.352 1.088-0.352 1.664 0 14.784 10.24 26.688 23.872 30.368l-0.16 0.544 352 94.304 0.16-0.512c2.656 0.736 5.248 1.6 8.128 1.6s5.472-0.864 8.128-1.6l0.16 0.512 352-94.304-0.16-0.544a31.584 31.584 0 0 0 23.872-30.4c0-0.544-0.32-1.056-0.352-1.632H896V338.56z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconiconTest28.defaultProps = {
  size: 18,
};

IconiconTest28 = React.memo ? React.memo(IconiconTest28) : IconiconTest28;

export default IconiconTest28;
