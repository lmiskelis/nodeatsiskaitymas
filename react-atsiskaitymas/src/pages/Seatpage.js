import { useParams } from "react-router-dom";
import ReservationsBottom from "../components/ReservationsBottom"
import React, {useContext, } from 'react';
import MainContext from "../context/MainContext";
const Seatpage = () => {
    const {movies,  user,movie,seats,setseats} = useContext(MainContext)
const {name}=useParams()
console.log(name)
    return (
        <div>
           { <ReservationsBottom seats={seats} movies={movies} movie={movie}
                                                    setseats={setseats}
                                                    user={user}
                                                    Movieseats={movies[movie].seats}/>}
        </div>
    );
};

export default Seatpage;