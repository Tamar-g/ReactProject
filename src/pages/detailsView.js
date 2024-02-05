import React, { useState } from 'react';
import Login from './login'
import SelectCountryAndCity from './selectCountryAndCity'

//parent component
export default function DetailsView() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [country, setCountry] = useState(null);
    const [city, setSCity] = useState(null);
    const [page, setPage] = useState(1);

    return (
        <>
            {page == 1 ?
                <Login name={setName} password={setPassword} page={setPage}></Login>
                : page == 2 ? <SelectCountryAndCity city={setSCity} country={setCountry} page={setPage}></SelectCountryAndCity>
                    : <div>
                        <h1>Hello {name}</h1>
                        <h2>your password: {password}</h2>
                        <h3>you live in:{country}  {city}</h3>
                    </div>
            }


        </>
    )
}