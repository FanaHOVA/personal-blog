import { Header } from '../components/header';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Alessio</title>
        <meta property="og:title" content='About Alessio' />
        <meta property="og:site_name" content="Alessio Fanelli's blog" />
        <meta property="og:description" content='About Alessio' />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@fanahova" />
      </Head>

      <Header />
      <div className="prose lg:prose-lg mx-auto px-4 py-8">
        <h1>Contact</h1>

        <p>alessio[at]decibel.vc, or <a href='https://twitter.com/fanahova' target='_blank'>@FanaHOVA</a> on Twitter.</p>
        
        <h1>About Me</h1>

        <p>
        I was born and raised in Rome, but now live in the Bay Area. I'm a Partner at <a href='https://decibel.vc' target='_blank'>Decibel</a>, where I lead Seed and Series A rounds in AI, infrastructure software, security, and dev tools. I'm also the CTO of the firm, leading the development of our internal software platform that we use for programmatic sourcing, tracking projects, etc.  
        </p>

        <p>
        This blog has a lot of my writing; I also co-host the <a href='https://latent.space/' target='_blank'>Latent Space podcast</a>, the largest AI Engineers community, with my friend swyx. In 2023 we had well over a million views. 
        </p>

        <p>
        In my spare time, I play soccer, Magic The Gathering, as well as some FPS games (mostly COD / CS). Ping me about that any time! :)
        </p>
      </div>
    </>
  );
}
