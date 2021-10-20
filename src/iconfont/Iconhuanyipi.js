/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconhuanyipi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M949.252087 430.532547c-9.240455-7.446599-22.75526-5.965875-30.169113 3.328815l-36.743856 46.075385c-1.208525-17.817808-3.606131-35.751249-7.338129-53.722552C829.114916 204.421786 613.312942 62.124919 393.013537 108.309798 172.691619 154.50798 31.294239 371.70165 77.179288 593.470523c45.88505 221.791385 261.688048 364.101555 482.009965 317.880861 80.081896-16.785292 148.922774-56.816007 202.800869-110.918205 0.199545-0.198521 0.401136-0.355087 0.602727-0.578168 0.956791-0.979304 1.290389-2.113127 2.248204-3.115967 1.578961-2.670829 2.714831-5.855358 2.714831-9.171893 0-9.82067-7.92346-17.790178-17.675568-17.790178-5.254677 0-9.842159 2.405793-13.093203 6.078439l-0.130983-0.11154c-48.916083 49.047066-111.676475 85.202521-184.344518 100.432387-199.506846 41.833781-394.937864-87.050612-436.482049-287.880593-41.566698-200.809515 86.493933-397.531945 285.999756-439.364703 199.506846-41.822524 394.937864 87.073124 436.480003 287.880593 3.207042 15.446807 5.425569 30.855752 6.712889 46.165436l-44.603871-36.034704c-9.262968-7.470135-22.753213-5.966898-30.169113 3.317559-7.435343 9.317203-5.944386 22.898523 3.297093 30.390147 0.045025 0.022513 0.045025 0.022513 0.090051 0.022513l82.132602 66.39006c0.020466 0 0.065492 0.044002 0.086981 0.066515 4.692882 3.793396 10.480702 5.266957 16.016789 4.590552 5.539156-0.555655 10.861372-3.25616 14.617929-7.964392 0.021489-0.021489 0.045025-0.066515 0.045025-0.066515l65.944921-82.71998c0.021489-0.021489 0.021489-0.021489 0.065492-0.045025C959.95894 451.606515 958.492542 438.012915 949.252087 430.532547z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconhuanyipi.defaultProps = {
  size: 18,
};

Iconhuanyipi = React.memo ? React.memo(Iconhuanyipi) : Iconhuanyipi;

export default Iconhuanyipi;
