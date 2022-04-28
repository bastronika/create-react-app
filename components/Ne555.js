import React, { Component } from "react";
import gambar from "./assets/ne555.png";
import Formula from "./Formula";
import {Button, Form, Col, Card, Container, Row} from "react-bootstrap";
import Helmet from "react-helmet"

function calculate() {
  var d = Number(document.getElementById("D").value);
  var f = Number(document.getElementById("F").value);
  var c = Number(document.getElementById("C").value / 1000000);
  var ratio = (100 - d) / (d * 2 - 100);
  var ra = 1.44 / ((c +(2 * c * ratio)) * f);
  var rb = ra * ratio;

  document.getElementById("Ra").innerHTML = "RA = " + ra;
  document.getElementById("Rb").innerHTML = "RB = " + rb;
}

export default class Ne555 extends Component {
  render() {
    return (
      <div>
            <Helmet>      
            <title>NE555 Calculator</title>
            <meta name="Calculator for design NE555 astable multivibrator" content="In this page you can calculate value of part you need in NE555 circuit" />
            </Helmet>
      <h4>NE555 Astable Multivibrator</h4>
     <br></br>
          <Container>
          <Row>
            <Col><img src={gambar} className="ne555-gambar" alt="NE555" /></Col>
            <Col className="ne555-text" >We can calculate the output period and frequency with formula based on NE555 datasheet.<br></br>       
            <Formula text={'`t_{h}=0.693(R_{A}+R_{B})`<br><br>`t_{L}=0.693(R_{B})C`<br><br>`T = 0.693(R_{A}+2R_{B})C`<br></br>`f = 1.44/((R_{A}+2R_{B})C)`'}/>
            <br></br>
            You can use calculator below to calculate Ra and Rb to achieve frequency and duty cycle you desired. 
            Use capacitor with value that are available in the market.
            </Col>
          </Row>          
          </Container>   
        <br></br>
        <Card body>
          <Card.Header>NE555 Calculator</Card.Header>
          <Form>
            <Form.Row>

              <Form.Group as={Col} md="4" controlId="formBasicFrequency">
                <Form.Label>Frequency (Hz)</Form.Label>
                <Form.Control id="F" type="number" placeholder="frequency" />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="formBasicDutyCycle">
                <Form.Label>Duty Cycle (must more than 50%)</Form.Label>
                <Form.Control id="D" type="number" placeholder="duty cycle" />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="formBasicCapacitor">
                <Form.Label>Capacitor you have (uF)</Form.Label>
                <Form.Control
                  id="C"
                  type="number"
                  placeholder="Capacitor Value"
                />
              </Form.Group>
            </Form.Row>
          </Form>

          <Button onClick={calculate} variant="primary" type="calculate">
            Calculate
          </Button>

          <br></br>
          <br></br>
          <h5 id="Ra"> </h5>
          <br></br>
          <h5 id="Rb"> </h5>
        </Card>

      </div>
    );
  }
}
