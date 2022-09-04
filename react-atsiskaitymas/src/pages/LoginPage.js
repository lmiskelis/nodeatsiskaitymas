import React, {useContext, useRef} from "react";
import MainContext from "../context/MainContext";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const refs = {
        regName: useRef(),
        regPassOne: useRef(),
        regPassTwo: useRef(),
        regage:useRef(),
        loginName: useRef(),
        loginPass: useRef()
    }
    const nav = useNavigate()

    const {setUser, socket} = useContext(MainContext)

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


    const register = async () => {
        const user = {
            username: refs.regName.current.value,
            passOne: refs.regPassOne.current.value,
            passTwo: refs.regPassTwo.current.value,
            age:refs.regage.current.value
        }

        const result = await http('/register', user)
        
    }

    const login = async () => {
        const user = {
            username: refs.loginName.current.value,
            password: refs.loginPass.current.value,
        }

        const result = await http('/login', user)
        console.log(result.data)
        if(!result.error) {
            setUser(result.data)
            console.log(result.data)
            socket.emit("login", result.data)
            nav("/movies")
        }
    }

    return (
        <div>
            <div className="d-flex">
                <div className="grow1 d-flex j-center a-center flex-column">
                    <input ref={refs.regName} type="text" placeholder="username"/>
                    <input ref={refs.regPassOne} type="text" placeholder="pass 1"/>
                    <input ref={refs.regPassTwo} type="text" placeholder="pass 2"/>
                    <input ref={refs.regage} type="text" placeholder="age"/>
                    <button onClick={register}>Register</button>
                </div>

                <div className="grow1 d-flex j-center a-center flex-column">
                    <input ref={refs.loginName} type="text" placeholder="username"/>
                    <input ref={refs.loginPass} type="text" placeholder="pass"/>
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;