import React from "react";
import { IoIosArrowDropleft,IoIosArrowDropright } from "react-icons/io";




function Box({name , job ,image , text}){

    return(
        <div className="box tc shadow-4" >
            
            <div>
                <img
                    className="image"
                    alt={name}
                    src={image}
                />
            </div>

            <div>
                <h3 className="name">{name}</h3>
                <h5 className="job">{job}</h5>
            </div>

            
            <div><p>{text}</p></div>

            <div>
                <button type="button" className="button left grow"><IoIosArrowDropleft/></button>
                <button type="button" className="button right grow"><IoIosArrowDropright/></button>
            </div>

            <button type="button" className="button surprise grow">Surprise Me!!</button>

        </div>
    );

}

export default Box;