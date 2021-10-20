/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshoucang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.002047 913.854391l-62.554708-61.180408c-232.28846-200.949708-384.157333-336.436472-384.157333-502.446413 0-135.416156 107.175975-240.298901 245.699911-240.298901 75.902714 0 151.86785 34.997072 201.01213 91.76703 49.072649-56.769958 125.104299-91.76703 201.007013-91.76703 138.453329 0 245.699911 104.883769 245.699911 240.298901 0 166.009941-151.935388 301.496705-384.219755 502.446413L512.002047 913.854391z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshoucang.defaultProps = {
  size: 18,
};

Iconshoucang = React.memo ? React.memo(Iconshoucang) : Iconshoucang;

export default Iconshoucang;
