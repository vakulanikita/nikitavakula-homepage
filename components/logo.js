import NextLink from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  ${'' /* padding: 10px; */}
`

export default function Logo() {
  return (
    <NextLink href="/">
      <a>
        <LogoBox>
          <Text textDecoration="none">Nikita Vakula</Text>
        </LogoBox>
      </a>
    </NextLink>
  )
}