import React, { useRef } from 'react';

export default function Login() {
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const chackPasswordRef = useRef(null);

    function checkRegister() {
        (passwordRef.current.value == chackPasswordRef.current.value ? alert("Wellcom") : alert("your password is wrong"))
    }

    return (
        <>
            <br></br>
            <label htmlFor="name">name</label>
            <input ref={nameRef} id="name"></input>

            <label htmlFor="password">password</label>
            <input ref={passwordRef} id="password"></input>
            
            <label htmlFor="checkPassword">check password</label>
            <input ref={chackPasswordRef} id="checkPassword"></input>
            <br></br><br></br>
            <button onClick={checkRegister}>log in</button>

        </>)
}