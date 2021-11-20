import { Box, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export default function CustomButton({ children, href }) {
  return (
    <NextLink href={href}>
      <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" >
        { children }
      </Button>
    </NextLink>
  )
}