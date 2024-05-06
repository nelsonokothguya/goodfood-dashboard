import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Search from "./search";
import AccountInfo from "./account-info";
import Logo from "./logo";

export default function Header() {
  return (
    <div className="flex w-full gap-5">
      <div className="w-1/6">
        <Logo />
      </div>
      <div className="w-1/2 ">
        <Search />
      </div>
      <div className="w-1/3">
        <AccountInfo />
      </div>
    </div>
  );
}
