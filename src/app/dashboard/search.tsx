import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Search() {
  return (
    <div className="flex items-center space-x-2 w-1/2 border p-2 rounded transition-colors duration-150 ease-in-out hover:border-blue-800 ">
      <input
        type="text"
        placeholder="Search"
        className="flex-grow w-full p-1 outline-none"
      />

      <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
    </div>
  );
}
