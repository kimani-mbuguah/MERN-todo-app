import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
    

class Navbar extends Component {

    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <React.Fragment>
                <MDBNavItem>
                        <MDBNavLink to="/login">Login</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/register">Register</MDBNavLink>
                    </MDBNavItem>
            </React.Fragment>
            
        )
        const userLink = (
           
            <React.Fragment>
                 <MDBNavItem active>
                        <MDBNavLink to="/profile">User</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                    </MDBNavItem>
            </React.Fragment>
            
        )

        return (
            <MDBNavbar color="default-color" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Todo</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    {localStorage.usertoken ? userLink : loginRegLink}
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to="#!">
                        <MDBIcon fab icon="twitter" />
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to="#!">
                        <MDBIcon fab icon="google-plus-g" />
                        </MDBNavLink>
                    </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        )
    }
}

export default withRouter(Navbar)