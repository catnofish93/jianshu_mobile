/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest50 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M544 572.736V640h-64v-128h32c52.928 0 96-43.072 96-96 0-52.96-43.072-96-96-96l-0.288 0.032a96.064 96.064 0 0 0-95.712 96h-64a160.128 160.128 0 0 1 159.712-160H512c88.224 0 160 71.744 160 160a160.224 160.224 0 0 1-128 156.704M511.712 800a48 48 0 1 1 0-96 48 48 0 0 1 0 96M512 64C264.576 64 64 264.544 64 512c0 247.424 200.576 448 448 448s448-200.576 448-448c0-247.456-200.576-448-448-448"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest50.defaultProps = {
  size: 18,
};

IconiconTest50 = React.memo ? React.memo(IconiconTest50) : IconiconTest50;

export default IconiconTest50;
