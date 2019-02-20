import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { register } from './UserFunctions';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                    <form noValidate onSubmit={this.onSubmit}>
                        <p className="h5 text-center mb-4">Sign up</p>
                        <div className="grey-text">
                        <MDBInput
                            label="Firt Name"
                            name="first_name"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            value={this.state.first_name}
                                                onChange={this.onChange}
                        />

                            <MDBInput
                            label="Last Name"
                            name="last_name"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            value={this.state.last_name}
                                                onChange={this.onChange}
                        />
                        <MDBInput
                            label="Your email"
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
                            label="Your password"
                            name="password"
                            icon="lock"
                            value={this.state.password}
                                                onChange={this.onChange}
                            group
                            type="password"
                            validate
                        />
                        </div>
                        <div className="text-center">
                        <MDBBtn color="primary" type="submit">Register</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>     
        )
    }
}

export default Register