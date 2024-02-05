import React, { useRef } from 'react';

export default function login(props){
    const { name, password, page } = props;

    const nameRef = useRef(null);
    const passwordRef = useRef(null);

    function sendNameAndPassword() {
        name(nameRef.current.value);
        password(passwordRef.current.value);
        page(2);
    }
    return(
    <>
            <h2>Enter a name and password</h2>
            <input ref={nameRef} type='text' ></input>
            <input ref={passwordRef} type='password' ></input>
            <button onClick={sendNameAndPassword}>ok</button>
    </>
    )
}