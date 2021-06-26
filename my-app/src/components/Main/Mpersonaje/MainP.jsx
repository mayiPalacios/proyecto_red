import React, { Component } from 'react'
import Pic1 from '../../../IMG/pngegg (1).png'
import Pic2 from '../../../IMG/pngegg (2).png'
import Pic3 from '../../../IMG/pngegg (3).png'
import Pic4 from '../../../IMG/pngegg (4).png'
import Pic5 from '../../../IMG/pngegg (5).png'
import Pic6 from '../../../IMG/pngegg (6).png'
import Pic7 from '../../../IMG/pngegg (7).png'
import Pic8 from '../../../IMG/pngegg (8).png'
import Pic9 from '../../../IMG/pngegg (9).png'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
class MainP extends Component{
    render(){
        return(
            <main className="MainP">
            <button><Link to="/Blog">REGRESAR</Link></button>  
            <div   className="Orden">
                  <span className="bnvP">
                     <img src={Pic1} alt=""  className="Tamano" />
                     <h3>Mikasa Ackerman</h3>
                  </span>
                  <span className="bnvP">
                      <img src={Pic2} alt=""  className="Tamano"/>
                      <h3>Eren Jaeger</h3>
                  </span>

                  <span className="bnvP">
                  <img src={Pic3} alt=""  className="Tamano"/>
                      <h3>Levi Ackerman</h3>
                  </span>
            </div>
            <div  className="Orden">
                       <span className="bnvP">
                       <img src={Pic4} alt=""  className="Tamano"/>
                       <h3>Armin Arlert</h3>
                       </span>
                       <span className="bnvP"><img src={Pic5} alt=""  className="Tamano"/>
                       <h3>Hanji Zoë</h3>
                       </span>
                       <span className="bnvP"><img src={Pic6} alt=""  className="Tamano"/>
                       <h3>Titan</h3>
                       </span>
                   </div>
                   <div  className="Orden">
                       <span className="bnvP">
                       <img src={Pic7} alt=""  className="Tamano"/>
                       <h3>Erwin Smith</h3>
                       </span>
                       <span className="bnvP"><img src={Pic8} alt=""  className="Tamano"/>
                       <h3>Jean Kirschtein</h3>
                       </span>
                       <span className="bnvP"><img src={Pic9} alt=""  className="Tamano"/>
                       <h3>Historia Reiss</h3>
                       </span>
                   </div>
        </main>

        );
    }
}
export default MainP