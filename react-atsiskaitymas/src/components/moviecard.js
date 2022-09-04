import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Moviecard = ({ setmovie, movie,x,i,movies, setseats}) => {
  
let nav=useNavigate()
   const [avialableseats,setavialabeseats]=useState(0)
 
   useEffect(()=>{
let numeris=0
x.seats.map(x=>x.reserved.length===0? numeris++ : numeris+=0)
setavialabeseats(numeris)
   },[movies])
    function changemovie(i){
        setmovie(i)
        setseats([])
        nav(`/selectedmovie/${x.name}`)
        
    }

    return (
        <div className="d-flex">
            
                <div  className="moviecard" onClick={() => changemovie(i)}>
                    <img src={x.img} alt="" />
                    <h2>{x.name}</h2>
                    <p>Seats:{avialableseats}/out of 10</p>
                </div>
        </div>
    );
};

export default Moviecard;