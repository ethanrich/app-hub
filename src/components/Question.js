import React, {Component} from 'react';
import Button from './Buttons';
import hand from './hand.png';
import "./styles.css";

class Ques extends Component {

    render() {
        return(
            // style={{ display: "flex", justifyContent: 'flex-center'}} className = "container"
            <div>
                <a href="https://www.neurocaregroup.com/">
                <Button theme="blue"> 
                Questionnaires 
                <img src={hand} className="hand"/>
                </Button>
                </a>
            </div>
        )
    }
}

export default Ques