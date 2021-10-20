/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest31 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 64H128v896h768V64H192z m640 832H192V128h640v768z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M320 224h384v64H320zM320 416h64v64h-64zM480 416h64v64h-64zM640 416h64v64h-64zM320 576h64v64h-64zM480 576h64v64h-64zM640 576h64v64h-64zM320 736h64v64h-64zM480 736h64v64h-64zM640 736h64v64h-64z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconiconTest31.defaultProps = {
  size: 18,
};

IconiconTest31 = React.memo ? React.memo(IconiconTest31) : IconiconTest31;

export default IconiconTest31;
