import React from 'react';
import { List, InputItem } from 'antd-mobile';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : {}
        };
    }

    handleChange = (event)=>{
        // console.log(this.refs.user.state.value);
        console.log(this.refs.password.value);
        console.log(event);
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;
        // // console.log(name);
        // //
        // this.setState({
        //     // Object.assign(user, {''});
        //     // Object.assign({}, ...this.state.user, [name]: value );
        //     // Object.assign(this.state.user, name : 'event' );
        //     user : Object.assign(this.state.user, {[name]: value} )
        // });
        // console.log(this.state.user);

    }

    handleSubmit = (event) => {
        console.log(event);
        alert('A name was submitted: ' + this.state.user.name);
        console.log('A name was submitted: ' + this.state.user.password);
        event.preventDefault();
    }

    render() {
        return (
            <List renderHeader={() => 'Confirm when typing'}>
                <form onSubmit={this.handleSubmit}>
                    <input ref="name" type="text" placeholder="please write your name"  onChange={this.handleChange} />
                    <input ref="password" type="password" placeholder="please write your password"  onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </form>
            </List>
        );
    }
}
export default NameForm;


// class Reservation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2
//         };
//     }
//
//     handleInputChange = (event) => {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//
//         this.setState({
//             [name]: value
//         });
//     }
//
//     handleSubmit = (event) => {
//         alert('A name was submitted: ' + this.state.numberOfGuests);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Is going:
//                     <input
//                         name="isGoing"
//                         type="checkbox"
//                         checked={this.state.isGoing}
//                         onChange={this.handleInputChange} />
//                 </label>
//                 <br />
//                 <label>
//                     Number of guests:
//                     <input
//                         name="numberOfGuests"
//                         type="number"
//                         value={this.state.numberOfGuests}
//                         onChange={this.handleInputChange} />
//                 </label>
//                 <InputItem type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
// export default Reservation;
