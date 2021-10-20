/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest18 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 768v64H192v-64H128v128h768v-128zM822.624 438.624l-45.248-45.248L544 626.752V128h-64v498.752l-233.376-233.376-45.248 45.248L512 749.248z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest18.defaultProps = {
  size: 18,
};

IconiconTest18 = React.memo ? React.memo(IconiconTest18) : IconiconTest18;

export default IconiconTest18;
