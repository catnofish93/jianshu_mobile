/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconfangdajing = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M938.64603 886.273219l-173.071777-173.074847c53.665247-63.987337 86.075401-146.400325 86.075401-236.446154 0-203.406666-164.895561-368.298134-368.301204-368.298134-203.409736 0-368.302227 164.892491-368.302227 368.298134 0 203.409736 164.892491 368.302227 368.302227 368.302227 89.246627 0 171.055864-31.767518 234.798631-84.579327l173.148525 173.148525c1.576915 1.576915 8.15575-2.443655 14.6957-8.979512l23.675212-23.675212C936.205445 894.428969 940.222945 887.850134 938.64603 886.273219zM483.347426 778.093381c-166.425404 0-301.338093-134.912689-301.338093-301.338093s134.912689-301.338093 301.338093-301.338093S784.685519 310.329884 784.685519 476.755288 649.773853 778.093381 483.347426 778.093381z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconfangdajing.defaultProps = {
  size: 18,
};

Iconfangdajing = React.memo ? React.memo(Iconfangdajing) : Iconfangdajing;

export default Iconfangdajing;
