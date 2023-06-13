import "../css/slick.css"; 
import "../css/slick-theme.css";
import '../css/App.css';
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import Cards from "./Cards";



const CardD = () => {
    const { id } = useParams();
    const { data: cards } = useFetch('http://localhost:8000/cards');
    const { data: Card, error, isLoading } = useFetch('http://localhost:8000/cards/' + id);
    const history = useHistory();

    const handleX = () => {
        fetch('http://localhost:8000/cards/' + Card.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    
    return ( 
        <div className="CardD">
            { isLoading && <div>loading...</div> }
            { error && <div>{error}</div> }
            { Card && 
                <lesson>
                    <h2>{ Card.title }</h2>
                    <p>Course professor { Card.professor }</p>
                    <div>{ Card.vedio }</div>
                    {cards && <Cards cards={cards.filter((Card) => Card.id === 1 || Card.id === 2 || Card.id === 3 || Card.id === 4 || Card.id === 5 || Card.id === 6 || Card.id === 7 || Card.id === 8 || Card.id === 9 ) }/>}
                    <button className="CardB" on onClick={handleX}>delete lesson</button>
                </lesson>
            }
        </div>
    );
}
 
export default CardD;