import { useEffect } from "react";
import App from 'next/app'
import Head from "next/head";
import { useRouter } from 'next/router'
import SSRProvider from 'react-bootstrap/SSRProvider';

import NProgress from 'nprogress'

import { UserProvider } from "../store/context/userContext";
import { OrderProvider } from "../store/context/orderContext";
import { CartProvider } from "../store/context/cartContext";
import { WishlistProvider } from "../store/context/wishlistContext";
import { AddressProvider } from "../store/context/addressContext";
import Layout from "../components/layout";
import { getAllMenus } from "../lib/api/public";

import "react-datepicker/dist/react-datepicker.css";
import "react-step-progress/dist/index.css";
import "sweetalert2/src/sweetalert2.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/radimart.scss";

config.autoAddCss = false;

const MyApp = ({ Component, pageProps}) => {
  const router = useRouter()

  useEffect(() => {
    // Progress start
    const handleStart = () => {
      NProgress.start()
    }
    // Progress stop
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
      <SSRProvider>
        <UserProvider>
          <OrderProvider>
            <CartProvider>
              <WishlistProvider>
                <AddressProvider>
                  <Head>
                    {/* <meta charset="UTF-8" /> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/fav-icon-bg.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/fav-icon-bg.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/fav-icon-bg.png"/>
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/images/fav-icon-bg.png" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />

                    <title>Radimart | As a business partner</title>
                    {/*<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>*/}
                    {/*<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&display=swap" rel="stylesheet"/>*/}
                  </Head>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </AddressProvider>
              </WishlistProvider>
            </CartProvider>
          </OrderProvider>
        </UserProvider>
      </SSRProvider>
  );
};

export default MyApp;

// export async function getServerSideProps(context) {
//   console.log('check app context...', context)
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   const menusRes = await getAllMenus()
//   return { ...appProps, menus: menusRes.data.data};
// };