import { GridItem, Text, Image, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Introduction() {
  const breakpoints = {
    xs:'20em',
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  };

  return (
    <div className="introduction">
      <Box
        mt={{ sm: '3rem', md: '8rem' }}
        mb={{ sm: '3rem', md: '8rem' }}
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        maxW="1200px"
        mx="auto"
        p="4"
        pt="5rem"
      >
        <Box flex="1" mr={{ xs: '0', md: '4' }}>
          <GridItem pl="2" area={'text'}>
            <Text
              as="h1"
              fontWeight="bold"
              mb="4"
              fontSize={{ xs:'1rem',sm: '2rem', md: '2rem', lg: '2.5rem' }}
            >
              Leading Expert in AP/IB Science & Mathematics
            </Text>
            <Text as="h3" fontSize={{ sm: '1rem', md: '1.5rem', lg: '1.5rem' }}>
              AP, SAT , GCE AL, (I)GCSE, GCSE
            </Text>

            <p>
              Different kind of subjects of AP / SAT/ GCEAL/ IB / IGCSE / GCSE
              and other courses are now open for enrollment. Tailor made
              lecturing approach are formed to our students come from leading
              international and independent schools in Hong Kong and abroad in
              private and small group formats. 我們為國際、直資學校學生 (AP /
              SAT/ GCEAL/ IB / IGCSE / GCSE 課程等) 提供高質素補習課程，致力
              專科上門及小班教學。
            </p>
            <Link
              className="btn"
              to="/student"
            >
              <Box p={3} display="inline" bg="teal.400"  color="white" borderRadius="0.8rem" _hover={{backgroundColor:"purple.400" }}>Click here for more students achievement →</Box>
            </Link>
          </GridItem>
        </Box>

        <Box flex="1" maxW="400px">
          <GridItem pl="0" area={'img'} m="5">
            <Image
              src="/images/erik_logo.png"
              alt="Erik-t-education.hk-logo"
              height="200px"
            />
      
          </GridItem>
        </Box>
      </Box>
    </div>
  );
}
