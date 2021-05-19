
import './App.css';
import Inputs from "./components/inputs.js";
import Button from "./components/button.js";
import Nav from "./components/nav.js";


function App() {
  return (
    <div>
      <Nav />

      <div className="container mt-5 mx-5 text-center flex">
        <Inputs type="number" placeholder="Enter Class Name" />
        <Button text="Add" />
      </div>
    </div>
  );
}

export default App;
