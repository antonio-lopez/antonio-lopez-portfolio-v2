import '../styles/globals.css';
import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <NextSeo
          title='Antonio Lopez'
          description='An online portfolio by Antonio Lopez. Showcase of my projects and information about me.'
          canonical='https://www.antoniolopez.me/'
          openGraph={{
            type: 'website',
            url: 'https://www.antoniolopez.me/',
            title: 'Antonio Lopez',
            description:
              'An online portfolio by Antonio Lopez. Showcase of my projects and information about me.',
            images: [
              {
                url: 'https://raw.githubusercontent.com/antonio-lopez/antonio-lopez-portfolio-v2/main/public/projects/seo-cover.png',
                width: 800,
                height: 600,
                alt: 'Portfolio cover',
                type: 'image/png',
              },
            ],
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
