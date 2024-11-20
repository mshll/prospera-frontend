'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeSwitch({ variant = 'outline' }) {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant={variant} size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
      <Moon className="h-[1.2rem] w-[1.2rem] transition-all hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
