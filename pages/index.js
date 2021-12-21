import Head from 'next/head'
import NextLink from 'next/link';
import Alert from '../components/alert'
import Profile from '../components/profile'
import BlockTitle from '../components/block-title'
import Paragraph from '../components/paragraph'
import CustomButton from '../components/button'
import MediaLink from '../components/media-link'
import GridItem from '../components/grid-item.js';
import { BioSection, BioHeader } from '../components/bio'
import { 
  Box,
  Text,
  Link,
  Heading,
  Image,
  Container,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoTelegram,
} from 'react-icons/io5'
import {
  FaTelegramPlane
} from 'react-icons/fa'


export default function Home() {
  return (
    <div>
      <Container mb={8} position="relative">

        <Alert mb={6}>
          Hello, I&apos;m a front-end developer based in Moscow!
        </Alert>

        <Profile />
        
        <BlockTitle>Work</BlockTitle>

        <Paragraph>
          Nikita is a freelance and a frontend developer based in Moscow with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called {' '}
          <NextLink href="#">
            <Link variant="link-text">Subs</Link>
          </NextLink>
        </Paragraph>

        <Box align="center" my={6}>
          <CustomButton href="./works">My portfolio</CustomButton>
        </Box>

        <BlockTitle mb={8}>My stack</BlockTitle>

        <BioSection>
          <BioHeader>Frontend</BioHeader>React.js Next.js Redux Routing Hooks Three.js Stripe Chakra UI Tailwind CSS
        </BioSection>

        <BioSection>
          <BioHeader>Backend</BioHeader>Firebase Axios GraphQL
        </BioSection>

        <BioSection mb={8}>
          <BioHeader>Design</BioHeader>Figma Photoshop
        </BioSection>

        <BlockTitle>I ♥</BlockTitle>

        <Box mb={8}>
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
        </Box>

        <BlockTitle>On the web</BlockTitle>

        <MediaLink href="https://github.com/vakulanikita" icon={<IoLogoGithub/>}>
          @vakulanikita
        </MediaLink>
        <MediaLink href="https://www.instagram.com/whynikitaaa/" icon={<IoLogoInstagram/>}>
          @whynikitaaa
        </MediaLink>
        <MediaLink href="https://t.me/vakulanikita" icon={<FaTelegramPlane/>}>
          @vakulanikita
        </MediaLink>


        <SimpleGrid columns={[1, 2, 2]} spacing={6}>
          <GridItem
            href="#" 
            title="Subs" 
            subtitle="Best app ever" 
            src="photo2.jpg"
          />

          <GridItem
            href="#" 
            title="Subs" 
            subtitle="Best app ever" 
            src="photo2.jpg"
          />
        </SimpleGrid>

        <Box align="center" my={4}>
          <CustomButton href="./posts">Popular posts</CustomButton>
        </Box>

      </Container>
    </div>
  )
}
