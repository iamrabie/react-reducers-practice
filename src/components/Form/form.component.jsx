import Input from "../Input/input.component";

const Form  = () => {
    return(<>
    <form className="w-[35%] mx-auto">
        <fieldset className="border-2 border-black p-5 flex flex-col gap-y-4 rounded rounded-sm">
            <legend>Reducers</legend>
            <Input type="text" placeholder="Full Name" />
            <Input type="text" placeholder="Full Name" />
            <Input type="text" placeholder="Full Name" />
        </fieldset>
    </form>
    </>)
}


export default Form;