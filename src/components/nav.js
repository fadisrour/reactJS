import React from "react";
import '../App.css';

function nav() {
    return (
        <div className="container mt-5 mx-5 text-center bg-black text-white px-5">
            <ul className="flex space-x-4">
                <li><a href="../">class</a></li>
                <li><a href="../Quizlink">Quiz</a></li>
                <li><a href="../login">Login</a></li>
            </ul>
        </div>
    );
}
export default nav;