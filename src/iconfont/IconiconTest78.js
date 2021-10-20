/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest78 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M574.336 312.8c-44.544 16.224-72.64 57.984-69.44 103.712l1.024 17.632-17.824-2.144c-64.8-8.288-121.44-36.384-169.568-83.584l-23.52-23.36-6.016 17.28c-12.8 38.496-4.64 79.232 22.112 106.592 14.208 15.136 11.008 17.28-13.504 8.32-8.608-2.88-16.064-5.088-16.768-3.968-2.496 2.56 6.08 35.264 12.832 48.224 9.28 18.08 28.096 35.68 48.8 46.176l17.472 8.32-20.672 0.256c-20 0-20.704 0.384-18.528 7.936 7.072 23.424 35.232 48.32 66.592 59.072l22.112 7.584-19.2 11.552a199.552 199.552 0 0 1-95.52 26.624c-16.064 0.384-29.248 1.792-29.248 2.88 0 3.552 43.52 23.744 68.736 31.712 75.904 23.36 166.016 13.248 233.696-26.688 48.096-28.448 96.192-84.992 118.656-139.776 12.096-29.12 24.192-82.432 24.192-108 0-16.576 1.088-18.752 21.024-38.528 11.776-11.584 22.784-24.16 24.96-27.776 3.552-6.816 3.136-6.816-14.976-0.704-30.24 10.816-34.56 9.408-19.584-6.816 11.04-11.52 24.224-32.448 24.224-38.528 0-1.056-5.344 0.736-11.392 3.968-6.4 3.584-20.672 8.992-31.328 12.224l-19.264 6.144-17.44-11.968c-9.6-6.4-23.168-13.696-30.24-15.84-18.24-5.056-46.016-4.32-62.4 1.472M512 64c247.456 0 448 200.544 448 448 0 247.392-200.544 448-448 448S64 759.392 64 512C64 264.544 264.544 64 512 64"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest78.defaultProps = {
  size: 18,
};

IconiconTest78 = React.memo ? React.memo(IconiconTest78) : IconiconTest78;

export default IconiconTest78;