import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/App.css';
import Cards from "./Cards";
import { useState } from "react";


// import './/index.css';

function Classes() {

  const [isLoadig, setIsLoading] = useState(true)
  const [cards, setCards] = useState(null)

    useEffect(() => {
      fetch('http://localhost:8000/cards')
        .then(res => {
          return res.json();
        })
        .then(data=> {
          setCards(data)
          setIsLoading(false)
        })
    },[]);
  

//   const handleClick = () => {
//     setName('newman');
//     // name = 'nitay'
//   }
    const handleX = (id) => {
    const newCards = cards.filter(Card => Card.id !== id);
    setCards(newCards);
  }
  
  return ( 
    <div className="Classes">
      { isLoadig && <div>louding...</div>}
      {Cards && <Cards cards={Cards} Title = 'all cards'/>}
      {/* <Cards handleX ={handleX} cards={cards.filter((Card) => Card.id === 1 || Card.id === 2 || Card.id === 3 || Card.id === 4 || Card.id === 5) }/> */}
    </div>  
    
  ); 
}
export default Classes;
