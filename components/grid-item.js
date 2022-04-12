import {
  Box,
  Link,
  Text,
  Image,
} from "@chakra-ui/react"
import styled from "@emotion/styled"

const LinkBox = styled.a`
  display: inline-block;
  text-decoration: none;
  text-align: center;
`

const ImageBox = styled(Image)`
  border-radius: 12px;
  margin: 0 auto 10px;
  ${'' /* margin-bottom: 10px; */}
`

export default function GridItem({href, title, subtitle, src}) {
  return (
    <LinkBox href={href} target="_blank">
      <ImageBox src={src} alt={title} />
      <Text>{title}</Text>
      <Text fontSize="sm">{subtitle}</Text>
    </LinkBox>
  )
}