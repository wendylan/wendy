import React from 'react';
import { InputItem } from 'antd-mobile';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : {}
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange = (event) => {
    //     // console.log(event);
    //     // console.log(this.state.user);
    //     this.setState({
    //         user : {
    //             name : event,
    //             password : ''
    //         }
    //     });
    //     console.log(this.state.user.name);
    // }

    handleChange = (event)=>{
        // console.log(event);
        // this.setState({user.password : event});
        const target = event.target;
        const value = target.value;
        const name = target.name;
        // console.log(name);
        //
        this.setState({
            // Object.assign(user, {''});
            // Object.assign({}, ...this.state.user, [name]: value );
            // Object.assign(this.state.user, name : 'event' );
            user : Object.assign(this.state.user, {[name]: value} )
        });
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
            <form onSubmit={this.handleSubmit}>
                <input name="name" type="text" placeholder="please write your name"  onChange={this.handleChange} />
                <input name="password" type="password" placeholder="please write your password"  onChange={this.handleChange} />

                <input type="submit" value="Submit" />
            </form>
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
