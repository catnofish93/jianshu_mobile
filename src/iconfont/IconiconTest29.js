/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest29 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 832a64 64 0 1 1 0.032-128.032A64 64 0 0 1 768 832m-448-64a64 64 0 1 1-128.032-0.032A64 64 0 0 1 320 768m128-512a64 64 0 1 1 128.032 0.032A64 64 0 0 1 448 256m352 388.544V480h-256v-100.544c55.072-14.304 96-64 96-123.456 0-70.592-57.44-128-128-128-70.592 0-128 57.408-128 128 0 59.456 40.928 109.152 96 123.456V480H224V644.544c-55.072 14.304-96 64-96 123.456 0 70.592 57.408 128 128 128 70.56 0 128-57.408 128-128 0-59.456-40.928-109.152-96-123.456V544h448v100.544c-55.072 14.304-96 64-96 123.456 0 70.592 57.408 128 128 128 70.56 0 128-57.408 128-128 0-59.456-40.928-109.152-96-123.456"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconiconTest29.defaultProps = {
  size: 18,
};

IconiconTest29 = React.memo ? React.memo(IconiconTest29) : IconiconTest29;

export default IconiconTest29;
