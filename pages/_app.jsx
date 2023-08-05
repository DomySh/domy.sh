import '../styles/index.scss'
import { EmojiRender } from '../modules/EmojiRender'
import Head from 'next/head'
import { OverlayProvider } from '../modules/Fullscreen'
import { SessionProvider } from "next-auth/react"
import '@fortawesome/fontawesome-free/css/all.min.css'
import CookieConsent from 'react-cookie-consent'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return <>
    <SessionProvider session={session}>
        <EmojiRender>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta itemProp="image" content="/favicon.ico" />
                <link itemProp="image" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <OverlayProvider>
                <Component {...pageProps} />
            </OverlayProvider>
          <CookieConsent
              location="bottom"
              buttonText="That's Ok!"
              cookieName="cookie-consent"
              style={{ background: "#0B0B0BDD", borderTop: "6px solid #000"}}
              buttonStyle={{ color: "#4e503b", fontSize: "16px" }}
            >
            This website uses cookies to enhance the user experience.
          </CookieConsent>
        </EmojiRender>
    </SessionProvider>
  </>
} export default MyApp