import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Search from "./search";
import AccountInfo from "./account-info";
import Logo from "./logo";

export default function Header() {
  return (
    <>
      <Logo />
      <Search />
      <AccountInfo />
    </>
  );
}
