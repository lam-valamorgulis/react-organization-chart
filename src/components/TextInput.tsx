export const TextInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="relative">
    <label
      htmlFor={label.toLowerCase()}
      className="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-medium text-gray-900"
    >
      {label}
    </label>
    <input
      type="text"
      name={label.toLowerCase()}
      id={label.toLowerCase()}
      value={value}
      onChange={onChange}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
);
