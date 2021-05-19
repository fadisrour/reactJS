import React from "react";
import '../App.css';




function button(props) {
    return (
        <button className="bg-blue-800 px-3 text-white ml-2 rounded">{props.text}</button>
    );
}
export default button;