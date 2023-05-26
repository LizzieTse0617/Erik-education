import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Exampleheader() {
  return (
    <div>
      <Box
        mt={{ sm: '0rem', md: '0rem' }}
        mb={{ sm: '0rem', md: '0rem' }}
        flexDirection={{ sm: 'column', md: 'row' }}
        alignItems="center"
        maxW="1200px"
        mx="auto"
        p="4"
      >
        <Text as="h2" fontSize={{ sm: '2xl', md: '2.5xl', lg: '3xl' }}>
          Students achievement
        </Text>
        <p>
          To protect clients personal privacy, all rankings are only sorted by
          alphet only
        </p>
        <Link
              className="btn"
              to="/student"
            >
              <Box p={3} display="inline" bg="teal.400"  color="white" borderRadius="0.8rem" _hover={{backgroundColor:"purple.400" }}>Click here for more students achievement →</Box>
            </Link>

        


      </Box>
    </div>
  );
}
