import React, {Component} from 'react';
import Button from './Buttons';
import sleep from './sleep.png';
import "./styles.css";

class Sleep extends Component {

    render() {
        return(
            // style={{ display: "flex", justifyContent: 'flex-center'}} className = "container"
            <div>
                <a href="https://www.neurocaregroup.com/">
                <Button theme="red" > 
                Sleep 
                <img src={sleep} className="sleep"/>
                </Button>
                </a>
            </div>
        )
    }
}

export default Sleep