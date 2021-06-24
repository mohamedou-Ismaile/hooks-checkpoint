import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
export default class Footeer extends Component {
    render() {
        return (
           
            <Card.Footer className="text-muted  bg-dark fixed-bottom">All right reserved ©</Card.Footer>
           
        )
    }
}