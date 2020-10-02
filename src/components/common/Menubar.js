import React, { Component } from 'react';
import {Link,withRouter} from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import "./common.css"

class Menubar extends Component {
    state = { }

    render() { 
        // console.log(rawData)
        return ( 
           <div>
               <div>
                  <IconButton data-toggle="collapse" data-target="#collapse1"><MenuIcon className="menuicon"/></IconButton>
               </div>
           </div>
         );
    }
}
 
export default withRouter(Menubar)