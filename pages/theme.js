// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  spacejelly: '#692ba8',
}

// 3. extend the theme
const theme = extendTheme({ config, colors })

export default theme