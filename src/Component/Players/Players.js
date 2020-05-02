import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import './Players.css';
import player from '../../FackData/batting';

const Players = (props) => {
    //  console.log(props);
    
    const {name, country, img, role, runs, wickets, price} =props.player;

    
    return (
        <div className="player-container">
            <div className="image-container">
             <img src={img} alt=""/>
            </div>
           <div className="data-container">
             <h3>Name: {name}.</h3>
            <h4>Country: {country}.</h4>
            <h4>Role: {role}.</h4>
            <h4>Runs: {runs}.</h4>
            <h4>Wickers:{wickets}.</h4>
            <h4>Price: {price} BDT.</h4>
            <button onClick={() =>props.henderleAddPlayers(props.player)}><FontAwesomeIcon icon={faPlusSquare} /> Add To Team</button>
           </div>
        </div>
    );
};

export default Players;