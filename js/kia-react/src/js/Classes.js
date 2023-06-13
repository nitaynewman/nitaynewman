import "../css/slick.css"; 
import "../css/slick-theme.css";
import '../css/App.css';
import Cards from "./Cards";
import useFetch from "./useFetch";


// import './/index.css';

function Classes() {
  const { data: cards, isLoadig, error } = useFetch('http://localhost:8000/cards');
    
  

  // const handleClick = () => {
  //   setName('newman');
  //   // name = 'nitay'
  // }
  
  return ( 
    <div className="Classes">
      { error && <div>{error}</div>}
      { isLoadig && <div>louding...</div>}
      {cards && <Cards cards={cards.filter((Card) => Card.id === 1 || Card.id === 2 || Card.id === 3 || Card.id === 4 || Card.id === 5 || Card.id === 6 || Card.id === 7 || Card.id === 8 || Card.id === 9 ) }/>}
      {cards && <Cards cards={cards.filter((Card) => Card.id === 10 || Card.id === 11 || Card.id === 12 || Card.id === 13 || Card.id === 14 || Card.id === 15 || Card.id === 16 || Card.id === 17 || Card.id === 18 || Card.id === 19 ) }/>}
      {cards && <Cards cards={cards.filter((Card) => Card.id === 20 || Card.id === 21 || Card.id === 22 || Card.id === 23 || Card.id === 24 || Card.id === 25 || Card.id === 26 || Card.id === 27 || Card.id === 28 || Card.id === 29 ) }/>}
      {cards && <Cards cards={cards.filter((Card) => Card.id === 30 || Card.id === 31 || Card.id === 32 || Card.id === 33 || Card.id === 34 || Card.id === 35 || Card.id === 36 || Card.id === 37 || Card.id === 38 || Card.id === 39 ) }/>}
      {cards && <Cards cards={cards.filter((Card) => Card.id === 40 || Card.id === 41 || Card.id === 42 || Card.id === 43 || Card.id === 44 || Card.id === 45 || Card.id === 46 || Card.id === 47 || Card.id === 48 || Card.id === 49 ) }/>}
      {cards && <Cards cards={cards.filter((Card) => Card.id === 50 || Card.id === 51 || Card.id === 52 || Card.id === 53 || Card.id === 54 || Card.id === 55 || Card.id === 56 || Card.id === 57 || Card.id === 58 || Card.id === 59 ) }/>}
      {cards && <Cards cards={cards.filter((Card) => Card.id === 60 || Card.id === 61 || Card.id === 62 || Card.id === 63 || Card.id === 64 || Card.id === 65 || Card.id === 66 || Card.id === 67 || Card.id === 68 || Card.id === 69 ) }/>}
      {cards && <Cards cards={cards.filter((Card) => Card.id === 70 || Card.id === 71 || Card.id === 72 || Card.id === 73 || Card.id === 74 || Card.id === 75 || Card.id === 76 || Card.id === 77 || Card.id === 78 || Card.id === 79 ) }/>}
      
      {/* <Cards handleX ={handleX} cards={cards.filter((Card) => Card.id === 1 || Card.id === 2 || Card.id === 3 || Card.id === 4 || Card.id === 5) }/> */}
    </div>  
    
  ); 
}
export default Classes;