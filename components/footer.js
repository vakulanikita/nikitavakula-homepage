import {
  Text
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Text align="center" color="gray.500" fontSize="sm" mb={8}>
      &copy; {new Date().getFullYear()} Nikita Vakula. - Handmade with love
    </Text>
  )
} 