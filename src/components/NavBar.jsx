import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ArrowRightIcon, Menu } from 'lucide-react';
import Link from 'next/link';
import { ThemeSwitch } from './ThemeSwitch';
import { getUser } from '@/actions/token';

const LogoDiv = (
  <Link href='/' className='flex items-center justify-start gap-x-2'>
    <div className='text-2xl font-bold tracking-tight'>Prospera.</div>
  </Link>
);

const menuItems = [
  { label: 'Invest', href: '#' },
  { label: 'How It Works', href: '/how' },
  { label: 'About Us', href: '#' },
  { label: 'Learn', href: '#' },
];

const footerLinks = [
  { label: 'Press', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Imprint', href: '#' },
  { label: 'Sitemap', href: '#' },
  { label: 'Legal', href: '#' },
  { label: 'Cookie Settings', href: '#' },
];

const Navbar = async () => {
  const user = await getUser();

  return (
    <section className='fixed top-0 z-50 w-full px-6 pt-6'>
      <div className='container rounded-2xl border border-border/80 bg-background/80 py-3 backdrop-blur-lg backdrop-filter'>
        {/* Desktop navbar */}
        <nav className='hidden justify-between lg:flex'>
          <div className='flex items-center gap-6'>
            {LogoDiv}
            <div className='flex items-center'>
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn('text-muted-foreground', buttonVariants({ variant: 'ghost' }))}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className='flex gap-2'>
            <ThemeSwitch variant='ghost' />
            {user ? (
              <>
                <Link href='/dashboard'>
                  <Button variant='shine'>View Dashboard</Button>
                </Link>
              </>
            ) : (
              <>
                <Link href='/login'>
                  <Button variant='ghost'>Log in</Button>
                </Link>
                <Link href='/signup'>
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Mobile navbar */}
        <div className='block lg:hidden'>
          <div className='flex items-center justify-between'>
            {LogoDiv}
            <div className='flex gap-2'>
              <ThemeSwitch variant='ghost' />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant='ghost' size='icon'>
                    <Menu className='size-4' />
                  </Button>
                </SheetTrigger>
                <SheetContent className='overflow-y-auto' side='left'>
                  <SheetHeader>
                    <SheetTitle>{LogoDiv}</SheetTitle>
                  </SheetHeader>
                  <div className='flex min-h-[90%] flex-1 flex-col justify-between'>
                    <div className='my-8 flex flex-col gap-4'>
                      {menuItems.map((item) => (
                        <a key={item.label} href={item.href} className='font-semibold'>
                          {item.label}
                        </a>
                      ))}
                    </div>
                    <div className='pt-2'>
                      {/* <div className="border-t pt-4"> */}
                      {/* <div className="grid grid-cols-2 justify-start">
                    {footerLinks.map((link) => (
                      <a
                      key={link.label}
                      href={link.href}
                      className={cn(buttonVariants({ variant: 'ghost' }), 'justify-start text-muted-foreground')}
                      >
                      {link.label}
                      </a>
                      ))}
                      </div> */}
                      <div className='mt-2 flex flex-col gap-3'>
                        {user ? (
                          <Link href='/dashboard' passHref>
                            <Button size='lg' className='w-full'>
                              View Dashboard
                            </Button>
                          </Link>
                        ) : (
                          <>
                            <Link href='/login' passHref>
                              <Button variant='outline' size='lg' className='w-full'>
                                Log in
                              </Button>
                            </Link>
                            <Link href='/signup'>
                              <Button size='lg' className='w-full'>
                                Sign up
                              </Button>
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
