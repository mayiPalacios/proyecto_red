import React from 'react'
import Login from '../src/pages/login/Login'
import Blog from '../src/pages/blog/blog'
import './index.scss' 
import Personaje from '../src/pages/personajes/Personajes'
import Registro from  '../src/pages/registro/Registro'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom' 
import { useLocation, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
         <BrowserRouter>
           <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Registro" component={Registro} />
          <Route exact path="/Personaje" component={Personaje}/>
          <Route exact path="/Blog" component={Blog} />
          </Switch>
          </BrowserRouter>
  
  );
}

export default App;
