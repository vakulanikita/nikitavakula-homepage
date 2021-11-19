import { 
  Container,
  Box,
  Flex,
  Link, 
  HStack, 
  Button,
  Image,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from "@chakra-ui/react";
import NextLink from 'next/link';
import Logo from './logo'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import ThemeToggleButton from "./theme-toggle-btn";

export default function Navbar() {
  return (
    <Box mb={8} bg={useColorModeValue('#ffffff40', '#20202380')}>
      <Container maxW="container.md">
        <Flex as="nav" p={2} justify="space-between" align="center">

          {/* menu */}
          <Flex align="center">
            <Box mr={8}>
              <Logo />
            </Box>
            <HStack display={{base: 'none', md: 'flex'}} >
              <NextLink href="/works">
                <Link p={2}>Works</Link>
              </NextLink>
              <NextLink href="/posts">
                <Link p={2}>Posts</Link>
              </NextLink>
              <NextLink href="https://github.com/vakulanikita/nikitavakula-homepage" passHref>
                <Link p={2} display="flex">
                  <Image mr={1} src={useColorModeValue('github-dark.svg', 'github-light.svg')} alt="" />
                  <Box>Source</Box>
                </Link>
              </NextLink>
            </HStack>
          </Flex>

          <Box display="flex">

            <ThemeToggleButton />

            {/* mobile menu */}
            <Box ml={2} display={{base: 'block', md: 'none'}}>
              <Menu id="navbar" isLazy>
                <MenuButton
                  as={IconButton}
                  bg={useColorModeValue('#ffffff40', 'dark')}
                  icon={<HamburgerIcon/>}
                  variant='outline'
                />
                <MenuList>
                  <NextLink href="/">
                    <MenuItem as={Link}>About</MenuItem>
                  </NextLink>
                  <NextLink href="/works">
                    <MenuItem as={Link}>Works</MenuItem>
                  </NextLink>
                  <NextLink href="/posts">
                    <MenuItem as={Link}>Posts</MenuItem>
                  </NextLink>
                  <MenuItem as={Link} href="https://github.com/vakulanikita/nikitavakula-homepage">
                    View Source
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>

        </Flex>
      </Container>
    </Box>
  )
}