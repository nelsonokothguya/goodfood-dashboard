"use client";
import NavLinks from "./nav-links";
import { Fragment, FunctionComponent } from "react";
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
  url: string;
  Icon: FunctionComponent<ComponentProps<ComponentType>>;
  section: string;
};

export type Sections = Record<string, Link[]>;

export const links = [
  {
    id: 1,
    name: "Dashboard",
    url: "/",
    Icon: ChartBarIcon,
    section: "MENU",
  },
  {
    id: 2,
    name: "Food Order",
    url: "/order",
    Icon: ShoppingCartIcon,
    section: "MENU",
  },
  {
    id: 3,
    name: "Manage Menu",
    url: "/menu",
    Icon: DocumentIcon,
    section: "MENU",
  },
  {
    id: 4,
    name: "Customer Review",
    url: "/reviews",
    Icon: ChatBubbleLeftEllipsisIcon,
    section: "MENU",
  },
  {
    id: 5,
    name: "Settings",
    url: "/settings",
    Icon: Cog6ToothIcon,
    section: "OTHERS",
  },
  {
    id: 6,
    name: "Payment",
    url: "/payment",
    Icon: WalletIcon,
    section: "OTHERS",
  },
  {
    id: 7,
    name: "Accounts",
    url: "/account",
    Icon: UserIcon,
    section: "OTHERS",
  },
  {
    id: 8,
    name: "Help",
    url: "/help",
    Icon: InformationCircleIcon,
    section: "OTHERS",
  },
];

export default function Sidenav() {
  const groupedLinks = groupBySection(links);

  return (
    <div className="p-6">
      {Object.entries(groupedLinks).map(([sectionTitle, links]) => (
        <Fragment key={sectionTitle}>
          <div className="text-gray-500 font-semibold text-sm text-center mt-9 mb-4">
            {sectionTitle}
          </div>

          <NavLinks links={links} />
        </Fragment>
      ))}
    </div>
  );
}

function groupBySection(links: Link[]): Sections {
  return links.reduce((sections: Sections, link) => {
    if (!sections[link.section]) {
      sections[link.section] = [];
    }
    sections[link.section].push(link);
    return sections;
  }, {} as Sections);
}
