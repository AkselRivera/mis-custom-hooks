import { useState } from "react";

export const useCounter = (initialState=10) => {

    const [state, setState] = useState(initialState);

    const incremente =()=>{
        setState(state+1);
    }

    const decrement= ()=>{
        setState(state-1);
    }
    
    const reset= ()=>{
        setState(initialState);
    }

    return { state, incremente,decrement,reset }
};
