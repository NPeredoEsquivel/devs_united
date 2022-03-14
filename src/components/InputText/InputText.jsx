function InputText({ placeHolder, inputValue, handleValue, className = null }) {
    return (
        <input
            placeholder={placeHolder}
            type="text" value={inputValue}
            onChange={handleValue}
            className={className}
        />
    );
}

export function LoadingInputText({ className }) {
    return (
        <div className={className}></div>
    );
}

export default InputText;