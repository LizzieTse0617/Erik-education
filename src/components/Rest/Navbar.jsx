import {
  Image,
  Button,

  Flex,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import Head from '../Header/Head';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Head />
<Box bg="#17273b">
      <Box alignItems="center"         
  
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}

      maxW="1200px"
      mx="auto"
      >
        <Flex
          className="nav"
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          p="1rem"
          minHeight="7rem"
          color="white"
        
        >
          <Flex align="center" mr={5}>
            <Button
              display={{ base: 'block', md: 'none' }}
              onClick={onToggle}
              variant="ghost"
              _focus={{ outline: 'none' }}
            >
              {isOpen ? (
                <CloseIcon w={6} h={6} />
              ) : (
                <HamburgerIcon w={6} h={6} />
              )}
            </Button>
            <Box>
              <Link to="/">
              <Image
src={`${process.env.PUBLIC_URL}/logo.svg`}
                height="3rem"
        
                alt="erikt-education"
              /></Link>
            </Box>
          </Flex>

          <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            flexBasis={{ base: '100%', md: 'auto' }}
          >
            <Flex
              align="center"
              justify={['center', 'space-between', 'flex-end', 'flex-end']}
              direction={['column', 'row', 'row', 'row']}
              pt={[4, 0, 0, 0]}
              gap="2rem"
              m="1rem"

            >
              <Link to="/" active activeStyle={{ fontWeight: 'bold' }}>
                Home
              </Link>
              <Link to="/profile" activeStyle={{ fontWeight: 'bold' }}>
                Profile
              </Link>
              <Link to="/subject" activeStyle={{ fontWeight: 'bold' }}>
                Subjects
              </Link>
              <Link to="/student" activeStyle={{ fontWeight: 'bold' }}>
                All students achievement
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
      </Box>
    </div>
  );
};

export default Navbar;
