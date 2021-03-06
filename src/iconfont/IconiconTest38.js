/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest38 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M320 192c35.296 0 64 28.704 64 64s-28.704 64-64 64-64-28.704-64-64 28.704-64 64-64m0 192c70.592 0 128-57.408 128-128s-57.408-128-128-128-128 57.408-128 128 57.408 128 128 128M736 448h-96a31.904 31.904 0 0 0-22.624 9.376L512 562.752l-105.376-105.376A31.904 31.904 0 0 0 384 448H288c-88.224 0-160 71.776-160 160v192h96v96h64v-160H192v-128c0-52.928 43.072-96 96-96h82.752L512 653.248 653.248 512H736c52.928 0 96 43.072 96 96v128h-96v160h64v-96h96v-192c0-88.224-71.776-160-160-160M704 192c35.296 0 64 28.704 64 64s-28.704 64-64 64-64-28.704-64-64 28.704-64 64-64m0 192c70.592 0 128-57.408 128-128s-57.408-128-128-128-128 57.408-128 128 57.408 128 128 128"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest38.defaultProps = {
  size: 18,
};

IconiconTest38 = React.memo ? React.memo(IconiconTest38) : IconiconTest38;

export default IconiconTest38;
