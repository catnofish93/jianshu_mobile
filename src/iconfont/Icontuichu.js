/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icontuichu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M560 128H136a8 8 0 0 0-8 8v752a8 8 0 0 0 8 8h424c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H96c-17.673 0-32-14.327-32-32V96c0-17.673 14.327-32 32-32h464c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32z m286.745 352.127L720.29 353.673c-12.496-12.497-12.496-32.758 0-45.255 12.497-12.497 32.758-12.497 45.255 0l181.02 181.02c12.496 12.496 12.496 32.757 0 45.254l-181.02 181.02c-12.497 12.496-32.758 12.496-45.255 0-12.496-12.497-12.496-32.759 0-45.256l126.33-126.329H318.254c-17.673 0-32-14.326-32-32 0-17.673 14.327-32 32-32h528.49z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontuichu.defaultProps = {
  size: 18,
};

Icontuichu = React.memo ? React.memo(Icontuichu) : Icontuichu;

export default Icontuichu;
