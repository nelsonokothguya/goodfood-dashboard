import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Search() {
  return (
    <div className="flex items-center space-x-2 border p-2 rounded transition-colors duration-150 ease-in-out hover:border-blue-500">
      {/* Input field */}
      <input
        type="text"
        placeholder="Search"
        className="flex-grow p-1 outline-none"
      />
      {/* Magnifying glass icon */}
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
    </div>
  );
}
