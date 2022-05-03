import React from "react";
import { IconName } from "react-icons/io";




function Box({name , job ,image , text}){

    return(
        <div className="box tc" >
            
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

            <button type="button">Click Me!</button>

        </div>
    );

}

export default Box;