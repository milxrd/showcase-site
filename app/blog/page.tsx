'use client'

import React from 'react';
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import NextImage from 'next/image'

import { useAppContext } from '../AppContext';
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <article key={post.slug} className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 animate-opacity-show">
      <h2 className="mb-1 text-xl text-black">{post.title}</h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'dd. LL. yyyy')}
      </time>
      
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0 text-black" dangerouslySetInnerHTML={{ __html: post.text }} />
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {post.image && (
        <div className="flex mb-4 justify-center">
          <NextImage
            src={post.image.src}
            alt={post.title}
            width={post.image.width || 800}
            height={post.image.height || 400}
            className="w-full max-w-2xl h-auto object-contain rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            priority={true}
          />
        </div>
      )}
    </article>
  )
}

export default function Page() {
  const { pageTitle, navItems, author } = useAppContext();
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="relative flex font-serif antialiased bg-hero-pattern bg-cover overflow-hidden bg-beige flex-col min-h-screen">
      <Header title={pageTitle} navItems={navItems}/>
      
      <main className="container mx-auto px-4 py-8 block relative z-10 text-black mt-64">
        {/* <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1> */}
        <div className="flex flex-col space-y-8">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post}/>
          ))}
        </div>
      </main>

      <Footer author={author} />
    </div>
  );
}
