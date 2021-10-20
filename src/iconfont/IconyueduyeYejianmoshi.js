/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconyueduyeYejianmoshi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M542.331247 955.220693a431.045474 431.045474 0 0 1-21.360033-861.450146 32.467251 32.467251 0 0 1 28.408844 14.311222 32.04005 32.04005 0 0 1 1.922403 31.82645A363.120567 363.120567 0 0 0 514.563204 299.040467a367.606174 367.606174 0 0 0 367.178974 368.033375H899.471005a32.25365 32.25365 0 0 1 30.331248 46.137672 427.200668 427.200668 0 0 1-387.471006 242.009179z m-69.633708-790.321235A366.965373 366.965373 0 1 0 845.857322 729.65874 431.686275 431.686275 0 0 1 450.483104 299.040467a427.200668 427.200668 0 0 1 22.214435-135.209011z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconyueduyeYejianmoshi.defaultProps = {
  size: 18,
};

IconyueduyeYejianmoshi = React.memo ? React.memo(IconyueduyeYejianmoshi) : IconyueduyeYejianmoshi;

export default IconyueduyeYejianmoshi;
