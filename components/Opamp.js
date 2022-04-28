import React, { Component } from 'react'
import Maintainance from "./Maintainance"
import Helmet from "react-helmet"


export default class Opamp extends Component {
    render() {
        return (
            <div>
            <Helmet>      
            <title>Operational Amplifier Calculator</title>
            <meta name="Calculator for design amplifier" content="In this page you can calculate component for design amplifiers circuit" />
            </Helmet>
                <h4>Operational Amplifier Calculator</h4>
                <Maintainance/>
            </div>
        )
    }
}
