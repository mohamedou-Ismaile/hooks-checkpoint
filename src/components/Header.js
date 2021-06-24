import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap';
export default class Header extends Component {
    render() {
        return (
            <>
  <Navbar bg="dark" variant="dark" className="fixed-top mb-3" >
    <Navbar.Brand href="#home" >
      
      React Bootstrap Check point
    </Navbar.Brand>
  </Navbar>
</>
        )
    }
}