import React from 'react';

function Hello(props) {

    function Clickme() {
        alert("Clicked")
    }

    return(
        <div>
            <h1>{props.name} {props.lastname}</h1>
            <button onClick = {Clickme}>Click ME</button>
        </div>
    )
}

export default Hello;