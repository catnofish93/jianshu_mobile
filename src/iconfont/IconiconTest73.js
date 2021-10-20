/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest73 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M834.048 477.216h-62.592V414.72h-50.016v62.528h-62.528v49.984h62.528v62.56h50.016v-62.56h62.592v-49.984zM405.664 723.84c121.568 0 203.264-82.656 203.2-205.6v-41.024h-202.24v82.048h114.112c-13.12 52.992-53.472 82.56-115.136 82.56-72.832 0-132.128-58.24-132.128-129.792 0-71.52 59.328-129.76 132.16-129.76 31.84 0 62.624 11.328 86.624 31.808l54.88-61.888a217.856 217.856 0 0 0-141.472-51.936c-118.912 0-215.68 95.04-215.68 211.84 0 116.736 96.736 211.744 215.68 211.744zM512 64c247.456 0 448 200.544 448 448 0 247.392-200.544 448-448 448-247.424 0-448-200.608-448-448C64 264.544 264.576 64 512 64z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest73.defaultProps = {
  size: 18,
};

IconiconTest73 = React.memo ? React.memo(IconiconTest73) : IconiconTest73;

export default IconiconTest73;
