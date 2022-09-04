import userEvent from '@testing-library/user-event';
import React from 'react';
import { useEffect } from 'react';
import { useState,useContext } from 'react';
import MainContext from "../context/MainContext";
const Reserveselected = ({seats}) => {
    const { socket,movie,movies,user,setUser,setseats} = useContext(MainContext)
   
   const [geterror,seterror]=useState(false)
   
   const http = async (url, data) => {
        const options = {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        }

        const res = await fetch("http://localhost:4000" + url, options)
        return res.json()
    }
  async function buy(){
    let moneyz=seats.length*7.99
    if(movies[movie].agereq<=user.age && moneyz<=user.money){
      const bruser = {
            username: user.username,
            amount: moneyz,
        }  
        
socket.emit("reserve", {movie,seats})
setseats([])



        const result = await http('/money', bruser)
        setUser(result.data)
        
 
console.log(user)
    }
    else{
        seterror(true)
    }
 
   }
    return (
        <div className='cashout'>
           <div className='d-flex'><p>Seats selected:</p> {seats.map((x,i)=><p key={i}>{x}, </p>)}</div>
            <p>Price {seats.length *7.99}$</p>
           <button  onClick={buy}>Reserve seats</button>
          {geterror &&<h1>you are either young for this movie or you dont have enough money</h1>} 
        </div>
    );
};

export default Reserveselected;