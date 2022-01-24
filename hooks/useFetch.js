import { useEffect, useRef, useState } from "react";

function useFetch( url) {

const [state, setState] = useState({data:null, loading: true, error:null});
const isMounted = useRef(true);

useEffect (()=>{

    return ()=>{
        isMounted.current=false;
    }

},[])

useEffect(() => {

    setState( {data:null, loading:true, error:null});

    fetch(url)
    .then( resp => resp.json())
    .then( data =>{

        if(isMounted.current){
        setState({
            loading:false,
            error:null,
            data
            })
        }
    })
    .catch( ()=>{
        setState({
            data:null, loading:false, error:'No se pudo encontrar la info'
        })
    } )
    
}, [url]);

return state;

}

export default useFetch;
