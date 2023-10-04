import { DashboardHeader } from '@/components/dashboard/header';
import { PostCreateButton } from '@/components/dashboard/post-create-button';
import PostList from '@/components/dashboard/post-list';
import { DashboardShell } from '@/components/dashboard/shell';
import { getPosts } from '@/lib/api/posts/queries';

export default async function DashboardPage() {
  const { posts } = await getPosts();

  return (
    <DashboardShell>
      <DashboardHeader heading='Posts' text='Create and manage posts.'>
        <PostCreateButton />
      </DashboardHeader>
      <PostList posts={posts} />
    </DashboardShell>
  );
}
