import React, {Component} from 'react';
import Button from './Buttons';
import dcs from './dcs.png';
import "./styles.css";

class DCS extends Component {

    render() {
        return(
            // style={{ display: "flex", justifyContent: 'flex-center'}} className = "container"
            <div>
                <a href="https://www.neurocaregroup.com/">
                <Button theme="green"> 
                DCS Mobile 
                <img src={dcs} className="dcs"/>
                </Button>
                </a>
            </div>
        )
    }
}

export default DCS