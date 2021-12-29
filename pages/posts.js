import {
  Heading,
  Container,
  SimpleGrid
} from '@chakra-ui/react'
import GridItem from '../components/grid-item.js';

export default function Design() {
  return (
    <div>
      <Container mb={8} position="relative">
        <Heading as="h3" fontSize="xl" mb={4}>Popular Posts</Heading>
        <SimpleGrid columns={[1, 2, 2]} spacing={6} mb={8}>
          <GridItem
            href="#" 
            title="Post" 
            subtitle="I haven't written any posts yet :)" 
            src="photo2.jpg"
          />
        </SimpleGrid>
      </Container>
    </div>
  )
}