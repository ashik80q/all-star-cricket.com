import React from 'react';
import player from '../../FackData/batting';
import './TeamCart.css';

const TeamCart = (props) => {
    const cart = props.cart;
   let total =cart.reduce((total,ply) => total = total + ply.price,0);


   
  
    return (
        <div className="cart-container">
            <div className="container-1">
            <h2>Total {cart.length} Players. </h2>
               <h2> Total Cost {total} BDT.</h2>
            </div>
            <div >
            {cart.map(plyLis => <Addplay  listPly={plyLis}></Addplay>)}
            </div>
               
               
            
        </div>
    );


    
};
function Addplay(props){
    
    const {name,role, price,img} =props.listPly;
 
    
    return(
        <div className="container-2">
            <div className="ply-image">
            <img style={{"width":"120px","height":"120px"}} src={img} alt=""/>
            </div>
           <div className="ply-details">
            <h3>Name:{name}</h3>
            <h3>Role:{role}. </h3>
            <h3>price:{price} BDT.</h3>
           </div>
            
        </div>
    )
} 

export default TeamCart;