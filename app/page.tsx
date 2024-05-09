import PostFeed from "@/components/PostFeed";
import PostForm from "@/components/PostForm";
import UserInformation from "@/components/UserInformation";
import Widget from "@/components/Widget";
import connectDB from "@/mongodb/db";
import { Post } from "@/mongodb/models/post";
import { SignedIn } from "@clerk/nextjs";

export default async function Home() {
  await connectDB()
  const posts = await Post.getAllPosts();

  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">
      <section className="hidden md:col-span-2 md:inline">
        <UserInformation posts={posts} />
      </section>

      <section
        className="col-span-full md:col-span-6 xl:col-span-4 xl-max-2-xl
       mx-auto w-full">
        <SignedIn>
          <PostForm />
        </SignedIn>
        <PostFeed posts={posts}/>
      </section>

      <section className="hidden xl:inline col-span-2 justify-center">
        <Widget/>
      </section>
    </div>
  );
}
