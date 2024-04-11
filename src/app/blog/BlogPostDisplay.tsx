import {IndexBlogPost} from "@/app/blog/page";
import Link from "next/link";

export default function BlogPostDisplay({ blogPost }: {
    blogPost: IndexBlogPost
}) {
    return (
        <Link
            href={"/blog/" + blogPost.attributes.slug}
            className={
                "w-full p-8 flex gap-8 flex-wrap justify-between bg-secondary rounded-md max-w-[1000px] mx-auto " +
                "white-shadow hover:white-shadow-lg transition-all"
            }
        >
            <div>
                <h2 className={"text-2xl"}>{blogPost.attributes.title}</h2>
                <p>{blogPost.attributes.description}</p>
            </div>
            <p>Published at: {new Date(blogPost.attributes.publishedAt).toDateString()}</p>
        </Link>
    );
}