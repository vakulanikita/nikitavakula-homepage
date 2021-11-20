import { 
  Box, 
  useColorModeValue 
} from '@chakra-ui/react'

export default function Alert({ children, mb }) {
  return (
    <Box
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={3}
      mb={mb}
      borderRadius="lg"
      align="center"
    >
      {children}
    </Box>
  )
}