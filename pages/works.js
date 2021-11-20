import Layout from '../components/layouts/main';
import {
  Heading,
  Container,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import GridItem from '../components/grid-item.js';

export default function Design() {
  return (
    <Layout>
      <Container mb={8} position="relative">
        <Heading as="h3" fontSize="xl" mb={4}>Works</Heading>
        <SimpleGrid columns={[1, 2, 2]} spacing={6} mb={8}>
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
        <Divider mb={6} />
        <Heading as="h3" fontSize="xl" mb={4}>Collaborations</Heading>
        <SimpleGrid columns={[1, 2, 2]} spacing={6} mb={8}>
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
      </Container>
    </Layout>
  )
}