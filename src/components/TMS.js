import React, {Component} from 'react';
import Button from './Buttons';
import tms from './tms.png';
import "./styles.css";

class TMS extends Component {

    render() {
        return(
            // style={{ display: "flex", justifyContent: 'flex-center'}} className = "container"
            <div>
                <a href="https://www.neurocaregroup.com/">
                <Button theme="violet"> 
                rTMS
                <img src={tms} className="tms"/>
                </Button>
                </a>
            </div>
        )
    }
}

export default TMS