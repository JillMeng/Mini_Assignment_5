import React from "react";
import { connect } from "react-redux";
import Box from "./Box";
import "./Box.css";


const ClickHandler = ({click}) => 
    <button onClick={click}></button>

const stpm = (state) => {}
const dtpm = (dispatch) => {
    return {
        click: () => {
            dispatch({type: "Cliked"})
        }
    }
}

export default connect(stpm, dtpm)(ClickHandler)