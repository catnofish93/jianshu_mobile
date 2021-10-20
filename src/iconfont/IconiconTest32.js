/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest32 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 626.592l-128-128-128 128-256.48-256.448L192 497.632V191.872h640V626.56z m0 205.28H192V588.16l127.52-127.52L576 717.12l128-128 128 128v114.72z m0-704H128v768h768v-768h-64z"
        fill={getIconColor(color, 0, '#202020')}
      />
      <Path
        d="M672 319.872c-17.632 0-32 14.368-32 32 0 17.6 14.368 32 32 32 17.632 0 32-14.4 32-32 0-17.632-14.368-32-32-32m0 128c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96-43.072 96-96 96"
        fill={getIconColor(color, 1, '#202020')}
      />
    </Svg>
  );
};

IconiconTest32.defaultProps = {
  size: 18,
};

IconiconTest32 = React.memo ? React.memo(IconiconTest32) : IconiconTest32;

export default IconiconTest32;
