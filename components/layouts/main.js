import Head from 'next/head'
import dynamic from 'next/dynamic'
// import VoxelDogLoader from '../voxel-dog-loader'
import Footer from '../footer'

// const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />
// })

export default function Main({ children }) {
  return (
    <main>
      <Head>
        <title>Nikita Vakula - Homepage</title>
      </Head>

      {/* <NavBar path={router.asPath} /> */}

      <div maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </div>
    </main>
  )
}