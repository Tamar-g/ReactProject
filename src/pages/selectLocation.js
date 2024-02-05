import React, { useState } from 'react';
import SelectCity from './SelectCity'; // הכנסת הרכיב של בחירת עיר
import SelectCountry from './SelectCountry'; // הכנסת הרכיב של בחירת מדינה

export default function SelectCountryAndCity(props) {
    // אובייקט המכיל את המדינות והערים הקשורות אליהן
    const countriesAndCities = {
        Israel: ['ירושלים', 'תל אביב', 'רעננה'],
        USA: ['ניו יורק', 'וושינגטון'],
        Denemark: ['קופנהגן', 'הילרוד', 'אולבורג']
    }

    // משתנים המשמשים לניהול בחירת המדינה והעיר וגם ספירת הדף
    const [selectCountry, setSelectCountry] = useState(null);
    const [selectCity, setSelectCity] = useState(null);
    const [count, setCount] = useState(0); // ספירת מספר הדף

    const countries = Object.keys(countriesAndCities); // מערך של כל המדינות
    const cities = countriesAndCities[selectCountry]; // מערך של הערים במדינה הנבחרת

    // פונקציה לשינוי המדינה הנבחרת
    function replaceCountry(newCountry) {
        setSelectCountry(newCountry)
        setSelectCity(null) // איפוס העיר ברגע שמשתמש בוחר מדינה חדשה
        setCount(count + 1) // עדכון מספר הדף
    }

    return (
        <>
            <div>
                {/* הצגת המדינה והעיר שנבחרו */}
                <p>בחרת: {selectCountry} / {selectCity}</p>

                {/* רכיב לבחירת מדינה */}
                <SelectCountry
                    countries={countries}
                    selectCountry={selectCountry}
                    setSelectCountry={replaceCountry}
                />

                {/* רכיב לבחירת עיר */}
                {cities &&
                    <SelectCity
                        cities={cities}
                        setSelectCity={setSelectCity}
                        count={count}
                    />}
            </div>
        </>
    );
}


export default function SelectCity(props) {
    const { selectCity, setSelectCity, cities, count } = props;

    return (
        <select key={count} onChange={(e) => setSelectCity(e.target.value)}>
            <option disabled selected value >בחר עיר</option>
            {cities.map((item, index) => (
                <option key={index} value={item}>{item}</option>
            ))}
        </select>
    );
}


export default function SelectCountry(props){
    const { selectCountry, setSelectCountry, countries } = props;

    return (
        <select onChange={(e) => setSelectCountry(e.target.value)}>
            <option disabled selected value>בחר מדינה</option>
            {countries.map((item, index) => (
                <option key={index} value={item}>{item}</option>
            ))}
        </select>
    );
}
