import React from 'react';
// import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
//
// const tabs = [
//     { title: <Badge text={'3'}>First Tab</Badge> },
//     { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
//     { title: <Badge dot>Third Tab</Badge> },
// ];
//
// const tabs2 = [
//     { title: 'First Tab', sub: '1' },
//     { title: 'Second Tab', sub: '2' },
//     { title: 'Third Tab', sub: '3' },
// ];
//
// const TabExample = () => (
//     <div>
//         <Tabs tabs={tabs}
//             initialPage={1}
//             onChange={(tab, index) => { console.log('onChange', index, tab); }}
//             onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
//             >
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
//                 Content of first tab
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
//                 Content of second tab
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
//                 Content of third tab
//             </div>
//         </Tabs>
//         <WhiteSpace />
//         <Tabs tabs={tabs2}
//             initialPage={1}
//             tabBarPosition="bottom"
//             renderTab={tab => <span>{tab.title}</span>}
//             >
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
//                 Content of first tab
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
//                 Content of second tab
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
//                 Content of third tab
//             </div>
//         </Tabs>
//         <WhiteSpace />
//     </div>
// );
//
// export default TabExample;

// 垂直样式
// import { Tabs, WhiteSpace } from 'antd-mobile';
//
// const tabs = [
//     { title: '1 Tab' },
//     { title: '2 Tab' },
//     { title: '3 Tab' },
// ];
//
// const TabExample = () => (
//     <div style={{ height: 200 }}>
//         <WhiteSpace />
//         <Tabs tabs={tabs}
//             initalPage={'t2'}
//             tabBarPosition="left"
//             tabDirection="vertical"
//         >
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//                 Content of first tab
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//                 Content of second tab
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//                 Content of third tab
//             </div>
//         </Tabs>
//         <WhiteSpace />
//     </div>
// );
// export default TabExample;


// 多于5个的
import { Tabs, WhiteSpace } from 'antd-mobile';

class Demo extends React.Component {
  renderContent(tab){
     return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
         <p>Content of {tab.title}</p>
       </div>);
  }

  render() {
    const tabs = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ];

    return (
      <div>
        <WhiteSpace />
        <Tabs tabs={tabs}>
          {(e)=>this.renderContent(e)}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}

export default Demo;
