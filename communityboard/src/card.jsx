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

// Path: src/App.jsx
// import './App.css';
// import Card from './card';
//
// const App = () => {
//
//   return (
//     <div className="App">
//       <Card
//         imgSrc="https://images.unsplash.com/photo-1593642532452-9fbcf0c4f3b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//         title="The Shawshank Redemption"
//         genre="Drama"
//         buttonText="Add to Favorites"
//         buttonHref="https://www.imdb.com/title/tt0111161/"