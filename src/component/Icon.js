import React from 'react';
// import { Icon, Grid } from 'antd-mobile';
//
// const list = [
//   'check-circle', 'check', 'check-circle-o',
//   'cross-circle', 'cross', 'cross-circle-o',
//   'up', 'down', 'left',
//   'right', 'ellipsis',
//   'loading',
// ];
//
// const Demo = () => {
//   const data = list.map(item => ({
//     icon: (<Icon type={item} />),
//     text: item,
//   }));
//   return (
//     <Grid data={data} columnNum={3} hasLine={false} activeStyle={false} />
//   );
// };
//
// export default Demo;

import { Icon, Grid } from 'antd-mobile';

const Demo = () => {
  const size = ['xxs', 'xs', 'sm', 'md', 'lg'];
  const data = size.map(item => ({
    icon: (<Icon type="search" size={item} />),
    text: item,
  }));
  return (<Grid data={data} columnNum={5} hasLine={false} activeStyle={false} />);
};

export default Demo;
