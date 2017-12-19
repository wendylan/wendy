import React from 'react';
// import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
//
// const data = [
//   {
//     value: '1',
//     label: 'Food',
//   }, {
//     value: '2',
//     label: 'Supermarket',
//   },
//   {
//     value: '3',
//     label: 'Extra',
//     isLeaf: true,
//   },
// ];
//
// class MenuExample extends React.Component {
//   constructor(...args) {
//     super(...args);
//     this.state = {
//       initData: '',
//       show: false,
//     };
//   }
//   onChange(value){
//     let label = '';
//     data.forEach((dataItem) => {
//       if (dataItem.value === value[0]) {
//         label = dataItem.label;
//         if (dataItem.children && value[1]) {
//           dataItem.children.forEach((cItem) => {
//             if (cItem.value === value[1]) {
//               label += ` ${cItem.label}`;
//             }
//           });
//         }
//       }
//     });
//     console.log(label);
//   }
//   handleClick(e) {
//     e.preventDefault(); // Fix event propagation on Android
//     this.setState({
//       show: !this.state.show,
//     });
//     // mock for async data loading
//     if (!this.state.initData) {
//       setTimeout(() => {
//         this.setState({
//           initData: data,
//         });
//       }, 500);
//     }
//   }
//
//   onMaskClick(){
//     this.setState({
//       show: false,
//     });
//   }
//
//   render() {
//     const { initData, show } = this.state;
//     const menuEl = (
//       <Menu
//         className="single-foo-menu"
//         data={initData}
//         value={['1']}
//         level={1}
//         onChange={(e)=>this.onChange(e)}
//         height={document.documentElement.clientHeight * 0.6}
//       />
//     );
//     const loadingEl = (
//       <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
//         <ActivityIndicator size="large" />
//       </div>
//     );
//     return (
//       <div className={show ? 'single-menu-active' : ''}>
//         <div>
//           <NavBar
//             leftContent="Menu"
//             mode="light"
//             onLeftClick={(e)=>this.handleClick(e)}
//             className="single-top-nav-bar"
//           >
//             OneLevel menu
//           </NavBar>
//         </div>
//         {show ? initData ? menuEl : loadingEl : null}
//         {show ? <div className="menu-mask" onClick={()=>this.onMaskClick()} /> : null}
//       </div>
//     );
//   }
// }
//
// export default MenuExample;
//
// import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
// import '../res/styles/App.css';
// const data = [
//   {
//     value: '1',
//     label: 'Food',
//     children: [
//       {
//         label: 'All Foods',
//         value: '1',
//         disabled: false,
//       },
//       {
//         label: 'Chinese Food',
//         value: '2',
//       }, {
//         label: 'Hot Pot',
//         value: '3',
//       }, {
//         label: 'Buffet',
//         value: '4',
//       }, {
//         label: 'Fast Food',
//         value: '5',
//       }, {
//         label: 'Snack',
//         value: '6',
//       }, {
//         label: 'Bread',
//         value: '7',
//       }, {
//         label: 'Fruit',
//         value: '8',
//       }, {
//         label: 'Noodle',
//         value: '9',
//       }, {
//         label: 'Leisure Food',
//         value: '10',
//       }],
//   }, {
//     value: '2',
//     label: 'Supermarket',
//     children: [
//       {
//         label: 'All Supermarkets',
//         value: '1',
//       }, {
//         label: 'Supermarket',
//         value: '2',
//         disabled: true,
//       }, {
//         label: 'C-Store',
//         value: '3',
//       }, {
//         label: 'Personal Care',
//         value: '4',
//       }],
//   },
//   {
//     value: '3',
//     label: 'Extra',
//     isLeaf: true,
//     children: [
//       {
//         label: 'you can not see',
//         value: '1',
//       },
//     ],
//   },
// ];
//
// class MenuExample extends React.Component {
//   constructor(...args) {
//     super(...args);
//     this.state = {
//       initData: '',
//       show: false,
//     };
//   }
//   onChange(value) {
//     let label = '';
//     data.forEach((dataItem) => {
//       if (dataItem.value === value[0]) {
//         label = dataItem.label;
//         if (dataItem.children && value[1]) {
//           dataItem.children.forEach((cItem) => {
//             if (cItem.value === value[1]) {
//               label += ` ${cItem.label}`;
//             }
//           });
//         }
//       }
//     });
//     console.log(label);
//   }
//   handleClick(e) {
//     e.preventDefault(); // Fix event propagation on Android
//     this.setState({
//       show: !this.state.show,
//     });
//     // mock for async data loading
//     if (!this.state.initData) {
//       setTimeout(() => {
//         this.setState({
//           initData: data,
//         });
//       }, 500);
//     }
//   }
//
//   onMaskClick(){
//     this.setState({
//       show: false,
//     });
//   }
//
//   render() {
//     const { initData, show } = this.state;
//     const menuEl = (
//       <Menu
//         className="foo-menu"
//         data={initData}
//         value={['1', '3']}
//         onChange={(e)=>this.onChange(e)}
//         height={document.documentElement.clientHeight * 0.6}
//       />
//     );
//     const loadingEl = (
//       <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
//         <ActivityIndicator size="large" />
//       </div>
//     );
//     return (
//       <div className={show ? 'menu-active' : ''}>
//         <div>
//           <NavBar
//             leftContent="Menu"
//             mode="light"
//             icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
//             onLeftClick={(e)=>this.handleClick(e)}
//             className="top-nav-bar"
//           >
//             Here is title
//           </NavBar>
//         </div>
//         {show ? initData ? menuEl : loadingEl : null}
//         {show ? <div className="menu-mask" onClick={()=>this.onMaskClick()} /> : null}
//       </div>
//     );
//   }
// }
//
// export default MenuExample;


import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';

const data = [
  {
    value: '1',
    label: 'Food',
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
];

class MultiMenuExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
    };
  }
  onChange = (value) => {
    console.log(value);
  }
  onOk = (value) => {
    console.log(value);
    this.onCancel();
  }
  onCancel = () => {
    this.setState({ show: false });
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="single-multi-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        onOk={this.onOk}
        onCancel={this.onCancel}
        height={document.documentElement.clientHeight * 0.6}
        multiSelect
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'single-multi-menu-active' : ''}>
        <div>
          <NavBar
            leftContent="Menu"
            mode="light"
            onLeftClick={this.handleClick}
            className="single-multi-top-nav-bar"
          >
            Single Multi menu
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div>
    );
  }
}

export default MultiMenuExample;
