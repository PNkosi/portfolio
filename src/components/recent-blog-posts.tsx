import React from "react";
import SectionHeader from "./section-header";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";

type Post = {
  id: number;
  img: string;
  title: string;
  content: string;
};

const posts: Post[] = [
  {
    id: 1,
    img: "/design-inspiration.png",
    title: "Using Clerk For Authentication",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum qui repellendus debitis, animi ab provident culpa, commodi iure ea ullam quo, quae esse consequatur corporis incidunt. Illum molestias optio animi, earum fuga reprehenderit ratione tenetur, aliquid repellendus unde deleniti vero officia itaque error quaerat voluptas magni, aut assumenda? Est architecto explicabo quisquam recusandae illum. Animi error enim molestias earum. Reprehenderit aut nobis iusto quaerat excepturi, aspernatur sint libero, ad maiores ex cumque nulla perspiciatis asperiores? Ipsam, ab perspiciatis sequi expedita nemo iusto facere, cupiditate sapiente, beatae neque non et quisquam. Animi dicta laudantium perferendis cum odit error ipsa impedit rerum",
  },
  {
    id: 2,
    img: "/design-inspiration.png",
    title: "Using Clerk For Authentication",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum qui repellendus debitis, animi ab provident culpa, commodi iure ea ullam quo, quae esse consequatur corporis incidunt. Illum molestias optio animi, earum fuga reprehenderit ratione tenetur, aliquid repellendus unde deleniti vero officia itaque error quaerat voluptas magni, aut assumenda? Est architecto explicabo quisquam recusandae illum. Animi error enim molestias earum. Reprehenderit aut nobis iusto quaerat excepturi, aspernatur sint libero, ad maiores ex cumque nulla perspiciatis asperiores? Ipsam, ab perspiciatis sequi expedita nemo iusto facere, cupiditate sapiente, beatae neque non et quisquam. Animi dicta laudantium perferendis cum odit error ipsa impedit rerum",
  },
  {
    id: 3,
    img: "/design-inspiration.png",
    title: "Using Clerk For Authentication",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum qui repellendus debitis, animi ab provident culpa, commodi iure ea ullam quo, quae esse consequatur corporis incidunt. Illum molestias optio animi, earum fuga reprehenderit ratione tenetur, aliquid repellendus unde deleniti vero officia itaque error quaerat voluptas magni, aut assumenda? Est architecto explicabo quisquam recusandae illum. Animi error enim molestias earum. Reprehenderit aut nobis iusto quaerat excepturi, aspernatur sint libero, ad maiores ex cumque nulla perspiciatis asperiores? Ipsam, ab perspiciatis sequi expedita nemo iusto facere, cupiditate sapiente, beatae neque non et quisquam. Animi dicta laudantium perferendis cum odit error ipsa impedit rerum",
  },
];

const RecentBlogPosts = () => {
  return (
    <section className="container py-24 px-4">
      <SectionHeader textVariant="dark">Recent Blog Posts</SectionHeader>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(({id, img, title, content}) => (
            <div>
                <Image src={img} alt={title} width={375} height={400} />
                <div className="space-y-4">
                    <h3>{title}</h3>
                    <p>{content.slice(0, 50)}...</p>
                </div>
                <Link className="mt-4 inline-block" href={`/blog/${title}`}>
                    <Button className="bg-dark-foreground text-light-foreground" size="sm">READ MORE</Button>
                </Link>
            </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogPosts;
