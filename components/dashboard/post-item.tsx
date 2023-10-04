import { PostOperations } from '@/components/dashboard/post-operations';
import { Skeleton } from '@/components/ui/skeleton';
import { Post } from '@/lib/db/schema/posts';
import { formatDate } from '@/lib/utils';

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <div className='flex items-center justify-between p-4'>
      <div className='grid gap-1'>
        <p className='font-semibold'>{post.title}</p>
        <div>
          <p className='text-sm text-muted-foreground'>
            {formatDate(post.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      <PostOperations post={post} />
    </div>
  );
}

PostItem.Skeleton = function PostItemSkeleton() {
  return (
    <div className='p-4'>
      <div className='space-y-3'>
        <Skeleton className='h-5 w-2/5' />
        <Skeleton className='h-4 w-4/5' />
      </div>
    </div>
  );
};
