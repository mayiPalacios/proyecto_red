import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class MainB extends Component {

    render(){
        return(
         
              <main className="MainB">
                  <div className="bnv">
                 <div className="bnv-1"> <h1 className="saludo"> BIENVENID@S XXXXXXX</h1></div> 
                <Link to="/Personaje" className="bvn-2-bttn"  ><h2  className="hPersonaje" >ver personajes</h2></Link>
                 
                <Link to="/Login" className="bvn-2-bttnS"  ><h2  className="hPersonajeS" > poder salir </h2></Link>
                  </div>
                
              </main>
              
          
        );
      
    }
}
export default MainB