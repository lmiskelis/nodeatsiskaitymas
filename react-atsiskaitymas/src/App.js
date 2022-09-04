import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import MainContext from "./context/MainContext";
import LoginPage from "./pages/LoginPage";
import Seatpage from './pages/Seatpage';


import io from "socket.io-client"
import AppPage from "./pages/AppPage";
const socket = io.connect("http://localhost:4000")


function App() {

    const [user, setUser] = useState(null)
    const [movies,setmovies] = useState([])
    const [movie, setmovie] = useState(0)
    const [seats, setseats] = useState([])
    


    useEffect(() => {
        socket.on("movies", data =>  setmovies(data))
       
        
        

    }, [])

    return (

        <div className="App">

            <MainContext.Provider value={{socket, user, setUser, movies,movie,setmovie,seats,setseats }}>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/movies" element={<AppPage/>}/>
                        <Route path="/selectedmovie/:name" element={<Seatpage/>}/>

                    </Routes>
                </BrowserRouter>

            </MainContext.Provider>

        </div>

    );
}

export default App;
