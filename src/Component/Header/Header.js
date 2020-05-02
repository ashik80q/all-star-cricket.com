import React from 'react';
import log from '../../Images/log-3.png';
import  './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="img-container">
             <img src={log} alt=""/>
            </div>
            <div className="nav-container">
                <nav>
                    <a href="/player">PLAYERS</a>
                    <a href="/batting"> BATTING</a>
                    <a href="/bowler">BOWLER</a>
                    <a href="/all-rounder">All-ROUNDER</a>
                </nav>

            </div>
            
        </div>
    );
};

export default Header;