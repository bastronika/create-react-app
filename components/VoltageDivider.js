import React, { Component } from "react";
import gambar from "./assets/voltagedivider.png";
import {Button, Form, Col, Card, Container, Row} from "react-bootstrap"
import Formula from "./Formula"
import Helmet from "react-helmet"

function calculate() {
  var vin = Number(document.getElementById("vin").value);
  var vout = Number(document.getElementById("vout").value);
  var r1 = Number(document.getElementById("r1").value);
  var r2 = Number(document.getElementById("r2").value);

  if (!vout) {
    vout = (r2 / (r1 + r2)) * vin;
    //document.getElementById("display").innerHTML = "Vout = " + vout;
    document.getElementById("vout").placeholder = vout;
  } else if (!vin) {
    vin = vout * ((r1 + r2) / r2);
    //document.getElementById("display").innerHTML = "Vin = " + vin;
    document.getElementById("vin").placeholder = vin;
  } else if (!r2 && !r1) {
    r2 = 10000;
    r1 = (r2 * (vin - vout)) / vout;
    //document.getElementById("display").innerHTML = "R1 = " + r1 + "<br> R2 = "+ r2;
    //document.getElementById("display").innerHTML = "R2 & R1 Kosong ";
    document.getElementById("r1").placeholder = r1;
    document.getElementById("r2").placeholder = r2;
  } else if (!r2) {
    r2 = (vout * r1) / (vin - vout);
    //document.getElementById("display").innerHTML = "R2 = " + r2;
    document.getElementById("r2").placeholder = r2;
  } else if (!r1) {
    r1 = (r2 * (vin - vout)) / vout;
    //document.getElementById("display").innerHTML = "R1 = " + r1;
    document.getElementById("r1").placeholder = r1;
  } else {
    document.getElementById("display").innerHTML = "isi dengan benar, baca petunjuk!!";
  }
}

export default class VoltageDivider extends Component {
  render() {

    return (
      <div>
      <Helmet>      
      <title>Voltage Divider Calculator</title>
      <meta name="Calculator for voltage divider circuit" content="In this page you can calculate input, output, or component of voltage divider" />
      </Helmet>
        <h4> Voltage Divider Calculator</h4>
        <br></br>
        <Container>
          <Row>
            <Col><img src={gambar} className="voltagedividerimage" alt="NE555" /></Col>
            <Col className="voltagedivider-text" >We can calculate the output voltage with voltage divider equation below.<br></br>
            <Formula text={'`V_{Out}=(R1)/(R1+R2) * V_{In}`'}/>
            <br></br>
            You can use the voltage divider calculator below to calculate Vout, Vin, R1, R2, or R1 and R2. Simply clear the value you want to calculate.
            </Col>
          </Row>          
          </Container>  

        <Card body>
          <Card.Header>Voltage Divider Calculator</Card.Header>
          <Form>
            <Form.Row>
              <Form.Group as={Col} md="3" controlId="formVin">
                <Form.Label>V input (V)</Form.Label>
                <Form.Control id="vin" type="number" placeholder="Vin" />
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="formR1">
                <Form.Label>R1 (Ohm)</Form.Label>
                <Form.Control id="r1" type="number" placeholder="R1" />
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="formR2">
                <Form.Label>R2 (Ohm)</Form.Label>
                <Form.Control id="r2" type="number" placeholder="R2" />
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="formvout">
                <Form.Label>V Output (V)</Form.Label>
                <Form.Control id="vout" type="number" placeholder="Vout" />
              </Form.Group>
            </Form.Row>
          </Form>

          <Button onClick={calculate} variant="primary" type="calculate">
            Calculate
          </Button>

          <br></br>
          <br></br>
          <h5 id="display"> </h5>
          <br></br>
        </Card>
      </div>
    );
  }
}
