import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reducer from "../Reducer/Reducer";
import { Contexts } from '../App';

function Calc() {
    const { num1, setNum1, num2, setNum2, select, setSelect , res , setRes  } = useContext(Contexts)
    const [state, dispatch] = useReducer(Reducer, { resault: 0 })
    useEffect(() =>{
        setRes(state.resault)
    } , [state.resault])
    return (
        <Container style={{ gridGap: "30px", display: "grid" }}>
            <Form.Control type="text" placeholder='Brinchi soni kiriting' onChange={(e) => setNum1(e.target.value)} ></Form.Control>
            <Form.Select name="" id="" onChange={(e) => setSelect(e.target.value)}>
                <option>Tanlang</option>
                <option value="NUM_CALC_PLUS">+</option>
                <option value="NUM_CALC_MINUS">-</option>
                <option value="NUM_CALC_BOLUV">/</option>
                <option value="NUM_CALC_KOPAYTIRUV">*</option>
            </Form.Select>
            <Form.Control type="text" placeholder='Ikkinchi soni kiriting' onChange={(e) => setNum2(e.target.value)} ></Form.Control>
            <Button variant="primary" onClick={() => dispatch({type:  select , payloud: {num1 , num2}})}>Count</Button>
        </Container>
    )
}

export default Calc