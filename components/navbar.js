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
import LogoGitHub from "./logo-github";

export default function Navbar() {
  return (
    <Box
      position="fixed"
      w="100%"
      mb={8} 
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
    >
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
                <Link p={2} display="flex" alignItems="center" style={{ gap: 4}}>
                  <LogoGitHub />
                  Source
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