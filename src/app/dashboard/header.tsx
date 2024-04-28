import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Search from "./search";
import AccountInfo from "./account-info";

export default function Header() {
  return (
    <div className="flex-row">
      <header>
        <Search />
        <AccountInfo />
      </header>
    </div>
  );
}
