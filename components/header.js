import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';

export function Header() {
  return (
    <div className="flex items-center justify-between max-w-3xl px-8 mx-auto py-4">
      <Link href="/">
        <a className="block font-bold text-lg">Alessio Fanelli</a>
      </Link>
      
      <div>
        <Link href="/about">
          <a className='ml-8 hover:text-blue-500 transition'>About Me</a>
        </Link>

        <a target="_blank" href="https://twitter.com/fanahova" rel="noopener" className='ml-8 hover:text-blue-500 transition'>
          Follow Me
        </a>
      </div>
      <Analytics />
    </div>
  );
}
