'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Icons } from '@/components/icons';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/components/ui/use-toast';
import { Post, NewPostParams, insertPostParams } from '@/lib/db/schema/posts';
import { trpc } from '@/lib/trpc/client';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

const PostForm = ({
  post,
  closeModal,
}: {
  post?: Post;
  closeModal: () => void;
}) => {
  const { toast } = useToast();

  const editing = !!post?.id;

  const router = useRouter();
  const utils = trpc.useContext();

  const form = useForm<z.infer<typeof insertPostParams>>({
    // latest Zod release has introduced a TS error with zodResolver
    // open issue: https://github.com/colinhacks/zod/issues/2663
    // errors locally but not in production
    resolver: zodResolver(insertPostParams),
    defaultValues: post ?? {
      title: 'Untitled Post',
      content: '',
      published: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const onSuccess = (action: 'create' | 'update' | 'delete') => {
    utils.posts.getPosts.invalidate();
    router.refresh();
    closeModal();
    toast({
      title: 'Success!',
      description: `Post ${action}d`,
      variant: 'default',
    });
  };

  const onError = (error: any) => {
    toast({
      title: 'Error',
      description: error.message,
      variant: 'destructive',
    });
  };

  const { mutate: createPost, isLoading: isCreating } =
    trpc.posts.createPost.useMutation({
      onSuccess: () => onSuccess('create'),
      onError: (error) => onError(error),
    });

  const { mutate: updatePost, isLoading: isUpdating } =
    trpc.posts.updatePost.useMutation({
      onSuccess: () => onSuccess('update'),
    });

  const { mutate: deletePost, isLoading: isDeleting } =
    trpc.posts.deletePost.useMutation({
      onSuccess: () => onSuccess('delete'),
    });

  const handleSubmit = (values: NewPostParams) => {
    if (editing) {
      updatePost({ ...values, id: post.id });
    } else {
      createPost(values);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={'space-y-8'}>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Input {...field} value={field.value ?? ''} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='published'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Published</FormLabel>
              <br />
              <FormControl>
                <Checkbox
                  {...field}
                  checked={!!field.value}
                  onCheckedChange={field.onChange}
                  value={''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='createdAt'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Created At</FormLabel>
              <br />
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <Icons.calendar className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={new Date(field.value)}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='updatedAt'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Updated At</FormLabel>
              <br />
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <Icons.calendar className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={new Date(field.value)}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='mr-1'
          disabled={isCreating || isUpdating}
        >
          {editing
            ? `Sav${isUpdating ? 'ing...' : 'e'}`
            : `Creat${isCreating ? 'ing...' : 'e'}`}
        </Button>
        {editing ? (
          <Button
            type='button'
            variant={'destructive'}
            onClick={() => deletePost({ id: post.id })}
          >
            Delet{isDeleting ? 'ing...' : 'e'}
          </Button>
        ) : null}
      </form>
    </Form>
  );
};

export default PostForm;
