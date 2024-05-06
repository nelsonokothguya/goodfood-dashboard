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
  href: string;
  Icon: FunctionComponent<ComponentProps<ComponentType>>;
  section: string;
};

type Sections = Record<string, Link[]>;

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

export default function Sidenav() {
  const groupedLinks = groupBySection(links);

  return (
    <div className="p-6">
      {Object.entries(groupedLinks).map(([sectionTitle, links]) => (
        <Fragment key={sectionTitle}>
          <div
            className="mt-6 mb-2 width-47 position-relative font-size-11 letter-spacing-1 line-height-11 font-family-poppins color-082431 text-align-left display-inline-block"
            style={{ opacity: 0.5 }}
          >
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
