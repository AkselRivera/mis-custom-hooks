import { useState } from "react";


const useForm = (initialState={}) => {

    const [values, setValues] = useState(initialState);

     const reset= ()=>{
         setValues(initialState);
     }

    const handleInputChange = ({target})=>{
        setValues({
            ...values,
            [target.name]:target.value
        });
    }

    return [values, handleInputChange, reset];

};

export default useForm;




/*
Example -->


 const [formValues,handleInputChange]=useForm({search:''});
  const {search} = formValues;


  return (
    <div className='fondo'>

        <input
        className='p-1'
            type='text'
            name={'search'}
            onChange={handleInputChange}
            value={search}
            
            />
        <button className='search mt-2 btn btn-outline-dark'>Search</button>
    </div>
  )


*/
