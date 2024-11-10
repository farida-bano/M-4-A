// pages/_app.js

import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> | <Link href="/ssr">SSR Page</Link> |{' '}
        <Link href="/ssg">SSG Page</Link> | <Link href="/login">Login</Link> |{' '}
        <Link href="/protected">Protected Page</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
