import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar'
import Footer from '../footer'
import { Container, Box } from '@chakra-ui/react'
import VoxelDogLoader from '../voxel-dog-loader'
const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

export default function MainLayout({ children }) {
  return (
    <Box as="main">
      <Head>
        <title>Nikita Vakula - Homepage</title>
      </Head>

      <Navbar />
      
      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}