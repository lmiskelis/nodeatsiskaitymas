import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const MovieSeats = ({seats, setseats ,user,x,i}) => {
const [color,setcolor]=useState()

    useEffect(()=>{
        if(x.reserved.length>0){
            setcolor("red")
        }

    },[x])
function addseattoreservelist(i){
    if(x.reserved.length<1 && !seats.includes(i+1)){
    setseats([...seats,i+1])}
    else if(x.reserved.length && seats.includes(i+1)){
let newseats=seats.filter(x=>x!=i)
setseats([...newseats])
    }
}
    return (
        <div >
           
        
                
                
                    
                        <div className='seats' style={{backgroundColor:color}} onClick={() => addseattoreservelist(i)}>

                            <div  >
                                 {x.number}
                            </div>

                           

                        </div>
              
</div>
    );
};

export default MovieSeats;