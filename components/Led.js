import React, { Component } from 'react'
import Maintainance from "./Maintainance"
import Helmet from "react-helmet"

export default class Led extends Component {
    render() {
        return (
            <div>
            <Helmet>      
            <title>LED Resistor Calculator</title>
            <meta name="Calculator for design LED circuit" content="In this page you can calculate resistor for LED circuit" />
            </Helmet>
                <h4>LED Resistor Calculator</h4>
                <Maintainance />
            </div>
        )
    }
}
