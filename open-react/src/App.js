import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import Route from 'react-router-dom/Route'
import { BrowserRouter } from 'react-router-dom'
import SignUp from '../src/components/sections/SignUp';
// Layouts
import SigIn from '../src/components/sections/SignIn'
import LayoutDefault from './layouts/LayoutDefault';
import Home2 from './views/Home2';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
      


  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <Route exact path="/SIGNUP" component ={SignUp} />
          <Route exact path="/SIGNIN" component={SigIn }/>
          <Route exact path="/SALUDOS" component={Home2}/>
        </Switch>
        
      )} />
  );
}

export default App;