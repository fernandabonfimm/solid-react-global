export interface IInputProps{
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    maxLength?: number;
    minLength?: number;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    className?: string;
    success?: string;
}