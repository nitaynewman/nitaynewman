import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>SORRY😥</h2>
            <p>this page can't be found</p>
            <Link to='/'
            style={{
                fontSize: "1.5rem",
                color: '#299999'
            }}
            >back to learn...</Link>
        </div>
     );
}
 
export default NotFound;