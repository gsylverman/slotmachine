import React from 'react';
import classes from "./Icon.module.css";

import img1 from '../../../../Img/img1.jpg';
import img2 from '../../../../Img/img2.jpg';
import img3 from '../../../../Img/img3.jpg';
import img4 from '../../../../Img/img4.jpg';
import img5 from '../../../../Img/img5.jpg';

const Icon = (props) => {
    const poze = [img1, img2, img3, img4, img5];

    return (
        <div className={classes.Icon} >
            <img className={classes.img} src={poze[props.imgNumber]} alt="Icon" />
        </div>
    );
};

export default Icon;


