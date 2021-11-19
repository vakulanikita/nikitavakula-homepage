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

// import { extendTheme } from '@chakra-ui/react'
// import { mode } from '@chakra-ui/theme-tools'

// const styles = {
//   global: props => ({
//     body: {
//       bg: mode('#f0e7db', '#202023')(props)
//     }
//   })
// }

// const components = {
//   Heading: {
//     variants: {
//       'section-title': {
//         textDecoration: 'underline',
//         fontSize: 20,
//         textUnderlineOffset: 6,
//         textDecorationColor: '#525252',
//         textDecorationThickness: 4,
//         marginTop: 3,
//         marginBottom: 4
//       }
//     }
//   },
//   Link: {
//     baseStyle: props => ({
//       color: mode('#3d7aed', '#ff63c3')(props),
//       textUnderlineOffset: 3
//     })
//   }
// }

// const fonts = {
//   heading: "'M PLUS Rounded 1c'"
// }

// const colors = {
//   grassTeal: '#88ccca'
// }

// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: true
// }

// const theme = extendTheme({ config, styles, components, fonts, colors })
// export default theme
