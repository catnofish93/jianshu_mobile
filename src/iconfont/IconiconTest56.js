/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest56 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M212.16 449.568l161.696 138.048-47.072 216.448 186.08-110.336 186.144 110.272-47.2-216.384 161.568-138.08-205.824-23.68-94.72-197.792-94.72 197.824-205.92 23.68zM512 95.968c3.808 0 7.584 2.24 9.024 6.592l129.6 270.784 288.8 33.184c9.184 0 12.992 11.744 5.568 17.152L720 616l65.184 299.52a9.504 9.504 0 0 1-14.592 10.656L512 772.896l-258.592 153.28a9.536 9.536 0 0 1-14.592-10.624L304 616l-224.992-192.32a9.472 9.472 0 0 1 5.6-17.152l288.736-33.184 129.6-270.784A9.344 9.344 0 0 1 512 96z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest56.defaultProps = {
  size: 18,
};

IconiconTest56 = React.memo ? React.memo(IconiconTest56) : IconiconTest56;

export default IconiconTest56;
