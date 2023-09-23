// write a component that renders an image, a title, a genre, and a button, with the image src, title, genre, and button href link being props

//make a button in the card component that links to the prop buttonHref

import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img className="card-img" src={props.imgSrc} alt={props.title} />
            <h3>{props.title}</h3>
            <h4>{props.genre}</h4>

            <a href={props.buttonHref}> 
                <button>Visit Site</button>
            </a>
        
        </div>
    );
    }

export default Card;