/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest37 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 192c52.928 0 96 43.072 96 96s-43.072 96-96 96-96-43.072-96-96 43.072-96 96-96m0 256c88.224 0 160-71.776 160-160s-71.776-160-160-160-160 71.776-160 160 71.776 160 160 160M704 352a64 64 0 1 1-0.032 128.032A64 64 0 0 1 704 352m0 192c70.592 0 128-57.408 128-128s-57.408-128-128-128-128 57.408-128 128 57.408 128 128 128M772.576 608.096h-137.12c-2.944 0-5.76 0.416-8.64 0.64A160.128 160.128 0 0 0 480 512H288c-88.192 0-160 71.776-160 160v224h64v-224c0-52.928 43.072-96 96-96h192c52.96 0 96 43.072 96 96v224h64v-223.904h132.576c32.768 0 59.424 26.656 59.424 59.392V896h64v-164.512a123.52 123.52 0 0 0-123.424-123.392"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest37.defaultProps = {
  size: 18,
};

IconiconTest37 = React.memo ? React.memo(IconiconTest37) : IconiconTest37;

export default IconiconTest37;
