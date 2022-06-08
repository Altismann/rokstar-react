import Script from 'next/script';

function MyApp({ Component, pageProps }) {
 

    //...
      return (
        <>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=XXXXXXXXX`}
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-MZEMGBYQZR', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
    
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      );
    }
