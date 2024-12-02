import PropTypes from "./PropTypes";
import { Controller } from "react-hook-form";

export function CheckboxFormField({ control, label, name, description }) {
  return (
    <div>
      <div className="flex items-center justify-left">
        <Controller
          name={name}
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => onChange(e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
          )}
        />
        <label className="text-sm font-medium text-gray-900 leading-6 pl-2">{label}</label>
      </div>
      {description && <p className="text-sm text-gray-500 mt-2">{description}</p>}
    </div>
  );
}

CheckboxFormField.propTypes = {
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};
