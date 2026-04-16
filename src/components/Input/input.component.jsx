const Input = ({ type, placeholder, value, handleChange , name }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} value={value} onChange={handleChange} name={name} className="px-2 py-3 text-base rounded rounded-md border border-slate-600 w-full" />
        </>
    );
}

export default Input;