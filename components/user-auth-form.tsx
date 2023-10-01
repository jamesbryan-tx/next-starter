'use client';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
            />
          </div>
          <button className={cn(buttonVariants())}>Sign In with Email</button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <div className='flex flex-col gap-y-2'>
        <button
          type='button'
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          <Icons.google className='mr-2 h-4 w-4' />
          Google
        </button>
        <button
          type='button'
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          <Icons.gitHub className='mr-2 h-4 w-4' />
          Github
        </button>
      </div>
    </div>
  );
}