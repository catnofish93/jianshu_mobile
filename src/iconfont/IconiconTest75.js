/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest75 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M695.232 435.84l-146.016-196.672 39.36-29.12 146.08 196.672-39.424 29.12z m16.16 323.424H270.56v-196.16H319.36v146.912h342.72v-146.944h48.8v196.192h0.48zM368.64 661.184h245.056v-48.832H368.64v48.832z m14.816-159.488l239.648 50.176-9.856 47.936-239.68-50.176 9.888-47.936z m42.528-111.104l222.208 103.488-21.056 44.352-221.76-103.488 20.608-44.352z m72.16-102.144l188.16 156.8-31.392 37.632-188.16-156.8 31.36-37.632zM512 64C264.736 64 64 264.704 64 512c0 247.264 200.736 448 448 448 247.296 0 448-200.736 448-448 0-247.296-200.224-448-448-448z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest75.defaultProps = {
  size: 18,
};

IconiconTest75 = React.memo ? React.memo(IconiconTest75) : IconiconTest75;

export default IconiconTest75;
