import { useState, useEffect } from "react";




const useFetch = (url) => {
    const [isLoadig, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleX = (id) => {
      const newCards = data.cards.filter(Card => Card.id !== id);
      setData(newCards);
    }
  

    useEffect(() => {
      const abortCon = new AbortController();
        fetch(url, { signal: abortCon.signal })
          .then(res => {
            if(!res.ok) {
              throw Error("could not get data for that resource");
            }
            return res.json();
          })
          .then(data=> {
            setData(data);
            setIsLoading(false);
            setError(null);
          })
          .catch(err => {
            if (err.name === "AbortError") {
              console.log("fetch aborted");
            }
            setIsLoading(false);
            setError(err.message);
          })

          return () => abortCon.abort();
      },[url]);
      return { data, isLoadig, error, handleX }
}

export default useFetch;