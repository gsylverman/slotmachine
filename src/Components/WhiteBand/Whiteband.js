import React from "react";
import IconsBand from "./IconsBand/IconsBand";




const Whiteband = (props) => {
    
       
    return (
        <div className={props.classes}>
            {props.actiune? < IconsBand coloana={props.coloana}  actiune={props.actiune}  />:< IconsBand  coloana={props.coloana} static  />}
               
                
        </div>
    );
}

export default Whiteband;