import React, { useState } from 'react';
import { IInputProps } from '../../interfaces/inputs/IInputProps';
import { IoEyeOutline, IoEyeOffOutline  } from "react-icons/io5";

export const InputPassword: React.FC<IInputProps> = ({
  label,
  placeholder,
  onChange,
  value,
  error,
  className,
  success,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="mb-2 font-xl text-black">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`w-full border border-gray-400 rounded-md p-2 ${className}`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          {showPassword ? (
            <IoEyeOffOutline className="h-6 w-6 text-gray-500" />
          ) : (
            <IoEyeOutline className="h-6 w-6 text-gray-500" />
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
      {success && <p className="text-green-500 text-xs italic">{success}</p>}
    </div>
  );
};
