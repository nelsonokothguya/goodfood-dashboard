"use client";

import clsx from "clsx";
import {
  ChartBarIcon,
  ShoppingCartIcon,
  DocumentIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  WalletIcon,
  UserIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ links }) {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.Icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "h-{40px} hover: flex grow items-center justify-center gap-3 rounded-md bg-gray-50 p-3 px-3 text-sm font-medium text-gray-600 hover:bg-blue-300 hover:text-blue-700 md:justify-start md:p-2",
              {
                "bg-sky-100 text-blue-400": pathName === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
