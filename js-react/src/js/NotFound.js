import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>SORRY😥</h2>
            <p>this page can't be found</p>
            <Link to='/'>back to learn...</Link>
        </div>
     );
}
 
export default NotFound;