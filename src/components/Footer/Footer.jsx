import { Box, Image, GridItem, Flex } from '@chakra-ui/react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  const breakpoints = {
    sm: '23em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  };

  return (
    <footer className="footer">
      <Box
        mt={{ base: '8', md: '10' }}
        mb={{ base: '8', md: '10' }}
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        maxW="1200px"
        mx="auto"
        color="white"
      >
   
        <Box flex="1" maxW="200px">
          <GridItem pl="2" mb="4">
            <Image
            src={`${process.env.PUBLIC_URL}/logo.svg`}
         
              alt="Erik-t-education.hk-logo"
              height="3rem"
              mb="3rem"
            />
          </GridItem>
        </Box>

        <Flex flexDirection="column" flex="1" mr={{ base: '0', md: '4' }}>
          <GridItem pl="2" textAlign="left" mb="4">
            <Box mb="2">
              <Link to="/">Home</Link>
            </Box>
            <Box mb="2">
              <Link to="/profile">About Erik</Link>
            </Box>
            <Box mb="2">
              <Link to="/subject">Subjects</Link>
            </Box>
            <Box mb="2">
              <Link to="/student">Students achievement</Link>
            </Box>
          </GridItem>
        </Flex>

        <Box flex="1" mr={{ base: '0', md: '4' }}>
          <GridItem pl="2" textAlign="left">
            <p>©2023 Erik-t Education</p>
          </GridItem>
        </Box>
      </Box>
    </footer>
  );
}
