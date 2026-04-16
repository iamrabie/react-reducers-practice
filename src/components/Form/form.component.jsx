import { useReducer } from "react";

import Input from "../Input/input.component";

const handleReducer = (state , action) => {
    const { type , payload } = action;


    switch(type) {

        case 'SET_FORM_FIELDS':
            return {
                ...state,
                [payload.name]:payload.value
            }

        case 'SET_IS_SUBMIT':
            return {
                ...state,
                isSubmitting:payload,
                // name:'',
                // email:'',
                // password:''
            }

        case 'RESET_FORM': 
            return {
                ...state,
                name:payload.name,
                email:payload.email,
                password:payload.password
            }

        case 'SET_ERRORS':
            return {
             ...state,
             error:payload
            }
        // case 'SET_NAME':
        //     return {
        //         ...state,
        //         name:payload
        //     }

        // case 'SET_EMAIL_ADDRESS':
        //     return {
        //         ...state,
        //         email:payload
        //     }


        // case 'SET_PASSWORD':
        //     return {
        //         ...state,
        //         password:payload
        //     }

        default:
            throw new Error(`unhandled type of ${type} in Reducer`);
    }
}

const Form  = () => {

    const [state , dispatch] = useReducer(handleReducer , { name:'' , email:'' , password:'' , isSubmitting:false , error:null});
    console.log("USE REDUCER ::::::::" , state);
    
    const { name , email , password , isSubmitting , error } = state;

    const onChange = (e) => {
        const { value , name } = e.target;

        dispatch({type:'SET_FORM_FIELDS' , payload:{ value:value , name:name }})

    }


    const handleSubmit = (e) => {

        e.preventDefault();

        
        if (!name || !password || !email) {
            dispatch({type:'SET_ERRORS' , payload:true});
        }

        else {
           dispatch({type:"SET_IS_SUBMIT" , payload:true});
           dispatch({type:'SET_ERRORS' , payload:false});
           dispatch({type:'RESET_FORM' , payload: {name:'' , email:'' , password:''}});

        }

    }

    // const handleName = (e) => {

    //     const { value } = e.target;
    //     dispatch({type:'SET_NAME' , payload:value});

    // }

    // const handleEmailAddress = (e) => {
    //     const { value } = e.target;
    //     dispatch({type:'SET_EMAIL_ADDRESS' , payload:value});

    // }

    // const handlePassword = (e) => {

    //     const { value } = e.target;
    //     dispatch({type:'SET_PASSWORD' , payload:value});
    // }

    return(
    <>
    <form className="w-[35%] mx-auto">
        <fieldset className="border-2 border-black p-5 flex flex-col gap-y-4 rounded rounded-sm">
            <legend>Reducers</legend>
            <Input type="text" placeholder="Full Name" value={name} name="name" handleChange={onChange} />
            <Input type="email" placeholder="abc@gmail.com" value={email} name="email"  handleChange={onChange} />
            <Input type="password" placeholder="Password" value={password} name="password" handleChange={onChange} />
            <button disabled={isSubmitting} onClick={handleSubmit} className={`${isSubmitting ? 'bg-blue-400' : 'bg-blue-900'} text-white py-2 rounded rounded-md`}>Submit</button>
            <p className="text-red-600 font-semibold text-sm">{error && 'Please fill the mandatory fields.'}</p>
        </fieldset>
    </form>
    </>)
}


export default Form;