import Slider from "react-slick";
import "../css/slick.css"; 
import "../css/slick-theme.css";
import '../css/App.css';
import '../css/react.css'
import {Link} from 'react-router-dom'


const Cards = ({ cards, Title,  }) => {

  
  // const [isLoadig, setLoading] = useState(true);
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return ( 
    <div className="App">
      <h2>{ Title }</h2>
      <Slider {...Settings}>
        {cards.map((card) => (
          <div className={`card ${card.Color}`} key={card.id} >
            <div className="card-top">
              <img className='img-circle' src={card.img} alt={card.title} />
            </div>
            <div className="card-bottom">
              <h1>{card.title}</h1>
              <h3>by professor: {card.professor}</h3>
              <button>
                <Link to={`/Classes/${card.id}`} className="navbar_links">class</Link>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Cards;