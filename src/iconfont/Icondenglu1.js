/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icondenglu1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M621.8 601.2c86.8-49.5 146.1-141.9 146.1-249 0-158.9-128.8-287.7-287.7-287.7S192.5 193.3 192.5 352.2c0 107.1 59.2 199.5 146.1 249-150 54.5-259.7 192.7-272.3 358.3h63.9c16.2-178.9 166.9-319.6 350-319.6s333.8 140.7 350 319.6h63.9c-12.6-165.6-122.3-303.8-272.3-358.3z m-365.4-249c0-123.4 100.4-223.7 223.8-223.7S704 228.8 704 352.2 603.6 575.9 480.2 575.9 256.4 475.6 256.4 352.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icondenglu1.defaultProps = {
  size: 18,
};

Icondenglu1 = React.memo ? React.memo(Icondenglu1) : Icondenglu1;

export default Icondenglu1;
