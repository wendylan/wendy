import React from 'react';

// 第一种数字输入模式
// import { List, InputItem } from 'antd-mobile';
// import { createForm } from 'rc-form';
//
// class H5NumberInputExample extends React.Component {
//   state = {
//     type: 'money',
//   }
//   render() {
//     const { getFieldProps } = this.props.form;
//     const { type } = this.state;
//     return (
//       <div>
//         <List>
//           <InputItem
//             {...getFieldProps('money3')}
//             type={type}
//             placeholder="start from left"
//             clear
//             moneyKeyboardAlign="left"
//           >光标在左</InputItem>
//           <InputItem
//             type={type}
//             placeholder="start from right"
//             clear
//             onChange={(v) => { console.log('onChange', v); }}
//             onBlur={(v) => { console.log('onBlur', v); }}
//           >光标在右</InputItem>
//           <InputItem
//             {...getFieldProps('money2', {
//               normalize: (v, prev) => {
//                 if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
//                   if (v === '.') {
//                     return '0.';
//                   }
//                   return prev;
//                 }
//                 return v;
//               },
//             })}
//             type={type}
//             placeholder="money format"
//             ref={el => this.customFocusInst = el}
//             clear
//           >数字键盘</InputItem>
//           <List.Item>
//             <div
//               style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
//               onClick={() => this.customFocusInst.focus()}
//             >
//               click to focus
//             </div>
//           </List.Item>
//         </List>
//       </div>
//     );
//   }
// }
//
// const H5NumberInputExampleWrapper = createForm()(H5NumberInputExample);
// export default H5NumberInputExampleWrapper;

// 第二种输入模式
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

class BasicInputExample extends React.Component {
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.customFocusInst.focus();
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => 'Customize to focus'}>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="auto focus"
            ref={el => this.autoFocusInst = el}
          >标题</InputItem>
          <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder="click the button below to focus"
            ref={el => this.customFocusInst = el}
          >标题</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.handleClick}
            >
              click to focus
            </div>
          </List.Item>
        </List>

        <List renderHeader={() => 'Whether is controlled'}>
          <InputItem
            {...getFieldProps('control')}
            placeholder="controled input"
          >受控组件</InputItem>
          <InputItem
            placeholder="please input content"
            data-seed="logId"
          >非受控组件</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Click label to focus input'}>
          <InputItem
            placeholder="click label to focus input"
            ref={el => this.labelFocusInst = el}
          ><div onClick={() => this.labelFocusInst.focus()}>标题</div></InputItem>
        </List>

        <List renderHeader={() => 'Show clear'}>
          <InputItem
            {...getFieldProps('inputclear')}
            clear
            placeholder="displayed clear while typing"
          >标题</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Number of words for titlecds'}>
          <InputItem
            {...getFieldProps('label8')}
            placeholder="limited title length"
            labelNumber={5}
          >标题过长超过默认的5个字</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Custom title（text / image / empty)'}>
          <InputItem
            {...getFieldProps('input3')}
            placeholder="no label"
          />
          <InputItem
            {...getFieldProps('inputtitle2')}
            placeholder="title can be icon，image or text"
          >
            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Customize the extra content in the right'}>
          <InputItem
            {...getFieldProps('preice')}
            placeholder="0.00"
            extra="¥"
          >价格</InputItem>
        </List>

        <WhiteSpace />
        <List renderHeader={() => 'Format'}>
          <InputItem
            {...getFieldProps('bankCard', {
              initialValue: '8888 8888 8888 8888',
            })}
            type="bankCard"
          >银行卡</InputItem>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="186 1234 1234"
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="****"
          >密码</InputItem>
          <InputItem
            {...getFieldProps('number')}
            type="number"
            placeholder="click to show number keyboard"
          >数字键盘</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Not editable / Disabled'}>
          <InputItem
            value="not editable"
            editable={false}
          >姓名</InputItem>
          <InputItem
            value="style of disabled `InputItem`"
            disabled
          >姓名</InputItem>
        </List>
      </div>
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);
export default BasicInputExampleWrapper;
