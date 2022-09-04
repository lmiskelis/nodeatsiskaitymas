import React, {useContext, useState} from 'react';
import ReservationsTop from "./ReservationsTop";

import MainContext from "../context/MainContext";

const ReservationsWrapper = () => {

    const {movies,  user,movie,setmovie,setseats} = useContext(MainContext)


    

    

    return (
        <div>
            <div className="d-flex space-btw">
                <h1>{user.username}</h1>

                <h1>Money:{user.money.toFixed(2)}</h1>
            </div>

            <ReservationsTop movies={movies} movie={movie} setmovie={setmovie} setseats={setseats} />
            

        </div>
    );
};

export default ReservationsWrapper;