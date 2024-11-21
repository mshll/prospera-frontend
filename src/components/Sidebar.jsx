'use client';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

function SideBar({ children }) {
  const links = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: <IconBrandTabler className='h-5 w-5 flex-shrink-0 text-foreground' />,
    },
    {
      label: 'Profile',
      href: '#',
      icon: <IconUserBolt className='h-5 w-5 flex-shrink-0 text-foreground' />,
    },
    {
      label: 'Settings',
      href: '#',
      icon: <IconSettings className='h-5 w-5 flex-shrink-0 text-foreground' />,
    },
    {
      label: 'Logout',
      href: '#',
      icon: <IconArrowLeft className='h-5 w-5 flex-shrink-0 text-foreground' />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        'mx-auto flex h-screen w-full flex-1 flex-col overflow-hidden rounded-md border border-border md:flex-row',
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className='justify-between gap-10'>
          <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
            {open ? <Logo /> : <LogoIcon />}
            <div className='mt-8 flex flex-col gap-2'>
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <ThemeSwitch variant='ghost' />
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: 'Yousef Almasaeed',
                href: '#',
                icon: (
                  <Avatar className='h-8 w-8'>
                    <AvatarImage src='https://github.com/shadcn.png' className='rounded-full border-2 border-primary' />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}

export default SideBar;

export const Logo = () => {
  return (
    <Link href='/' className='relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-foreground'>
      <div className='h-5 w-6 flex-shrink-0 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-foreground' />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='whitespace-pre font-bold text-foreground'
      >
        Prospera
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link href='#' className='relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-foreground'>
      <div className='h-5 w-6 flex-shrink-0 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-foreground' />
    </Link>
  );
};
