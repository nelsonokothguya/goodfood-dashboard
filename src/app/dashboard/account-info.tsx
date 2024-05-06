import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function AccountInfo() {
  return (
    <div className="flex items-center justify-end">
      <div className="flex items-center space-x-2">
        <Image
          src="/account-info/emoticon.png"
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">Delicious Burger</p>
        </div>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      <div className="relative flex items-center ml-4">
        <BellIcon className="h-6 w-6 text-gray-400" />
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
          <span className="block rounded-full w-6">
            <Image
              src="/account-info/notification-sign.png"
              alt="notification"
              width={10}
              height={10}
              layout="fixed"
            />
          </span>
        </span>
      </div>
    </div>
  );
}
