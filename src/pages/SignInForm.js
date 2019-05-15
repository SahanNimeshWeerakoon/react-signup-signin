import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log('The signin form was submitted')
        console.log(this.state)
    }

    render() {
        return (
            <div className="form-center">
              {/* <form className="form-fields" onSubmit={this.handleSubmit}> */}
              <form className="form-fields" method="POST" onSubmit={this.handleSubmit}>
                <div className="form-field">
                  <label className="form-field-label" htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-field-input" placeholder="Enter Your Email Here" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="form-field">
                  <label className="form-field-label" htmlFor="password">Password</label>
                  <input type="password" id="password" className="form-field-input" placeholder="Enter Your Password Here" name="password" value={this.state.passowrd} onChange={this.handleChange} />
                </div>
                <div className="form-field">
                  <button type="submit" className="form-field-button mr-20">Sign In</button>
                  <Link exact to="/" className="form-field-link">Create an acount</Link>
                </div>
              </form>
            </div>
        )
    }
}

export default SignInForm