import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

export function DropdownFormField({ control, label, name, options, defaultValue = "", error }) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <select
            {...field}
            id={name}
            className={`block w-full rounded-md border-gray-300 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
              error ? "ring-red-500" : ""
            }`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}

DropdownFormField.propTypes = {
  control: PropTypes.object.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  error: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

DropdownFormField.defaultProps = {
  label: "",
  defaultValue: "",
  error: null,
};
