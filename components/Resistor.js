import React, { Component } from "react";
import Maintainance from "./Maintainance"
import Helmet from "react-helmet"

export default class Resistor extends Component {
  render() {
    return (
                <div>
                              <Helmet>      
            <title>Resistor Color Calculator</title>
            <meta name="Calculator for read resistor value" content="In this page you can calculate value of resistor based on color ring" />
            </Helmet>

                    <h4>Resistor Color Calculator</h4>

                    <Maintainance/>
                </div>
    );
  }
}
