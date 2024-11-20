import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { ThemeSwitch } from './ThemeSwitch';

const LogoDiv = (
  <div className='flex items-center gap-2'>
    <span className='text-2xl font-bold tracking-tight'>Prospera</span>
  </div>
);

const menuItems = [
  { label: 'Invest', href: '#' },
  { label: 'How It Works', href: '#' },
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

const Navbar = () => (
  <section className='sticky top-0 z-50 p-6'>
    <div className='container rounded-full border border-border/80 bg-background/80 py-3 backdrop-blur-lg backdrop-filter'>
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
          <Button variant='ghost'>Log in</Button>
          <Button>Sign up</Button>
          <ThemeSwitch variant='ghost' />
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
                    <Button variant='outline'>Log in</Button>
                    <Button>Sign up</Button>
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

export default Navbar;
