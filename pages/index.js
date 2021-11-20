import Head from 'next/head'
import NextLink from 'next/link';
import Layout from '../components/layouts/main.js'
import Alert from '../components/alert'
import Profile from '../components/profile'
import BlockTitle from '../components/block-title'
import Paragraph from '../components/paragraph'
import styles from '../styles/Home.module.scss'
import { 
  Box,
  Text,
  Link,
  Heading,
  Image,
  Container,
  useColorModeValue 
} from '@chakra-ui/react'


export default function Home() {
  return (
    <Layout>
      <Container mb={8}>

        <Alert mb={6}>
          Hello, I&apos;m a front-end developer based in Moscow!
        </Alert>

        <Profile />
        
        <BlockTitle>Work</BlockTitle>

        <Paragraph>
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called {' '}
          <NextLink href="#">
            <Link variant="link-text">Subs</Link>
          </NextLink>
        </Paragraph>

        <BlockTitle>Bio</BlockTitle>

        <BlockTitle>I ♥</BlockTitle>

        {/* <Box>
          <Heading as="h2" color="spacejelly">Chakra`s UI heading</Heading>
          <h1 className="text-green-500">Hello, world!</h1>
        </Box> */}
      </Container>
    </Layout>
  )
}
