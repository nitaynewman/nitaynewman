import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './css/App.css';
import Navbar from './js/navbar';
import Footer from './js/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoolBg from "./js/bg/bg";
import Home from "./js/Home";
import Create from './js/Create';
import Classes from "./js/Classes";
import CardD from "./js/CardD";
import NotFound from "./js/NotFound";
import { createContext } from "react";
import { useState } from "react";
import ReactSwitch from 'react-switch';
import Vedio from "./js/UpLoad";
import SignUp from "./js/signup/SignUp.js";
import Comment from './js/comments/Comments'
export const ThemeContext = React.createContext(null);


function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' :'light'));
  };
 
  return ( 
    <ThemeContext.Provider value={{theme, ThemeContext, toggleTheme}}>
    <Router >
      <CoolBg className='bg-color'/>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
    
      <div className="App" id={ theme }>
      
      
      <Switch>
        <Route exact path='/'>
        
          <Home />
        </Route>
        <Route exact path='/Classes'>
          <Classes />
        </Route>
        <Route exact path='/Classes/:id'>
          <CardD />
        </Route>
        <Route exact path='/create'>
          <Create />
        </Route>
        <Route exact path='/Upload'>
          <Vedio />
        </Route>
        <Route exact path='/SignUp'>
          <SignUp />
        </Route>  
        <Route exact path='/comment'>
          <Comment />
        </Route>             
        <Route exact path='*'>
          <NotFound />
        </Route>
        
        
      </Switch>
      
      <Footer />
    </div>
    </Router>
  </ThemeContext.Provider>
    
  ); 
}
export default App;