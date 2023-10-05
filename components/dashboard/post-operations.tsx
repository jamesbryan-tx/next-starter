'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import PostForm from '@/components/dashboard/post-form';
import { Icons } from '@/components/icons';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from '@/components/ui/use-toast';
import { Post } from '@/lib/db/schema/posts';
import { trpc } from '@/lib/trpc/client';

interface PostOperationsProps {
  post: Post;
}

export function PostOperations({ post }: PostOperationsProps) {
  const router = useRouter();
  const utils = trpc.useContext();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);

  const { mutate: deletePost, isLoading: isDeleting } =
    trpc.posts.deletePost.useMutation({
      onSuccess: () => onSuccess(),
    });

  const onSuccess = () => {
    utils.posts.getPosts.invalidate();
    router.refresh();
    toast({
      title: 'Success!',
      description: 'Post deleted',
      variant: 'default',
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className='flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted'>
          <Icons.ellipsis className='h-4 w-4' />
          <span className='sr-only'>Open</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem
            className='flex cursor-pointer items-center'
            onSelect={() => setOpen(true)}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className='flex cursor-pointer items-center text-destructive focus:text-destructive'
            onSelect={() => setShowDeleteAlert(true)}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent>
          <DialogHeader className='px-5 pt-5'>
            <DialogTitle>Edit Post</DialogTitle>
          </DialogHeader>
          <div className='px-5 pb-5'>
            <PostForm closeModal={closeModal} post={post} />
          </div>
        </DialogContent>
      </Dialog>
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this post?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletePost({ id: post.id! })}
              className='bg-red-600 focus:ring-red-600'
            >
              {isDeleting ? (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              ) : (
                <Icons.trash className='mr-2 h-4 w-4' />
              )}
              <span>Delete</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
