import React from "react";
import { IInputProps } from "../../interfaces/inputs/IInputProps";

export const InputText: React.FC<IInputProps> = ({
    label,
    placeholder,
    onChange,
    value,
    error,
    className,
    success
}) => {
    return (
        <div className="flex flex-col mb-4 w-full items-start justify-start gap-2">
            <label className="mb-2 font-xl text-black items-start justify-start">
                {label}
            </label>
            <input
                type={'text'}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={`w-full items-start justify-start border border-gray-400 rounded-md p-2 ${className}`}
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            {success && <p className="text-green-500 text-xs italic">{success}</p>}
        </div>
    );
}