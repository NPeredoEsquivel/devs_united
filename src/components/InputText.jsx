export default function InputText({ placeHolder, inputValue, handleValue }) {
    return (
        <input
            placeholder={placeHolder}
            type="text" value={inputValue}
            onChange={handleValue}
        />
    );
}

export function LoadingInputText({ className }) {
    return (
        <div className={className}></div>
    );
}