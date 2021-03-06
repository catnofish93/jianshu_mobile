/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest76 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M748.544 618.624c-9.408 34.976-21.024 51.968-53.312 58.24 0 0-83.744 6.304-171.136 6.304-96.32 0-197.568-6.304-197.568-6.304-32.704-4.032-47.936-25.536-55.072-58.24 0 0-9.408-56.448-9.408-112.448 0-54.208 9.408-108.384 9.408-108.384 9.408-33.6 18.336-54.24 55.04-58.272 0 0 90.976-4.928 182.816-4.928 92.768 0 185.92 4.928 185.92 4.928 34.976 4.032 43.04 23.328 53.312 58.272 0 0 9.408 58.688 9.408 115.552 0 53.312-9.408 105.28-9.408 105.28M512 64C264.256 64 64 264.288 64 512c0 247.296 200.736 448 448 448 247.296 0 448-200.704 448-448 0-247.712-200.704-448-448-448"
        fill={getIconColor(color, 0, '#000000')}
      />
      <Path
        d="M457.28 597.952l143.36-92.704-143.36-92.8z"
        fill={getIconColor(color, 1, '#000000')}
      />
    </Svg>
  );
};

IconiconTest76.defaultProps = {
  size: 18,
};

IconiconTest76 = React.memo ? React.memo(IconiconTest76) : IconiconTest76;

export default IconiconTest76;
