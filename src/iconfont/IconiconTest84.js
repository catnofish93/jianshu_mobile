/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest84 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M432 617.6l-121.6-121.6L265.6 544l166.4 166.4L758.4 384l-44.8-48z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest84.defaultProps = {
  size: 18,
};

IconiconTest84 = React.memo ? React.memo(IconiconTest84) : IconiconTest84;

export default IconiconTest84;
