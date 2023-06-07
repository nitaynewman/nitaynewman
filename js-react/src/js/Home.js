import "../css/slick.css"; 
import "../css/slick-theme.css";
import '../css/App.css';
import Hero from './Hero'
import Cards from "./Cards";
import useFetch from "./useFetch";


// import './/index.css';

function Home() {
  const { data: cards, isLoadig, error, handleX } = useFetch('http://localhost:8000/cards');
    

  // const handleClick = () => {
  //   setName('newman');
  //   // name = 'nitay'
  // }
  
  return ( 
    <div className="Home">
      <Hero />
      { error && <div>{error}</div>}
      { isLoadig && <div>louding...</div>}
      {cards && <Cards handleX ={handleX} Title='ALL PREVIEW LESSONS' cards={cards.filter((Card) => Card.tutorial === "true") }/>}
      {/* <Cards handleX ={handleX} cards={cards.filter((Card) => Card.id === 1 || Card.id === 2 || Card.id === 3 || Card.id === 4 || Card.id === 5) }/> */}
    </div>  
    
  ); 
}
export default Home;
