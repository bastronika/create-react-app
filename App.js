import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from 'react-helmet'


//import Sidebar from "./components/Sidebar.js";
import Ne555 from "./components/Ne555";
import Resistor from "./components/Resistor";
import Voltagedivider from "./components/VoltageDivider";
import Led from "./components/Led";
import Opamp from "./components/Opamp";
import Filters from "./components/Filters";
import Pesangon from "./components/Pesangon";
import Dashboard from "./components/Dashboard";


import { BrowserRouter as Router, Route } from "react-router-dom";


import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

import { GiElectricalResistance, GiMoneyStack } from "react-icons/gi";
import {
  FaRegLightbulb,
  FaMicrochip,
  FaWaveSquare,
  FaChartBar,
  FaFilter,
  FaHome
} from "react-icons/fa";
import { IoMdFlash } from "react-icons/io";

import { IconContext } from "react-icons";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Electronics System Calculator</title>
        <meta name="Calculator for many electronics circuits" content="This site provide NE555 Calculator, Voltage Divider Calculator, LED Resistor Calculator, OP Amp Calculator, and so many other electronics calculator" />
      </Helmet>
      <Router>
        <Route
          render={({ location, history }) => (
            <React.Fragment>
              <SideNav className="sidenav-style"
                onSelect={selected => {
                  const to = "/" + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <Toggle />
                <Nav defaultSelected="home">
                  <NavItem eventKey="home">
                    <NavIcon>
                      <IconContext.Provider value={{ size: "2em" }}>
                        <FaHome />
                      </IconContext.Provider>
                    </NavIcon>
                    <NavText>Home</NavText>
                  </NavItem>

                  <NavItem eventKey="NE555">
                    <NavIcon>
                      <IconContext.Provider value={{ size: "2em" }}>
                        <FaWaveSquare />
                      </IconContext.Provider>
                    </NavIcon>
                    <NavText>NE555</NavText>
                  </NavItem>

                  <NavItem eventKey="voltagedivider">
                    <NavIcon>
                      <IconContext.Provider value={{ size: "2em" }}>
                        <IoMdFlash />
                      </IconContext.Provider>
                    </NavIcon>
                    <NavText>Voltage Divider</NavText>
                  </NavItem>

                  <NavItem eventKey="led">
                    <NavIcon>
                      <IconContext.Provider value={{ size: "2em" }}>
                        <FaRegLightbulb />
                      </IconContext.Provider>
                    </NavIcon>
                    <NavText>LED Calculator</NavText>
                  </NavItem>

                  <NavItem eventKey="opamp">
                    <NavIcon>
                      <IconContext.Provider value={{ size: "2em" }}>
                        <FaMicrochip />
                      </IconContext.Provider>
                    </NavIcon>
                    <NavText>OP-amp Calculator</NavText>
                  </NavItem>

                  <NavItem eventKey="resistor">
                    <NavIcon>
                      <IconContext.Provider value={{ size: "3em" }}>
                        <GiElectricalResistance />
                      </IconContext.Provider>
                    </NavIcon>
                    <NavText>Resistor</NavText>
                  </NavItem>

                  <NavItem eventKey="filters">
                    <NavIcon>
                      <IconContext.Provider value={{ size: "2em" }}>
                        <FaFilter />
                      </IconContext.Provider>
                    </NavIcon>
                    <NavText>Filters</NavText>
                  </NavItem>

                  <NavItem eventKey="pesangon">
                    <NavIcon>
                      <IconContext.Provider value={{ size: "3em" }}>
                        <GiMoneyStack />
                      </IconContext.Provider>
                    </NavIcon>
                    <NavText>Pesangon</NavText>
                  </NavItem>


                  <NavItem eventKey="dashboard">
                    <NavIcon>
                      <IconContext.Provider value={{ size: "3em" }}>
                        <GiMoneyStack />
                      </IconContext.Provider>
                    </NavIcon>
                    <NavText>Dashboard</NavText>
                  </NavItem>

                  <NavItem eventKey="charts">
                    <NavIcon>
                      <IconContext.Provider value={{ size: "2em" }}>
                        <FaChartBar />
                      </IconContext.Provider>
                    </NavIcon>
                    <NavText>Charts</NavText>
                    <NavItem eventKey="charts/linechart">
                      <NavText>Line Chart</NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                      <NavText>Bar Chart</NavText>
                    </NavItem>
                  </NavItem>
                </Nav>
              </SideNav>

              <main>
                <Route path="/" exact component={props => <Home />} />

                <Route path="/home" exact component={props => <Home />} />

                <Route path="/NE555" exact component={props => <Ne555 />} />
                <Route path="/resistor" component={props => <Resistor />} />
                <Route path="/opamp" exact component={props => <Opamp />} />
                <Route path="/led" component={props => <Led />} />
                <Route path="/filters" component={props => <Filters />} />
                <Route path="/pesangon" component={props => <Pesangon />} />
                <Route path="/dashboard" component={props => <Dashboard />} />
                <Route
                  path="/voltagedivider"
                  component={props => <Voltagedivider />}
                />
              </main>
              <Footer />
            </React.Fragment>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
