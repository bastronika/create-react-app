import React, { Component } from 'react'
import Maintainance from "./Maintainance"
import Helmet from "react-helmet"

export default class Filters extends Component {
    render() {
        return (
            <div>
            <Helmet>      
            <title>Electronics Filters Calculator</title>
            <meta name="Calculator for design filters" content="In this page you can calculate component of electronics filter in simple way" />
            </Helmet>
                <h4>Filters Calculator</h4>
                <Maintainance/>
            </div>
        )
    }
}
