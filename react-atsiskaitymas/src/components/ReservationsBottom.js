import React from 'react';
import { useState } from 'react';
import Reserveselected from './ReserveSelected';
import MovieSeats from './Movieseats';

const ReservationsBottom = ({seats, setseats , Movieseats,user,movies,movie}) => {


    

    return (
        <div >
            <h1>{movies[movie].name}</h1>
            <h4>user:{user.username}</h4>
                <h4>money:{user.money.toFixed(2)}$</h4>
        <div className="d-flex">
            
            <div >
                
                <div className="auditorium">
                    {Movieseats.map((x, i) =><MovieSeats x={x} seats={seats} setseats={setseats}  key={i} i={i}/>)}
                       
                </div>
            </div>

            <div className="grow1 p50">
                {seats.length>0  && <Reserveselected seats={seats}/>}
                

            </div>
        </div>
</div>
    );
};

export default ReservationsBottom;