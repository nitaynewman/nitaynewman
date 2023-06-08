import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios, { formToJSON } from 'axios';

const Create = () => {
    const[title, setTitle] = useState('');
    const[vedio, setVedio] = useState();
    const [progressbar, setProgressbar] = useState(0);
    const[price,  ] = useState('99.9$');
    const[professor, setProfessor] = useState('dumb dumb');
    const[subject, setSubject] = useState('Math');
    const [isLoadig, setIsLoading] = useState(false);
 
    // const handleVedio = (event) => {
    //     const vedio = event.target.vedios[0];
    //     const fomrdata = new FormData();
    //     fomrdata.append('vedio', vedio);
    //     axios.post('url', fomrdata, {
    //         headers: {
    //             "Content-Type" : "multipart/form-data"
    //         },
    //         onUploadProgress: event => {
    //             setProgressbar(Math.round(100 * event.loaded) / event.total)
    //         }
    //     }).then(res => setVedio(URL.createObjectUrl(vedio)))
    //     .catch(err => console.log(err));
    // }

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
                <label>lessons subject: </label>
                <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}>
                    <option value="Math">Math</option>
                    <option value="phisics">phisics</option>
                    <option value="art">art</option>
                    <option value="science">science</option>
                    <option value="history">history</option>
                    <option value="chemistry">chemistry</option>
                    <option value="elecronics">elecronics</option>
                    <option value="english">english</option>
                </select>
                <label>lesson title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label>lesson vedio: </label>
                <textarea
                    required
                    value={vedio}
                    onChange={(e) => setVedio(e.target.value)} />
                <label>lesson price: </label>
                <input
                    type="text"
                    required
                    value={price}
                    onChange={(e) => setTitle(e.target.value)} />

                <label>lessons Professor:

                </label>
                <select
                    value={professor}
                    onChange={(e) => setProfessor(e.target.value)}
                >
                    <option value="uri">uri</option>
                    <option value="dumb dumb">dumb dumb</option>
                </select>
                {/* <label> add vedio </label>
                <div className="d-flex justify-content-center vh-100 bg-dark">
                    <div className="bg-white p-5 rounded w-50 vh-80">
                        <input type="vedio" onChange={handleVedio} />
                        <br /> <br />
                        <div className="progressbar">
                            <div className="progress-bar anime-progressbar"
                            role="progressbar" aria-label="progressbar" aria-valuenow={progressbar}
                            aria-valuemin="0" aria-valuemax='100' style={{width: `${progressbar}%`}} >
                            </div>
                        </div>
                        <br /> <br />
                        <video src={vedio} className="w-150 h-90" style={{border: '2px'}} />
                    </div>
                </div> */}
                               
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
