import React from "react";
import PageTitle from "@/components/PageTitle";
import BlogPostDisplay from "@/app/blog/BlogPostDisplay";

export interface IndexBlogPost {
    id: number;
    attributes: {
        title: string;
        description: string;
        slug: string;
        publishedAt: string;
    }
}

export interface BlogPostBody<T> {
    data: T;
    meta: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number
        }
    }
}

interface IndexBlogPostBody
    extends BlogPostBody<IndexBlogPost[]> {

}

export default async function Blog() {
    const postsResponse = await fetch(
        process.env.STRAPI_URL! + "/api/blog-posts?sort=publishedAt:desc",
        {
            cache: "no-cache"
        }
    );
    const postsBody: IndexBlogPostBody = await postsResponse.json();

    return (
        <section className="padding-container">
            <PageTitle>blog</PageTitle>
            <div className="flex flex-col gap-8">
                {postsBody.data.map((blogPost, index) => (
                    <BlogPostDisplay
                        key={index}
                        blogPost={blogPost}
                    />
                ))}
            </div>
        </section>
    );
}