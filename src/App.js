import React, { useReducer, useState } from "react";
import Calc from "./Components/Calc";
import Count from "./Components/Count";

export const Contexts = React.createContext()

function App() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [select, setSelect] = useState("")
  const [res, setRes] = useState(0)
  return (
    <Contexts.Provider value={{ num1, setNum1, num2, setNum2, select, setSelect, res, setRes }}>
      <div className="App" style={{ textAlign: "center" }}>
        <h1 style={{margin: "20px"}}>useReducer and useContext calculator</h1>
        <Count /> 
        <Calc />  
      </div>
    </Contexts.Provider>
  );
}

export default App;
