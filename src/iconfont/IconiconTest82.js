/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest82 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M64 832h768V320H64v512z m64-448h640v384H128V384zM448 192h448v64H448zM896 256h64v256h-64zM896 192h64v64h-64z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M448 448c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128z m0 192c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconiconTest82.defaultProps = {
  size: 18,
};

IconiconTest82 = React.memo ? React.memo(IconiconTest82) : IconiconTest82;

export default IconiconTest82;
