import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
      <h2>your  LESSONS</h2>
     
      {cards && <Cards Title="math class" cards={cards.filter((Card) => Card.title === "Math") }/>}
      {cards && <Cards Title="phisics class" cards={cards.filter((Card) => Card.title === "phisics" ) }/>}
      {cards && <Cards Title="art class" cards={cards.filter((Card) => Card.title === "art" ) }/>}
      {cards && <Cards Title='science class' cards={cards.filter((Card) => Card.title === "science" ) }/>}
      {cards && <Cards Title='history class' cards={cards.filter((Card) => Card.title === "history" ) }/>}
      {cards && <Cards Title='chemistry class' cards={cards.filter((Card) => Card.title === "chemistry" ) }/>}
      {cards && <Cards Title='elecronics class' cards={cards.filter((Card) => Card.title === "electronics" ) }/>}
      {cards && <Cards Title='english class' cards={cards.filter((Card) => Card.title === "english" ) }/>}
      
      {/* <Cards handleX ={handleX} cards={cards.filter((Card) => Card.id === 1 || Card.id === 2 || Card.id === 3 || Card.id === 4 || Card.id === 5) }/> */}
    </div>  
    
  ); 
}
export default Classes;
