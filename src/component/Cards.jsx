import React from "react";
import "./MyApp.css"
export const Cards = Props =>{
    return(
    <div className="container">
    <div className="ImageContainer">
    <img className="Image" src={Props.data.image} alt='productimage'></img>
    <div className="discount">{Props.data.discount}</div>
    <img className="like" alt='like' src={Props.data.like}></img>
    </div>
    <div className="price-title">
    <h3 className="title">{Props.data.title}</h3>
    <h3 className="price">{Props.data.price}</h3>
    </div>
    <p className="marked">{Props.data.marked}</p>
    <div className="color1">
        <span class="dot1"></span>
        <span class="dot2"></span>
        <span class="dot3"></span>
    </div>
    <div className="color">
        <span class="dot11">S</span>
        <span class="dot22">M</span>
        <span class="dot33">L</span>
    </div>
    <div className="button">
    <button className="description">{Props.data.description}</button>
    <img className="plus" src={Props.data.add} alt="" />
    </div>
    </div>
    );
}
