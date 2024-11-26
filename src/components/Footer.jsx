import { metadata } from '@/app/layout';
import { Separator } from '@/components/ui/separator';
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Button } from './ui/button';

function Footer() {
  const sections = [
    {
      title: 'Personal',
      links: [
        { name: 'Accounts', href: '/accounts' },
        { name: 'Investments', href: '/investments' },
        { name: 'How It Works', href: '/how' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Learn', href: '/learn' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Security Policy', href: '/security' },
      ],
    },
  ];

  const socials = [
    { name: 'GitHub', href: 'https://github.com/mshll/prospera-frontend/', icon: <GitHubLogoIcon /> },
    { name: 'LinkedIn', href: '#', icon: <LinkedInLogoIcon /> },
    { name: 'Twitter', href: '#', icon: <TwitterLogoIcon /> },
    { name: 'Instagram', href: '#', icon: <InstagramLogoIcon /> },
  ];

  return (
    <footer className='w-full border-t border-border/[.5] bg-background'>
      <div className='container mx-auto flex flex-col items-center justify-between p-2'>
        <div className='flex w-full flex-col items-start justify-between gap-10 px-4 py-10 md:flex-row'>
          <div className='flex flex-col items-start justify-center gap-6 text-start'>
            <Link href='/' className='flex items-center justify-center gap-x-2'>
              <div className='text-2xl font-bold tracking-tight'>Prospera.</div>
            </Link>
            <p className='text-sm text-muted-foreground'>{metadata.description}</p>
            <div className='flex items-center justify-start gap-x-4'>
              {socials.map((social) => (
                <Link key={social.name} href={social.href}>
                  <Button variant='ghost' size='icon' className='text-muted-foreground hover:text-primary'>
                    {social.icon}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className='flex flex-wrap items-baseline justify-between gap-x-32 gap-y-6 text-start'>
            {sections.map((section) => (
              <div key={section.title} className='flex flex-col items-start justify-center gap-4'>
                <h2 className='font-semibold'>{section.title}</h2>
                <ul className='flex flex-col items-start justify-start gap-1'>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={'#'}>
                        <Button variant='link' size='sm' className='px-0 text-muted-foreground hover:text-primary'>
                          {link.name}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className='flex w-full flex-col items-center justify-between gap-x-4 pb-24 pt-2 text-center font-[family-name:var(--font-geist-mono)] text-xs tracking-wider text-muted-foreground/[.8] md:flex-row'>
          <p>&copy; {new Date().getFullYear()} Boubyan Bank & CODED. All rights reserved.</p>
          <p>
            Crafted by{' '}
            <Link href='https://github.com/mshll' target='_blank'>
              <Button variant='link' size='sm' className='px-0 text-muted-foreground/[.8] hover:text-primary'>
                Meshal
              </Button>
            </Link>
            ,{' '}
            <Link href='https://github.com/yousefalm1' target='_blank'>
              <Button variant='link' size='sm' className='px-0 text-muted-foreground/[.8] hover:text-primary'>
                Yousef
              </Button>
            </Link>
            ,{' '}
            <Link href='#' target='_blank'>
              <Button variant='link' size='sm' className='px-0 text-muted-foreground/[.8] hover:text-primary'>
                Danah
              </Button>
            </Link>
            , &{' '}
            <Link href='#' target='_blank'>
              <Button variant='link' size='sm' className='px-0 text-muted-foreground/[.8] hover:text-primary'>
                Fatma
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
