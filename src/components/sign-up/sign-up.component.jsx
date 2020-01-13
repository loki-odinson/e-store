import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState();
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState(
            {[name]: value}
        );
    }

    render() {
        return (
            <div className="sign-up">
                <h2>I don't have an account</h2>
                <span>Sign up with your email and password.</span>

                <form>
                    <FormInput
                        name="displayName"
                        type="text"
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput 
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput 
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton className="sign-up-button">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;