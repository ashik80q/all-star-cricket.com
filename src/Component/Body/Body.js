import React, { useState } from 'react';
import './Body.css';
import FackeData from '../../FackData';
import Players from '../Players/Players';
import TeamCart from '../Teme-Cart/TeamCart';


const Body = () => {

  const data = FackeData.slice(0,15);
  const [player, setPlayer] = useState(data);

  const  [cart, setCart] =  useState([]);

  const henderleAddPlayers = (players) =>{
    // console.log("playes added", players);
  
    
      const newCart = [...cart, players];
      // console.log('newcart  name:',newCart.name);
      
      setCart(newCart);
     
      
    
  } 
  
  
    return (
        <div className="mine-container">
          <div className="left-container">
          {player.map(ply => <Players 
          player={ply}
          henderleAddPlayers = {henderleAddPlayers}
          ></Players>)}
          </div>
          <div className='right-container'>
           <TeamCart cart ={cart}>
             
             

           </TeamCart>
          </div>
            
        </div>
    );
};

export default Body;