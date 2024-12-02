import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export function TextFormField(props) {
  const { label, placeholder, register, name, error, disabled = false, type = "text", testId } = props;
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-900 leading-6">
          {label}
        </label>
      )}
      <div className="mt-1">
        <input
          {...register(name)}
          type={type}
          id={name}
          data-testid={testId}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
          className={classNames(
            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset",
            error ? "ring-red-500" : "ring-gray-300",
            "placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            disabled && "bg-gray-100 cursor-not-allowed"
          )}
        />
        {error && (
          <p id={`${name}-error`} className="text-red-500 text-sm mt-1">
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
}

TextFormField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.object,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  testId: PropTypes.string,
};

TextFormField.defaultProps = {
  label: "",
  placeholder: "",
  error: null,
  disabled: false,
  type: "text",
  testId: "",
};
