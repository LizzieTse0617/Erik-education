import { Icon,Text } from '@chakra-ui/react';
import './head.css';
import { Highlight } from '@chakra-ui/react';
import { RiWhatsappFill } from 'react-icons/ri';
const breakpoints = {
  sm: '23em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
};

export default function Head() {
  return (
    <div className="sticky-paragraph"  >
      <Text color="white" m ={0}>
      To avoid disturbing classes, you are welcome to Whatsapp us first before
      CALLING. Whatsapp:
      <Icon as={RiWhatsappFill} color="green.300" />
      <Highlight
        query="+852-9629-1557"
        styles={{
          px: '2',
          py: '1',
          color: 'white',
          bg: 'blue.900',
        }}
      >
        +852-9629-1557
      </Highlight>
      </Text>
    </div>
  );
}
