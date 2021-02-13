import React from 'react'
import './App.css';
import { Navbar } from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Slider} from './components/Slider'
import { Footer } from './components/Footer';
import { FirstPage } from './components/FirstPage';
import AnimatedCursor from 'react-animated-cursor'
import SecondPage from './components/SecondPage';

function App() {
  return (
    <div>
    <AnimatedCursor
        innerSize={17}
        outerSize={17}
        color='3, 72, 144'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    <Router>
    <div className="App">
      <Navbar/>
      <Slider/>
      <Switch>
       <Route path='/' exact  component={FirstPage} />
       <Route path='/contact' component={SecondPage} />
      </Switch>
     <Footer/>
    </div>
    </Router>
    </div>
  );
}

export default App;
