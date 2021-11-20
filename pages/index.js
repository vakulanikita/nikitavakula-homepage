import Head from 'next/head'
import NextLink from 'next/link';
import Layout from '../components/layouts/main.js'
import Alert from '../components/alert'
import Profile from '../components/profile'
import BlockTitle from '../components/block-title'
import Paragraph from '../components/paragraph'
import CustomButton from '../components/button'
import { BioSection, BioHeader } from '../components/bio'
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

        <Box align="center" my={4}>
          <CustomButton href="./works">My portfolio</CustomButton>
        </Box>

        <BlockTitle mb={8}>My stack</BlockTitle>

        <BioSection>
          <BioHeader>Frontend</BioHeader>React.js Next.js Redux Routing Hooks Three.js Stripe Chakra UI Tailwind CSS
        </BioSection>

        <BioSection>
          <BioHeader>Backend</BioHeader>Firebase Axios GraphQL
        </BioSection>

        <BioSection>
          <BioHeader>Design</BioHeader>Figma Photoshop
        </BioSection>

        <BlockTitle>I ♥</BlockTitle>

        <Paragraph>
          Art, Music,{' '}
          <NextLink href="#">
            <Link variant="link-text">Arduino</Link>
          </NextLink>
          , Swimming,{' '}
          <NextLink href="#">
            <Link variant="link-text">Photography</Link>
          </NextLink>
          , Technologies, Machine Learning
        </Paragraph>

        <BlockTitle>On the web</BlockTitle>

        <Box align="center" my={4}>
          <CustomButton href="./posts">Popular posts</CustomButton>
        </Box>

        {/* <Box>
          <Heading as="h2" color="spacejelly">Chakra`s UI heading</Heading>
          <h1 className="text-green-500">Hello, world!</h1>
        </Box> */}
      </Container>
    </Layout>
  )
}
