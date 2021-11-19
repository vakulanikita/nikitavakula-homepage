import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar'
import Footer from '../footer'
import { Container, Box } from '@chakra-ui/layout'
// import VoxelDogLoader from '../voxel-dog-loader'
// const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />
// })

export default function Main({ children }) {
  return (
    <Box as="main">
      <Head>
        <title>Nikita Vakula - Homepage</title>
      </Head>

      <Container maxW="container.md">
        <Navbar />
        {/* <LazyVoxelDog /> */}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}