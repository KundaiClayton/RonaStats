import React from 'react';
import './App.css';
import NavBar from './components/navigation/navBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './components/pages/About';
import Home from './components/pages/Home';
import Ranks from './components/pages/Rank'
import {Container,Row,Col,Card,Button} from "react-bootstrap"
import Footer from './components/navigation/Footer';
function App() {
  return (
    <div className="App page-container">
   
      <div className="content-wrap">
   
    <Router>
    <NavBar/>
      
      
      <Row>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route  path='/about' component={About}/>
            <Route  path='/rank' component={Ranks}/>
          </Switch>
        </Row>
    
    </Router>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
