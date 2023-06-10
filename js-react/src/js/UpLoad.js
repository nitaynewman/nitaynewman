import { useState } from "react";
// https://www.youtube.com/watch?v=WwYcXR99j_4
function Upload() {
    const [vedio, setVedio] = useState()
    
    function handleVedio(event) {
        setVedio(event.target.vedio[0])
        console.log(event.target.vedio[0]);
    }
    function handleVedio() {
        const formData = new FormData()
        formData.append('vedio', vedio)
        fetch(
            'url',
            {
                method: 'POST',
                body: formData
            }
        ).then((response) => response.json())
        .then(
            (result) => {
                console.log('success', result)
            }
        ).catch(error => {
            console.error('Error', error)
        })
        
    }

    return (
        <div className="Upload">
            <form>
                <input type="file" name="file" onChange={handleVedio} />
                <button>Upload</button>
                <br /> <br />
            </form>
        </div>
    );
}
 
export default Upload;