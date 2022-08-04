import {
  Heading,
  Container,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import GridItem from '../components/grid-item.js';

export default function Design() {
  return (
    <div>
      <Container mb={8} position="relative">
        <Heading as="h3" fontSize="xl" mb={4}>Works</Heading>
        <SimpleGrid columns={[1, 2, 2]} spacing={6} mb={8}>
          <GridItem
            href="https://github.com/vakulanikita/nikitavakula-homepage" 
            title="Homepage" 
            subtitle="Repository of my website-portfolio" 
            src="portfolio.jpg"
          />
          {/* <GridItem
            href="https://www.ellty.com" 
            title="Ellty" 
            subtitle="Gorgeous online graphic design platform" 
            src="ellty.png"
          /> */}
          <GridItem
            href="https://next-starter-tau.vercel.app/" 
            title="Starter laylout" 
            subtitle="To speed up the start of development" 
            src="next-starter.png"
          />
          <GridItem
            href="https://todo-next-chakra.vercel.app/" 
            title="Todo" 
            subtitle="React.context, ChakraUI" 
            src="todo-chakra.jpg"
          />
          <GridItem
            href="https://todo-next-redux-mui.vercel.app/" 
            title="Todo" 
            subtitle="Redux, MaterialUI" 
            src="todo-mui.jpg"
          />
          <GridItem
            href="https://nikitavakula-aq.vercel.app/" 
            title="Absolut Quartz" 
            subtitle="My old commercial project (pure JS, HTML, CSS)" 
            src="aq.jpg"
          />
        </SimpleGrid>
        <Divider mb={6} />
        <Heading as="h3" fontSize="xl" mb={4}>Collaborations</Heading>
        <Heading as="h3" fontSize="xl" color="gray.600">I&apos;m waiting for your invite</Heading>
      </Container>
    </div>
  )
}