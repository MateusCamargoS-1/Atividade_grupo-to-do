interface InputProps {
    label: string;
    name: string;
    type?: string; 
    action: (value: string) => void;
}

const InputDefault = ({label, type, name, action}: InputProps) => {
    return (
        <input type={type} placeholder={label} name={name} onChange={(e) => action(e.target.value)}/>
    );
}

export default InputDefault;