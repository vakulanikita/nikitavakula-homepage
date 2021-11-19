import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
// import Layout from '../components/layouts/main.js'
import styles from '../styles/Home.module.scss'
import { Box, Heading, Container } from '@chakra-ui/react'


export default function Home() {
  return (
    <Container>
      <main>
        <nav className="fixed flex">
          <Link href="/main">
            <a>Nikita Vakula</a>
          </Link>
          <div>Works</div>
          <div>Posts</div>
          <div>Source</div>
          <button>light</button>
        </nav>

        <div>
          <Heading as="h2" color="spacejelly">Chakra`s UI heading</Heading>
          <h1 className="text-green-500">Hello, world!</h1>
        </div>


      </main>
    </Container>
  )
}
