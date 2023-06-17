import "../css/slick.css"; 
import "../css/slick-theme.css";
import '../css/App.css';
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import Cards from "./Cards";

// do a comment section for the page
// https://www.youtube.com/watch?v=M4urOf4zpSk
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
                    {cards && <Cards cards={cards.filter((Card) => Card.title ) }/>}
                    <button className="CardB" on onClick={handleX}>delete lesson</button>
                </lesson>
            }
        </div>
    );
}
 
export default CardD;