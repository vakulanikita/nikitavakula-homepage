import { ChakraProvider } from "@chakra-ui/react"
import '../styles/globals.scss';
import theme from '../lib/theme';
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
