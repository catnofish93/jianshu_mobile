/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest70 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M447.36 761.28h102.976V512h68.672l9.12-85.888H550.4l0.064-43.008c0-22.432 2.144-34.4 34.304-34.4h42.912V262.688h-68.736c-82.56 0-111.616 41.664-111.616 111.776v51.552h-51.424V512h51.52v249.28h-0.064zM512 64c247.456 0 448 200.576 448 448 0 247.392-200.544 448-448 448-247.424 0-448-200.608-448-448C64 264.576 264.576 64 512 64z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest70.defaultProps = {
  size: 18,
};

IconiconTest70 = React.memo ? React.memo(IconiconTest70) : IconiconTest70;

export default IconiconTest70;
