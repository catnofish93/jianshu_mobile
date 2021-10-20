/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest8 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M320 480h384v-64H320zM320 608h256v-64h-256zM320 736h256v-64h-256z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M832 160h-128V96H320v64H192c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h640c19.2 0 32-12.8 32-32V192c0-19.2-12.8-32-32-32zM384 160h256v64h-256V160z m416 704H224V224h96v64h384V224h96v640z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconiconTest8.defaultProps = {
  size: 18,
};

IconiconTest8 = React.memo ? React.memo(IconiconTest8) : IconiconTest8;

export default IconiconTest8;
