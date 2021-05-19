import React from "react";

import '../App.css';



function inputs(props) {
    return (
        <input className="flex item-center border border-black rounded px-3" type={props.type} placeholder={props.placeholder} />
    );
}
export default inputs;