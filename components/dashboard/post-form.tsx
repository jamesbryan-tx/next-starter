'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Post, NewPostParams, insertPostParams } from '@/lib/db/schema/posts';
import { trpc } from '@/lib/trpc/client';

interface PostFormProps extends React.HTMLAttributes<HTMLFormElement> {
  post?: Post;
  closeModal: () => void;
}

type FormData = z.infer<typeof insertPostParams>;

const PostForm = ({ post, closeModal }: PostFormProps) => {
  const { toast } = useToast();

  const editing = !!post?.id;

  const router = useRouter();
  const utils = trpc.useContext();

  const form = useForm<FormData>({
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

  const onSuccess = (action: 'create' | 'update') => {
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

  const handleSubmit = (values: NewPostParams) => {
    if (editing) {
      updatePost({ ...values, id: post.id!, updatedAt: new Date() });
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
        <Button
          type='submit'
          className='mr-1'
          disabled={isCreating || isUpdating}
        >
          {editing
            ? `Sav${isUpdating ? 'ing...' : 'e'}`
            : `Creat${isCreating ? 'ing...' : 'e'}`}
        </Button>
      </form>
    </Form>
  );
};

export default PostForm;
