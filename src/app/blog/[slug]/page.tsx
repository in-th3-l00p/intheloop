import {BlogPostBody} from "@/app/blog/page";
import PageTitle from "@/components/PageTitle";
import React from "react";
import {MDXRemote} from "next-mdx-remote/rsc";
import style from "./style.module.scss";

interface BlogPost {
    id: number;
    attributes: {
        title: string;
        description: string;
        slug: string;
        publishedAt: string;
        content: string;
    }
}

export default async function BlogPost({ params }: {
    params: {
        slug: string;
    };
}) {
    const postResponse = await fetch(process.env.STRAPI_URL! + `/api/blog-posts?filters[slug][$eq]=${params.slug}`);
    const postBody: BlogPostBody<BlogPost[]> = await postResponse.json();
    const post = postBody.data[0];

    return (
        <section className="padding-container">
            <PageTitle>{post.attributes.title}</PageTitle>
            <div className={"mb-8"}>
                <p>Description: {post.attributes.description}</p>
                <p>Published at: {new Date(post.attributes.publishedAt).toDateString()}</p>
            </div>

            <div className={style.postContent}>
                <MDXRemote source={post.attributes.content} />
            </div>
        </section>
    );
}
