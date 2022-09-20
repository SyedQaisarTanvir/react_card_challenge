import React from "react";
import Github from '../Images/GitHub Icon.png';
import Instagram from '../Images/Instagram Icon.png';
import Facebook from '../Images/Facebook Icon.png';
import Twitter from '../Images/Twitter Icon.png';


export default function CardFooter() {
    return (
        <div className="Image-Container">
            <img src={Twitter} alt='Twitter Icon'></img>
            <img src={Facebook} alt='facebook Icon'></img>
            <img src={Github} alt='Github icon'></img>
            <img src={Instagram} alt='Instagram icon'></img>
        </div>
    )
}
