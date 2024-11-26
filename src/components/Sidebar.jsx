'use client';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import {
  IconArrowLeft,
  IconBuilding,
  IconBuildingPlus,
  IconLayout2,
  IconLayoutDashboard,
  IconLogout2,
  IconMoonFilled,
  IconPlusMinus,
  IconSunFilled,
  IconUser,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useTheme } from 'next-themes';
import { logout } from '@/actions/auth';

function SideBar({ children }) {
  const links = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: <IconLayout2 className='h-4 w-4 flex-shrink-0 text-foreground' />,
    },
    {
      label: 'My Properties',
      href: '/my-properties',
      icon: <IconBuilding className='h-4 w-4 flex-shrink-0 text-foreground' />,
    },
    {
      label: 'Marketplace',
      href: '/marketplace',
      icon: <IconBuildingPlus className='h-4 w-4 flex-shrink-0 text-foreground' />,
    },
    // {
    //   label: 'Transactions',
    //   href: '/transactions',
    //   icon: <IconPlusMinus className='h-4 w-4 flex-shrink-0 text-foreground' />,
    // },
    {
      label: 'Account',
      href: '/account',
      icon: <IconUser className='h-4 w-4 flex-shrink-0 text-foreground' />,
    },
    {
      label: 'Home Page',
      href: '/',
      icon: <IconArrowLeft className='h-4 w-4 flex-shrink-0 text-foreground' />,
    },
  ];

  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={cn(
        'mx-auto flex h-screen w-full flex-1 flex-col overflow-hidden rounded-md border border-border bg-secondary md:flex-row',
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className='justify-between gap-10'>
          <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
            {open ? <Logo /> : <LogoIcon />}
            <div className='mt-8 flex flex-col gap-1'>
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              {/* <ThemeSwitch variant='ghost' /> */}
            </div>
          </div>
          <div>
            <div className='mb-1 flex flex-col'>
              <SidebarLink
                link={{
                  label: 'Toggle theme',
                  href: '#',
                  icon: (
                    <div>
                      <IconSunFilled className='h-4 w-4 flex-shrink-0 text-foreground transition-all dark:hidden' />
                      <IconMoonFilled className='hidden h-4 w-4 flex-shrink-0 text-foreground transition-all dark:block' />
                    </div>
                  ),
                }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              />
              {/* <SidebarLink
                link={{
                  label: 'Account',
                  href: '/account',
                  icon: <IconUser className='h-4 w-4 flex-shrink-0 text-foreground' />,
                }}
              /> */}
              <SidebarLink
                link={{
                  label: 'Logout',
                  href: '#',
                  icon: <IconLogout2 className='h-4 w-4 flex-shrink-0 text-foreground' />,
                }}
                onClick={() => logout()}
              />
            </div>
            <SidebarLink
              link={{
                label: 'Yousef Almasaeed',
                href: '#',
                icon: (
                  <Avatar className='h-5 w-5 flex-shrink-0'>
                    <AvatarImage src='https://github.com/mshll.png' className='rounded-full border border-primary' />
                    <AvatarFallback>
                      <IconUser className='h-4 w-4 flex-shrink-0 text-foreground' />
                    </AvatarFallback>
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
    <Link href='/' className='relative z-20 flex items-center space-x-2 p-2 py-1 text-sm font-normal text-foreground'>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='whitespace-pre text-2xl font-bold tracking-tight text-foreground'
      >
        Prospera.
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link href='#' className='relative z-20 flex items-center space-x-2 p-2 py-1 text-sm font-normal text-foreground'>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='mt-2'>
        <svg version='1.2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24.151' width='24' height='24.151'>
          <path
            fill='currentColor'
            d='M0.151 5.162c0 4.211 0.045 5.343 0.242 6.083 0.121 0.498 0.408 1.238 0.634 1.66 0.226 0.408 0.906 1.268 1.54 1.902 0.709 0.709 1.449 1.298 1.962 1.54 0.453 0.226 1.268 0.513 1.811 0.649 0.83 0.196 1.751 0.226 6.189 0.181 4.936 -0.06 5.253 -0.075 6.113 -0.392 0.498 -0.181 1.268 -0.589 1.721 -0.906 0.453 -0.302 1.162 -0.936 1.585 -1.404 0.423 -0.453 0.951 -1.162 1.177 -1.585 0.226 -0.408 0.513 -1.147 0.634 -1.645 0.151 -0.574 0.242 -1.555 0.242 -2.642 0 -1.057 -0.091 -2.068 -0.226 -2.611 -0.121 -0.468 -0.408 -1.223 -0.619 -1.645 -0.226 -0.438 -0.86 -1.268 -1.404 -1.826 -0.543 -0.574 -1.298 -1.223 -1.675 -1.464 -0.377 -0.226 -1.162 -0.574 -1.736 -0.74C17.313 0 17.011 0 8.709 0H0.151zm2.491 13.026c-0.166 0.045 -0.453 0.106 -0.634 0.151 -0.196 0.03 -0.589 0.287 -0.906 0.558 -0.302 0.272 -0.634 0.709 -0.755 0.981 -0.121 0.317 -0.196 1.147 -0.196 2.385V24.151c6.989 -0.015 7.532 -0.045 7.985 -0.272 0.287 -0.151 0.725 -0.528 0.981 -0.845 0.347 -0.438 0.483 -0.77 0.528 -1.358 0.03 -0.423 0.015 -1.026 -0.045 -1.343 -0.045 -0.332 -0.302 -0.8 -0.574 -1.117 -0.272 -0.302 -0.694 -0.649 -0.951 -0.785 -0.347 -0.181 -1.026 -0.242 -2.792 -0.272 -1.283 -0.015 -2.475 0 -2.642 0.03'
          />
        </svg>
      </motion.span>
    </Link>
  );
};
