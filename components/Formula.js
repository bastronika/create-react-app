import React, { Component } from 'react'
import MathJax from 'react-mathjax-preview'
 
export default class Formula extends Component {
    constructor(props) {
        super(props);
        this.state = {
          math: props.text
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <MathJax math={this.state.math} />
            </div>
        )
    }
}







