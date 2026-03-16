'use client';

import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { LuUser } from 'react-icons/lu';
import { FiSettings } from 'react-icons/fi';

import { logout } from '@/actions/auth/logout';
import { IUser } from '@/models/userModel';

import { ShowIcon } from '@/components/show-icon';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Image from 'next/image';
import { TbSettings } from 'react-icons/tb';

interface Props {
  user: IUser | null | undefined;
}

export function UserMenu({ user }: Props) {
  function handleLogout() {
    logout();
  }

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            {user?.photo ? (
              <Image
                className="rounded-full h-11 w-11 object-cover"
                src={user?.photo}
                blurDataURL={user?.photo}
                placeholder="blur"
                alt="profile image"
                width={200}
                height={200}
                quality={100}
                priority
              />
            ) : (
              <ShowIcon>
                <FaUser size={21} />
              </ShowIcon>
            )}
          </MenubarTrigger>

          <MenubarContent align="end" className="min-w-[200px]">
            <div className="px-3 py-2 border-b border-border">
              <p className="text-sm font-semibold text-[#1a1612] leading-none">
                {user?.fullName || user?.username}
              </p>
              <p className="text-xs text-[#8a8278] mt-1">
                {user?.email}
              </p>
            </div>

            <MenubarSeparator />

            <Link href="/profile" prefetch>
              <MenubarItem className="gap-2 cursor-pointer">
                <LuUser size={15} className="text-[#f07c1e]" />
                <span className="text-sm">Profile</span>
              </MenubarItem>
            </Link>

            <Link href="/profile/info" prefetch>
              <MenubarItem className="gap-2 cursor-pointer">
                <FiSettings size={15} className="text-[#f07c1e]" />
                <span className="text-sm">Settings</span>
              </MenubarItem>
            </Link>

            <MenubarSeparator />

            <MenubarItem onClick={handleLogout} className="gap-2 cursor-pointer text-red-500 focus:text-red-500">
              <MdLogout size={15} />
              <span className="text-sm">Log out</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
