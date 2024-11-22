import RegisterForm from '@/components/RegisterForm';
import { Button } from '@/components/ui/button';
import SignupImg from '@/images/signup-bg.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { metadata } from '../layout';
import { ThemeSwitch } from '@/components/ThemeSwitch';

function SignupPage() {
  return (
    <main className='relative min-h-screen w-full overflow-hidden'>
      <div className='fixed inset-0 -z-10'>
        <Image src={SignupImg} layout='fill' objectFit='cover' alt='Login background' />
      </div>

      <div className='flex min-h-screen w-full flex-col'>
        <div className='flex flex-1'>
          <div className='hidden flex-col justify-between p-16 md:flex md:w-2/5 lg:w-3/5'>
            <Link href='/' className='flex items-center gap-x-2'>
              <span className='text-5xl font-bold tracking-tight text-background dark:text-foreground'>Prospera.</span>
            </Link>
            <ThemeSwitch />
          </div>

          <div className='flex w-full flex-col items-center justify-between bg-background/90 px-4 py-8 backdrop-blur-xl backdrop-filter md:w-3/5 md:border-s lg:w-2/5'>
            {/* Mobile Header */}
            <div className='flex w-full items-center justify-between px-4 py-8 md:hidden'>
              <Link href='/' className='flex items-center gap-x-2'>
                <span className='text-3xl font-bold tracking-tight text-foreground'>Prospera.</span>
              </Link>
              <ThemeSwitch />
            </div>
            <div className='flex w-full max-w-md flex-1 flex-col justify-center rounded-lg p-6'>
              <div className='mb-10'>
                <h2 className='mb-1 text-3xl font-bold'>Create an account</h2>
                <h3 className='text-muted-foreground'>Register for your {metadata.title} account.</h3>
              </div>
              <div className='grid gap-4'>
                <RegisterForm />
              </div>
              <div>
                <p className='mt-2 text-xs text-muted-foreground'>
                  Already have an account?
                  <Link href='/login'>
                    <Button variant='link' size='sm' className='px-1 text-muted-foreground'>
                      Log in here.
                    </Button>
                  </Link>
                </p>
              </div>
            </div>
            <div className='flex w-full items-center justify-between px-4 py-8 md:hidden'></div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default SignupPage;
