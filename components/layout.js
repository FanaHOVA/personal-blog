import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { Header } from './header';

export default function Blog(props) {
  const { meta, route, ...rest } = props;

  const sharedHead = (
    <Head>
      <title>{meta.title}</title>
      <meta property="og:title" content={meta.title} />
      <meta property="og:site_name" content="Alessio Fanelli's blog" />
      <meta property="og:description" content={meta.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@fanahova" />
      <meta property="og:image" content={meta.og} />
    </Head>
  );

  if (route.startsWith('/blog')) {
    return function Layout({ children }) {
      return (
        <>
          {sharedHead}
          <Header />
          <div className="prose lg:prose-lg mx-auto px-4 py-8">
            <h1>
              {meta.title}
              <br />
              <span className='text-sm font-normal italic'>Posted on {new Date(Date.parse(meta.date)).toLocaleDateString("en-US")}</span>
            </h1>
            {console.log(children)}
            <MDXProvider>{children}</MDXProvider>
          </div>
        </>
      );
    };
  }

  return function Layout({ children }) {
    return (
      <>
        {sharedHead}
        {children}
      </>
    );
  };
}
