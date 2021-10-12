import React from "react";
import "./Components.css";

export default function Items({props}){
    return (
        <>
            <div>
            <img className="logo" src={props.image} alt=""/>
                <p>{props.text}</p>
            </div>
        </>
    )
}