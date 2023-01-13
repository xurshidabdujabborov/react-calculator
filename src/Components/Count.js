import React, { useContext } from 'react'
import { Contexts } from '../App';


function Count() {
    const {res} = useContext(Contexts)
    return (
        <div>
            <h1 style={{ color: "green", fontSize: "30px" }}>Resault : {res}</h1>
        </div>
    )
}

export default Count