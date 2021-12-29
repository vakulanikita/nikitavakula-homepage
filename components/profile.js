import {
  Box,
  Heading,
  Text,
  Image
} from '@chakra-ui/react'

export default function Profile() {
  return (
    <Box display={{md: 'flex'}}>
      <Box flexGrow={1}>
        <Heading as="h2">Nikita Vakula</Heading>
        <Text>Digital Master ( Developer / Designer )</Text>
      </Box>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Image
          display="inline-block"
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          borderRadius="full" 
          w="100px"
          h="100px"
          alt="" 
          src="me.jpg"
        />
      </Box>
    </Box>
  )
}