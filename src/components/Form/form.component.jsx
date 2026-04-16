import { useReducer } from "react";

import Input from "../Input/input.component";

const handleReducer = (state , action) => {
    const { type , payload } = action;

    switch(type) {
        case 'SET_NAME':
            return {
                ...state,
                name:payload
            }

        case 'SET_EMAIL_ADDRESS':
            return {
                ...state,
                email:payload
            }


        case 'SET_PASSWORD':
            return {
                ...state,
                password:payload
            }

        default:
            throw new Error(`unhandled type of ${type} in Reducer`);
    }
}

const Form  = () => {

    const [state , dispatch] = useReducer(handleReducer , { name:'' , email:'' , password:''});
    console.log("USE REDUCER ::::::::" , state);
    
    const { name , email , password } = state;

    const handleName = (e) => {

        const { value } = e.target;
        dispatch({type:'SET_NAME' , payload:value});

    }

    const handleEmailAddress = (e) => {

        const { value } = e.target;
        dispatch({type:'SET_EMAIL_ADDRESS' , payload:value});

    }


    const handlePassword = (e) => {

        const { value } = e.target;
        dispatch({type:'SET_PASSWORD' , payload:value});
    }

    return(
    <>
    <form className="w-[35%] mx-auto">
        <fieldset className="border-2 border-black p-5 flex flex-col gap-y-4 rounded rounded-sm">
            <legend>Reducers</legend>
            <Input type="text" placeholder="Full Name" value={name} handleChange={handleName} />
            <Input type="email" placeholder="abc@gmail.com" value={email}  handleChange={handleEmailAddress} />
            <Input type="password" placeholder="Password" value={password} handleChange={handlePassword} />
        </fieldset>
    </form>
    </>)
}


export default Form;