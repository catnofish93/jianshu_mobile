/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconzuanshi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M906.7 375.3l-141-192.4c-3.1-4.2-8-6.7-13.3-6.7h-480c-5.2 0-10.2 2.5-13.3 6.7l-141 192.4c-4.4 6.1-4.2 14.4 0.6 20.2l381 461.2c3.3 4 8 6 12.7 6s9.4-2 12.7-6l381-461.2c4.8-5.8 5-14.1 0.6-20.2z m-97.4-24.5H690.9L580.4 240.3h147.9l81 110.5z m-492.9 57.7l100.1 247-204-247h103.9z m329.8 0L512.4 738.6 378.6 408.5h267.6z m-230.8-57.7l97-97 97 97h-194z m293 57.7h103.9l-204 247 100.1-247zM296.5 240.3h147.9L333.9 350.8H215.5l81-110.5z"
        fill={getIconColor(color, 0, '#231815')}
      />
    </Svg>
  );
};

Iconzuanshi.defaultProps = {
  size: 18,
};

Iconzuanshi = React.memo ? React.memo(Iconzuanshi) : Iconzuanshi;

export default Iconzuanshi;
