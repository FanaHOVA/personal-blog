import posts from '../posts.json';
import Link from 'next/link';
import { Header } from '../components/header';
import Head from 'next/head';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Alessio Fanelli's blog</title>
        <meta property="og:title" content="Alessio Fanelli's blog" />
        <meta property="og:site_name" content="Alessio Fanelli's blog" />
        <meta property="og:description" content="Alessio's blog and personal website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@fanahova" />
      </Head>
      
      <Header />
      <div className="max-w-4xl px-8 mx-auto py-4">
        <ul className="space-y-3">
          {posts.posts.sort((a, b) => new Date(b.date) - new Date(a.date)).map((p) => (
            <li key={p.slug} className="flex items-center space-x-3">
              <span className="block text-gray-500 lg:w-[120px] lg:min-w-[120px] sm:w-[80px] sm:min-w-[80px] text-right">
                {p.date}
              </span>
              <Link href={p.slug}>
                <a className="block font-bold transition hover:text-red-500">
                  {p.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
