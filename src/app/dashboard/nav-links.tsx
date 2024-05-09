"use client";

import clsx from "clsx";
import Link from "next/link";
import { Link as NavLink } from "./sidenav";
import { usePathname } from "next/navigation";

export default function NavLinks({ links }: { links: NavLink[] }) {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.Icon;
        return (
          <Link
            key={link.name}
            href={link.url}
            className={clsx(
              "h-10 flex grow items-center justify-center gap-7 rounded-md text-sm  hover:bg-blue-300 hover:text-blue-700 md:justify-start md:p-2 opacity-50",
              {
                "bg-sky-100 text-blue-400": pathName === link.url,
              }
            )}
            aria-current={pathName === link.url ? "page" : undefined}
          >
            <div className="w-6">
              <LinkIcon />
            </div>
            <p className="inline-block relative text-12 tracking-0.5 leading-12 font-poppins text-gray-700 text-left md:block">
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
