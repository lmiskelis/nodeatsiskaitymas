import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Moviecard from './moviecard';


const ReservationsTop = ({movies, setmovie, movie,setseats}) => {


    return (
        <div className="d-flex">
            {movies.map((x, i) =><Moviecard x={x} key={i} i={i} movies={movies} setseats={setseats} setmovie={setmovie} movie={movie}/>
               )}
        </div>
    );
};

export default ReservationsTop;