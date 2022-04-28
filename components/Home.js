import React, { Component } from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Ne555 from './Ne555'
import VoltageDivider from './VoltageDivider'
import Led from './Led'
import Opamp from './Opamp'
import Resistor from './Resistor'
import Filters from './Filters'
import Pesangon from './Pesangon'
import Helmet from "react-helmet"


export default class Home extends Component {
    render() {
        return (
            <div>
            <Helmet>
            <title>Bastronika</title>
            <meta name="Electronics tools for engineers" content="This site provide NE555 Calculator, Voltage Divider Calculator, LED Resistor Calculator, OP Amp Calculator, and so many other electronics calculator" />
            </Helmet>
            <Link to="/NE555/">NE555</Link> | 
            <Link to="/voltagedivider/">Voltage Divider</Link> |
            <Link to="/led/">LED Resistor</Link> | 
            <Link to="/opamp/">Operational Amplifier</Link> |
            <Link to="/resistor/">Resistor</Link> | 
            <Link to="/filters/">Filters</Link> |
            <Link to="/pesangon/">Pesangon</Link> | 
            <Switch>
              <Route path='/NE555/' component={Ne555} />
              <Route path='/voltagedivider/' component={VoltageDivider} />
              <Route path='/led/' component={Led} />
              <Route path='/opamp/' component={Opamp} />
              <Route path='/resistor/' component={Resistor} />
              <Route path='/filters/' component={Filters} />
              <Route path='/pesangon/' component={Pesangon} />
            </Switch>
            <br></br>
            <h3>Electronics Tools For Engineers</h3>
            <br></br>
            <p>This site provide NE555 Calculator, Voltage Divider Calculator, LED Resistor Calculator, OP Amp Calculator, and so many other electronics calculator</p>
          </div>
        )
    }
}

