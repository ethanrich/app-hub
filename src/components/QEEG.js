import React, {Component} from 'react';
import Button from './Buttons';
import topo from './topo.png';
import "./styles.css";

class QEEG extends Component {

    render() {
        return(
            // style={{ display: "flex", justifyContent: 'flex-center'}} className = "container"
            <div>
                <a href="https://www.neurocaregroup.com/">
                <Button theme="orange"> 
                QEEG 
                <img src={topo} className="topo"/>
                </Button>
                </a>
            </div>
        )
    }
}

export default QEEG