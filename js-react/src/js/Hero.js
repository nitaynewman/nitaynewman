import "../css/react.css";


const Hero = () => {
    return (
        
        <div className="hero">
          <div className="hero_container">
            <h1 className="hero_heading">Choose your course</h1>
            <h2 className="hero_heading">to become a</h2>
            <p className="hero_description">KnowItAll</p>
            <button className="main_btn"><a href="#">All courses</a></button>
          </div>
        </div>
        
    );
}

export default Hero;