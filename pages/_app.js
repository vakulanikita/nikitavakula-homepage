import { ChakraProvider } from "@chakra-ui/react"
import '../styles/globals.scss';
import theme from '../lib/theme';
import { AnimatePresence } from 'framer-motion'
import MainLayout from "../components/layouts/main-layout";
import GoogleAnalytics from "../components/GoogleAnalytics";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
          {
            process.env.NODE_ENV === 'production' &&
              <>
                <GoogleAnalytics />
              </>
          }
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  )
}

export default MyApp
