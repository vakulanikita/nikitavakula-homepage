import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layouts/main.js'
import Alert from '../components/alert'
import Profile from '../components/profile'
import styles from '../styles/Home.module.scss'
import { 
  Box,
  Text,
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

        <Box>
          <Heading as="h2" color="spacejelly">Chakra`s UI heading</Heading>
          <h1 className="text-green-500">Hello, world!</h1>
        </Box>
      </Container>
    </Layout>
  )
}
