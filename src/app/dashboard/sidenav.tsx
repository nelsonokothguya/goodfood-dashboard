"use client";
import NavLinks from "./nav-links";
import { Fragment } from "react";
import { ComponentProps, ComponentType } from "react";
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

export type Link = {
  id: number;
  name: string;
  href: string;
  Icon: ComponentType<ComponentProps<"svg">>;
  section: "MENU" | "OTHERS";
};

// Define your links with an additional section property.
export const links = [
  {
    id: 1,
    name: "Dashboard",
    href: "/",
    Icon: ChartBarIcon,
    section: "MENU",
  },
  {
    id: 2,
    name: "Food Order",
    href: "/order",
    Icon: ShoppingCartIcon,
    section: "MENU",
  },
  {
    id: 3,
    name: "Manage Menu",
    href: "/menu",
    Icon: DocumentIcon,
    section: "MENU",
  },
  {
    id: 4,
    name: "Customer Review",
    href: "/reviews",
    Icon: ChatBubbleLeftEllipsisIcon,
    section: "MENU",
  },
  {
    id: 5,
    name: "Settings",
    href: "/settings",
    Icon: Cog6ToothIcon,
    section: "OTHERS",
  },
  {
    id: 6,
    name: "Payment",
    href: "/payment",
    Icon: WalletIcon,
    section: "OTHERS",
  },
  {
    id: 7,
    name: "Accounts",
    href: "/account",
    Icon: UserIcon,
    section: "OTHERS",
  },
  {
    id: 8,
    name: "Help",
    href: "/help",
    Icon: InformationCircleIcon,
    section: "OTHERS",
  },
];

// Utility function to group links by section
function groupBySection(links: Link[]) {
  return links.reduce((sections, link) => {
    if (!sections[link.section]) {
      sections[link.section] = [];
    }
    sections[link.section].push(link);
    return sections;
  }, {});
}

export default function Sidenav() {
  const groupedLinks = groupBySection(links);

  return (
    <div>
      {Object.entries(groupedLinks).map(([sectionTitle, links]) => (
        <Fragment key={sectionTitle}>
          <div className="mt-6 mb-2 px-3 text-lg font-semibold">
            {sectionTitle}
          </div>

          <NavLinks links={links} />
        </Fragment>
      ))}
    </div>
  );
}
