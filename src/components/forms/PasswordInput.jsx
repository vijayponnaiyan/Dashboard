import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function PasswordField({ label, placeholder, register, name, error, disabled, testId }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <label htmlFor={name} className="block text-sm font-medium text-gray-900 leading-6">
        {label}
      </label>
      <div className="mt-1">
        <input
          {...register(name)}
          type={showPassword ? "text" : "password"}
          id={name}
          data-testid={testId}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
            error ? "ring-red-500" : "ring-gray-300"
          } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            disabled && "bg-gray-100 cursor-not-allowed"
          }`}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        {error && (
          <p id={`${name}-error`} className="text-red-500 text-sm mt-1">
            {error.message}
          </p>
        )}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute top-9 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500"
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          &nbsp;
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

PasswordField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.object,
  disabled: PropTypes.bool,
};
