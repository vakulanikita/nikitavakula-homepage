import {
  Box,
  Button,
  Link
} from '@chakra-ui/react'

export default function MediaLink({ children, href, icon }) {
  return (
    <Box>
      <Link href={href}>
        <Button
          leftIcon={icon}
          colorScheme="teal" 
          variant="ghost"
        >
          { children }
        </Button>
      </Link>
    </Box>
  )
}