import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { login } from './UserFunctions';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/profile`)
            }
        })
    }

    render () {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                    <form noValidate onSubmit={this.onSubmit}>
                        <p className="h5 text-center mb-4">Sign in</p>
                        <div className="grey-text">
                        <MDBInput
                            label="Enter your email"
                            name="email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                            value={this.state.email}
                                                onChange={this.onChange}
                        />
                        <MDBInput
                            label="Enter your password"
                            name="password"
                            icon="lock"
                            group
                            type="password"
                            validate
                            value={this.state.password}
                                                onChange={this.onChange}
                        />
                        </div>
                        <div className="text-center">
                        <MDBBtn type="submit">Login</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Login