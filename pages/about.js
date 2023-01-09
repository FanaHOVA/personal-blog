import Link from 'next/link';
import { Header } from '../components/header';
import { MDXProvider } from '@mdx-js/react';

export default function About(props) {
  const { meta, route, ...rest } = props;

  return (
    <>
      <Header />
      <div className="prose lg:prose-lg mx-auto px-4 py-8">
        <h1>About Me</h1>

        <p>
        I was born and raised in Rome, but now live in San Francisco. I'm a Partner at <a href='https://decibel.vc' target='_blank'>Decibel</a>, where I invest in infrastructure software, security, and dev tools, as well as leading the development of our internal software platform. In my spare time, I play soccer, Magic The Gathering, along with some FPS games.  
        </p>

        <p>
        I also write a newsletter focused called <a href='http://engineeringvaluechain.substack.com' target='_blank'>The Engineering Value Chain Revolution</a>, which focuses on nascent developer tooling and software architectures. I post that on maker time, as Paul Graham would say, so no set schedule for it.
        </p>
        <p>
        Feel free to reach me at alessio[at]decibel.vc or <a href='https://twitter.com/fanahova' target='_blank'>@FanaHOVA</a> on Twitter.
        </p>
      </div>
    </>
  );
}
