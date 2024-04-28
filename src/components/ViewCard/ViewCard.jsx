import React from "react";
import { useSelector } from "react-redux";
import DisplayCards from '.../pages/CardStack'; 

function ViewCard() {
    const card = useSelector((state) => { return state.card })

    return (
        <h2>Kortet är: { DisplayCards }</h2>
    )
}

export default ViewCard; 

