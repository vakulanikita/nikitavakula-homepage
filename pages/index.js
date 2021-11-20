import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/layouts/main.js'
import Alert from '../components/alert'
import styles from '../styles/Home.module.scss'
import { 
  Box, 
  Heading, 
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

        <Box>
          <Heading as="h2" color="spacejelly">Chakra`s UI heading</Heading>
          <h1 className="text-green-500">Hello, world!</h1>
        </Box>
      </Container>
    </Layout>
  )
}
