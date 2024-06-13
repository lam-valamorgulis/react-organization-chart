import { TextInput } from "./TextInput";

export const CreateNodeForm = ({
  name,
  title,
  department,
  location,
  handleNameChange,
  handleTitleChange,
  handleDepartmentChange,
  handleLocationChange,
  handleSubmitCreateNode,
}: {
  name: string;
  title: string;
  department: string;
  location: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDepartmentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitCreateNode: () => void;
}) => (
  <div className="max-w-sm rounded-lg border-2 overflow-hidden shadow-lg bg-white relative">
    <div className="px-6 py-4">
      <div className="flex flex-col gap-3">
        <TextInput label="Name" value={name} onChange={handleNameChange} />
        <TextInput label="Title" value={title} onChange={handleTitleChange} />
        <TextInput
          label="Department"
          value={department}
          onChange={handleDepartmentChange}
        />
        <TextInput
          label="Location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="bottom-2 right-2 justify-end flex pt-2">
        <button
          type="button"
          className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmitCreateNode}
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
);
