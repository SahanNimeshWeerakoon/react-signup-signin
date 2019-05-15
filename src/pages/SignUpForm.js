import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
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
              <form className="form-fields" methos="POST" onSubmit={this.handleSubmit}>
                <div className="form-field">
                  <label className="form-field-label" htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="form-field-input" placeholder="Enter Your Full Name" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="form-field">
                  <label className="form-field-label" htmlFor="password">Password</label>
                  <input type="password" id="password" className="form-field-input" placeholder="Enter Your Password Here" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="form-field">
                  <label className="form-field-label" htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-field-input" placeholder="Enter Your Email Here" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="form-field">
                  <label className="form-field-checkbox-label">
                    <input type="checkbox" className="form-field-checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} />
                    I agree all terms in <a href="#" className="form-field-terms-link">terms of service</a>
                  </label>
                </div>
                <div className="form-field">
                  <button className="form-field-button mr-20">Sign Up</button>
                  <Link to="/sign-in" exact className="form-field-link">I'm already a member</Link>
                </div>
              </form>
            </div>
        )
    }
}

export default SignUpForm