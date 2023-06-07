import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const[title, setTitle] = useState('');
    const[vedio, setVedio] = useState('');
    const[price,  ] = useState('99.9$');
    const[professor, setProfessor] = useState('dumb dumb');
    const [isLoadig, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const Card = { title, professor, vedio, price };
        setIsLoading(true);
        
        fetch('http://localhost:8000/cards', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(Card)
            
            // professor:  
        }) .then(() => {
            console.log('new blog added');
            setIsLoading(false);
            // history.go(-1);
            history.push('/');
        })
    }
     

    return (
        <div className="Create">
            <h2>Add a new lesson</h2>
            <form onSubmit={handleSubmit}>
                <label>lesson title: </label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>lesson vedio: </label>
                <textarea 
                required
                value={vedio}
                onChange={(e) => setVedio(e.target.value)}
                /> 
                <label>lesson price: </label>
                <input 
                type="text"
                required
                value={price}
                onChange={(e) => setTitle(e.target.value)}
                />
                
                <label>lesson Professor: 

                </label>
                <select
                    value={professor}
                    onChange={(e) => setProfessor(e.target.value)}
                >
                    <option value="uri">uri</option>
                    <option value="dumb dumb">dumb dumb</option>
                </select>
                <br />
                
                { !isLoadig &&<button>Add Lesson</button> }
                { isLoadig &&<button disabled>Adding lesson...</button> }

                <p>{ title }</p>
                <p>{ vedio }</p>
                <p>by professor:{ professor }</p>
            </form>
        </div>
    );
}
 
export default Create
