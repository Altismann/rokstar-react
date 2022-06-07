import Head from "next/head";
import '../styles/globals.css';
import { GoogleAnalytics } from "nextjs-google-analytics";


    const App = ({ Component, pageProps }) => {
        return (
          <>
            <GoogleAnalytics />
            <Component {...pageProps} />
          </>
        );
      };


      export default App;
