import RegisterForm from '@/components/RegisterForm';
import { Button } from '@/components/ui/button';
import SignupImg from '@/images/signup-bg.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { metadata } from '../layout';

function LoginPage() {
  return (
    <main className='relative flex w-full flex-col'>
      <div className='flex h-full min-h-screen w-full flex-col md:flex-row'>
        {/* Left side - Image */}
        <div className='relative hidden w-full md:flex md:w-2/5 lg:w-3/5'>
          {/* Add the logo at the top-left corner */}
          <div className='absolute left-10 top-0 z-10 m-6 translate-y-1/2'>
            <Link href='/' className='flex items-center gap-x-2'>
              <span className='text-5xl font-bold tracking-tight text-background dark:text-foreground'>Prospera</span>
            </Link>
          </div>
          <Image src={SignupImg} layout='fill' objectFit='cover' alt='Signup image' />
        </div>
        {/* Right side - Form */}
        <div className='flex w-full items-center justify-center border-s px-6 py-36 text-foreground md:w-3/5 lg:w-2/5'>
          <div className='w-full max-w-md bg-background/80 py-3 backdrop-blur-lg backdrop-filter'>
            <div className='mb-10'>
              <h2 className='text-3xl font-bold'>Create an account</h2>
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
        </div>
      </div>
    </main>
  );
}
export default LoginPage;
