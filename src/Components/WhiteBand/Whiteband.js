import React from "react";
import IconsBand from "./IconsBand/IconsBand";




const Whiteband = (props) => {

    



    
    return (
        <div className={props.classes}>
            {props.actiune? < IconsBand  lista={props.lista} coloana={props.coloana}  actiune={props.actiune}  />:< IconsBand lista={props.lista}   coloana={props.coloana} static  />}
               
                
        </div>
    );
}

export default Whiteband;