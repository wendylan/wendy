import React from 'react';

// 基本弹窗
// import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
//
// function closest(el, selector) {
//     const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
//     while (el) {
//         if (matchesSelector.call(el, selector)) {
//             return el;
//         }
//         el = el.parentElement;
//     }
//     return null;
// }
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modal1: false,
//             modal2: false,
//         };
//     }
//     showModal = key => (e) => {
//         e.preventDefault(); // 修复 Android 上点击穿透
//         this.setState({
//             [key]: true,
//         });
//     }
//     onClose = key => () => {
//         this.setState({
//             [key]: false,
//         });
//     }
//
//     onWrapTouchStart = (e) => {
//         // fix touch to scroll background page on iOS
//         if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
//             return;
//         }
//         const pNode = closest(e.target, '.am-modal-content');
//         if (!pNode) {
//             e.preventDefault();
//         }
//     }
//
//     render() {
//         return (
//         <WingBlank>
//             <Button onClick={this.showModal('modal1')}>basic</Button>
//             <WhiteSpace />
//             <Modal
//                 visible={this.state.modal1}
//                 transparent
//                 maskClosable={false}
//                 onClose={this.onClose('modal1')}
//                 title="Title"
//                 footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
//                 wrapProps={{ onTouchStart: this.onWrapTouchStart }}
//             >
//                 <div style={{ height: 100, overflow: 'scroll' }}>
//                     scoll content...<br />
//                     scoll content...<br />
//                     scoll content...<br />
//                     scoll content...<br />
//                     scoll content...<br />
//                     scoll content...<br />
//                 </div>
//             </Modal>
//
//             <Button onClick={this.showModal('modal2')}>popup</Button>
//             <WhiteSpace />
//             <Modal
//                 popup
//                 visible={this.state.modal2}
//                 maskClosable={false}
//                 animationType="slide-up"
//             >
//                 <List renderHeader={() => <div>委托买入</div>} className="popup-list">
//                     {['股票名称', '股票代码', '买入价格'].map((i, index) => (
//                     <List.Item key={index}>{i}</List.Item>
//                     ))}
//                     <List.Item>
//                         <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
//                     </List.Item>
//                 </List>
//             </Modal>
//         </WingBlank>
//         );
//     }
// }
// export default App;

// 警告弹窗
// import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
//
// const alert = Modal.alert;
//
// const showAlert = () => {
//     const alertInstance = alert('Delete', 'Are you sure???', [
//         { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
//         { text: 'OK', onPress: () => console.log('ok') },
//     ]);
//     setTimeout(() => {
//         // 可以调用close方法以在外部close
//         console.log('auto close');
//         alertInstance.close();
//     }, 500000);
// };
//
// const App = () => (
//     <WingBlank size="lg">
//         <WhiteSpace size="lg" />
//         <Button onClick={showAlert}>customized buttons</Button>
//
//         <WhiteSpace size="lg" />
//         <Button onClick={() => alert('Delete', 'Are you sure???', [
//             { text: 'Cancel', onPress: () => console.log('cancel') },
//             { text: 'Ok', onPress: () => console.log('ok') },
//         ])}
//         >confirm</Button>
//
//         <WhiteSpace size="lg" />
//         <Button onClick={() => alert('Much Buttons', <div>More than two buttons</div>, [
//             { text: 'Button1', onPress: () => console.log('第0个按钮被点击了') },
//             { text: 'Button2', onPress: () => console.log('第1个按钮被点击了') },
//             { text: 'Button3', onPress: () => console.log('第2个按钮被点击了') },
//         ])}
//         >more than two buttons</Button>
//
//         <WhiteSpace size="lg" />
//
//         <Button onClick={() => alert('Delete', 'Are you sure???', [
//             { text: 'Cancel', onPress: () => console.log('cancel') },
//             {
//                 text: 'Ok',
//                 onPress: () => new Promise((resolve) => {
//                     Toast.info('onPress Promise', 1);
//                     setTimeout(resolve, 1000);
//                 }),
//             },
//         ])}
//         >promise</Button>
//
//         <WhiteSpace size="lg" />
//     </WingBlank>
// );
//
// export default App;

// 输入弹窗
// import { Modal, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';
//
// const prompt = Modal.prompt;
//
// const App = () => (
//     <WingBlank size="lg">
//         <WhiteSpace size="lg" />
//             <Button onClick={() => prompt('input name', 'please input your name',
//             [
//             { text: 'Cancel' },
//             {
//             text: 'Submit',
//             onPress: value => new Promise((resolve) => {
//                 Toast.info('onPress promise', 1);
//                 setTimeout(() => {
//                     resolve();
//                     console.log(`value:${value}`);
//                 }, 1000);
//             }),
//             },
//             ], 'default', null, ['input your name'])}
//             >
//             promise
//         </Button>
//
//         <WhiteSpace size="lg" />
//         <Button onClick={() => prompt('defaultValue', 'defaultValue for prompt', [
//         { text: 'Cancel' },
//         { text: 'Submit', onPress: value => console.log(`输入的内容:${value}`) },
//         ], 'default', '100')}
//         >defaultValue</Button>
//
//         <WhiteSpace size="lg" />
//         <Button onClick={() => prompt(
//         'Password',
//         'Password Message',
//         password => console.log(`password: ${password}`),
//         'secure-text',
//         )}
//         >secure-text</Button>
//
//         <WhiteSpace size="lg" />
//         <Button onClick={() => prompt(
//         'Password',
//         'You can custom buttons',
//         [
//         { text: '取消' },
//         { text: '提交', onPress: password => console.log(`密码为:${password}`) },
//         ],
//         'secure-text',
//         )}
//         >custom buttons</Button>
//
//         <WhiteSpace size="lg" />
//         <Button onClick={() => prompt(
//         'Login',
//         'Please input login information',
//         (login, password) => console.log(`login: ${login}, password: ${password}`),
//         'login-password',
//         null,
//         ['Please input name', 'Please input password'],
//         )}
//         >login-password</Button>
//
//         <WhiteSpace size="lg" />
//     </WingBlank>
// );
//
// export default App;

// 操作弹窗
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';

const operation = Modal.operation;

const App = () => (
    <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Button onClick={() => operation([
            { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
            { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
        ])}
        >
            operation
        </Button>
        <WhiteSpace size="lg" />
    </WingBlank>
);

export default App;
