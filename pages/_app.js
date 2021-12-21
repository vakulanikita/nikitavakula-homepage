import { ChakraProvider } from "@chakra-ui/react"
import '../styles/globals.scss';
import theme from '../lib/theme';
import { AnimatePresence } from 'framer-motion'
import MainLayout from "../components/layouts/main-layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  )
}

export default MyApp
