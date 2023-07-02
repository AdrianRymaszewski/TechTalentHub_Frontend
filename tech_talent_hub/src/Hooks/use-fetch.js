import { useCallback } from "react";
import { useState } from "react";

const useFetch = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const sendRequest = useCallback(async (config, applyData) => {
        setLoading(true);
        try{
            const response = await fetch(config.url, {
              method: config.method ? config.method : "GET",  
              headers: config.headers ? config.headers : {"Content-Type": "application/json"},  
              body: config.body ? JSON.stringify(config.body) : null,  
            })
            if(!response.ok) throw new Error('Request failed');
            
            const data = await response.json();
            applyData(data);
        }catch(err){
            setError(err.message || 'something went wrong');
        }
        setLoading(false);
    },[])
    return { loading, error, sendRequest }
}
export default useFetch;