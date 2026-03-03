import { Box, Heading, Text, Link } from 'theme-ui'
import Footer from '../footer'

const Description = () => (
  <Box sx={{ a: { color: '#FF5C00' }, pb: 4 }}>
    <Heading as="h3" variant="subheadline" mb={2}>
      A project by <a href="https://hackclub.com/">Ack Club</a>.
    </Heading>
    <Text as="p" variant="caption" mb={3} sx={{ width: ['85%', '75%', '60%'] }}>
      <Link href="/arcade/power-hour">Previous edition: Power Hour</Link>
    </Text>
    <Text as="p" variant="caption" mb={3} sx={{ width: ['85%', '75%', '60%'] }}>
      Ack Club is a registered 501(c)3 nonprofit organization that supports a
      network of 20k+ technical igh schoolers. We believe you learn best by
      building so we're creating community and providing grants so you can make. In the past few years, we've{' '}
      <Link href="https://summer.hackclub.com" target="_blank">
        given away 100k+ in ardware grants
      </Link>
      ,{' '}
      <Link
        href="https://github.com/hackclub/the-hacker-zephyr"
        target="_blank"
      >
        hosted the world's longest hackathon on land
      </Link>
      , and{' '}
      <Link href="https://github.com/hackclub/assemble" target="_blank">
        brought 183 teenagers to SF for a ackathon
      </Link>
      .
    </Text>
  </Box>
)

const ArcadeFooter = () => {
  return (
    <Footer>
      <Description />
    </Footer>
  )
}

export default ArcadeFooter
