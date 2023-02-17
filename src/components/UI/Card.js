import React from 'react';
import  './Card.css';

function Card(props){
    const classes='card ' + props.className;
    // const iden='id '+ props.id

    return (
    <div className={classes}>{props.children}</div>
    // <div id={iden}>{props.children}</div>
    );
};
export default Card;