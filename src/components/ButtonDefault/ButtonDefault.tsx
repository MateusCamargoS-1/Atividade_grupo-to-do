interface ButtonProps {
    label: string;
    type?: 'submit'; 
    action?: () => void;
}

const ButtonDefault = ({label, type, action}: ButtonProps) => {
    return (
        <button type={type} onClick={action}>
            {label}
        </button>
    );
}

export default ButtonDefault;