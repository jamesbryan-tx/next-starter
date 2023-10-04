'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import PostForm from '@/components/dashboard/post-form';
import { Icons } from '@/components/icons';
import { ButtonProps, buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface PostCreateButtonProps extends ButtonProps {}

export function PostCreateButton({
  className,
  variant = 'default',
  ...props
}: PostCreateButtonProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <button
          className={cn(buttonVariants({ variant }), className)}
          {...props}
        >
          <Icons.add className='mr-2 h-4 w-4' />
          New post
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className='px-5 pt-5'>
          <DialogTitle>New Post</DialogTitle>
        </DialogHeader>
        <div className='px-5 pb-5'>
          <PostForm closeModal={closeModal} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
