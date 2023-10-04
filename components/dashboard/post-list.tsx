import { EmptyPlaceholder } from '@/components/dashboard/empty-placeholder';
import { PostCreateButton } from '@/components/dashboard/post-create-button';
import { PostItem } from '@/components/dashboard/post-item';
import { CompletePost } from '@/lib/db/schema/posts';

export default function PostList({ posts }: { posts: CompletePost[] }) {
  return (
    <div>
      {posts.length > 0 ? (
        <div className='divide-y divide-border rounded-md border'>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name='post' />
          <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any posts yet. Start creating content.
          </EmptyPlaceholder.Description>
          <PostCreateButton variant='outline' />
        </EmptyPlaceholder>
      )}
    </div>
  );
}
