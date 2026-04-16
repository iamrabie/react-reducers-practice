const Input = ({ type, placeholder, value, handleChange }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} value={value} onChange={handleChange} className="px-2 py-3 text-base rounded rounded-md border border-slate-600 w-full" />
        </>
    );
}

export default Input;