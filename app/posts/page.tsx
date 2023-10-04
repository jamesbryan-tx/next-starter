import PostList from "@/components/posts/PostList";
import NewPostModal from "@/components/posts/PostModal";
import { getPosts } from "@/lib/api/posts/queries";
import { checkAuth } from "@/lib/auth/utils";

export default async function Posts() {
  await checkAuth();
  const { posts } = await getPosts();  

  return (
    <main className="max-w-3xl mx-auto p-5 md:p-0 sm:pt-4">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl my-2">Posts</h1>
        <NewPostModal />
      </div>
      <PostList posts={posts} />
    </main>
  );
}
