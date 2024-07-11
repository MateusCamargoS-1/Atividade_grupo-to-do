interface InputProps {
    label?: string;
    name: string;
    type?: string; 
    value?: string;
    action: (value: any) => void;
    checked?: boolean;
}

const InputDefault = ({label, type, value, name, action}: InputProps) => {
    return (
        <input type={type} value={value} placeholder={label} name={name} onChange={(e) => action(e.target.value)}/>
    );
}

export default InputDefault;