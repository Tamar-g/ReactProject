import React from 'react';
import image1 from './images/2.png'; 

export default function Page2(props) {
    const {page}  = props;
    const NumPages=3
    const currentPage=1
    function MovePageForward(){
        currentPage=currentPage+1
        page(currentPage)
    }
    function MovePageBackwards(){
        currentPage=currentPage+1
        page(currentPage-1)
    }
    return (
        <div>
            <h1>My React App</h1>
            <button onClick={MovePageBackwards}>הקודם</button>
            <button onClick={MovePageForward}>הבא</button>
            <br></br>
            <img src={image1} alt="Description of the image" />
        </div>
    );
}
