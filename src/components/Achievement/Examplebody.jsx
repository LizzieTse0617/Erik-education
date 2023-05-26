import { useState, useEffect } from 'react';
import data from './data.json';
import { Button,Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

export default function Examplebody() {
  const breakpoints = {
    xs:'23em', //375px
    sm: '23em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  };

  const [activeYear, setActiveYear] = useState('2022');
  const [activeTab, setActiveTab] = useState('2022');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    loadData('2022'); // Load data for the initial year '2022'
  }, []);

  const loadData = (value) => {
    setActiveYear(value);
    setTableData(data.filter((item) => item.year === Number(value)));
    setActiveTab(value);
  };

  return (
    
    <div>
 


      <Box alignItems="center" maxW="1200px" mx="auto" p="4">
        <Text
          as="h4"
          fontSize="1.5rem"
          mb="4"
          fontWeight="600"
          borderBottom="1px"
          pt={{ sm: '3rem', md: '4rem', lg: '5rem' }}
        >
          AP Examination
        </Text>
      </Box>
{/* buttons */}
      <Box
        className="btn-group"
        flexDirection={{ xs: 'column', md: 'row' }}
        mt={{ sm: '0rem', md: '0rem' }}
        mb={{ sm: '0rem', md: '0rem' }}
        alignItems="center"
        maxW="1200px"
        mx="auto"
        p="4"
      >
        <Button
          className="btn"
          m="0.1rem"
          style={{
            backgroundColor: activeTab === '2022' ? '#5151f9' : '#edecfe',
            color: activeTab === '2022' ? '#ffffff' : '#1A202C',
            fontSize: activeTab === '2022' ? '1.5rem' : '1rem',
          }}
          onClick={() => loadData('2022')}
        >
          2022
        </Button>
        <Button
          className="btn"
          m="0.1rem"
          style={{
            backgroundColor: activeTab === '2021' ? '#5151f9' : '#edecfe',
            color: activeTab === '2021' ? '#ffffff' : '#1A202C',
            fontSize: activeTab === '2021' ? '1.5rem' : '1rem',
          }}
          onClick={() => loadData('2021')}
        >
          2021
        </Button>
        <Button
          className="btn"
          m="0.1rem"
          style={{
            backgroundColor: activeTab === '2020' ? '#5151f9' : '#edecfe',
            color: activeTab === '2020' ? '#ffffff' : '#1A202C',
            fontSize: activeTab === '2020' ? '1.5rem' : '1rem',
          }}
          onClick={() => loadData('2020')}
        >
          2020
        </Button>
        <Button
          className="btn"
          m="0.1rem"
          style={{
            backgroundColor: activeTab === '2019' ? '#5151f9' : '#edecfe',
            color: activeTab === '2019' ? '#ffffff' : '#1A202C',
            fontSize: activeTab === '2019' ? '1.5rem' : '1rem',
          }}
          onClick={() => loadData('2019')}
        >
          2019
        </Button>
      </Box>


      {tableData.map((item) => (
          <div className="list" key={item.id}> 


      {/* container */}
      <Grid        mt={{ base: '8', md: '10' }}
        mb={{ base: '8', md: '10' }}
    p={{base:'0.5rem', md: '1rem' }}
    borderColor="gray.400"
        maxW="1200px"
        border="1px"
        mx="auto"
    
    templateColumns={{
     
      sm: "0.12fr 0.3fr 0.55fr",
      md: "0.5fr 1fr 0.15fr 0.4fr 1fr",
      lg: "0.7fr 1fr 0.15fr 0.4fr 1fr",
    }}
    templateRows={{
  
      sm: "2.5fr 0.3fr 0.3fr",
      md: "1fr 1fr 1fr",
      lg: "1fr 1fr",
    }}
      gridTemplateAreas={{  
        
        
        
        sm: `"title title studentname" "lv5 lv5student feature" "lv4 lv4student feature" `,
      md: `"title feature lv5 lv5student studentname"
           "title feature lv4 lv4student studentname"`,}}
      gap={1}
    >
      {/* Title */}
      <GridItem  gridArea={{ sm: "title", md: "title" }}
       className="title"
       fontWeight="bold"
       fontSize={{ sm: "1.2rem", md: "1.35rem", lg: "1.5rem" }}
     
       minWidth="8rem"
      
      >
        {item.name}
      </GridItem>

      {/* Feature */}
      <GridItem 
      
      fontWeight="bold"
      
      fontSize={{ sm: '0.9rem', md: '1rem', lg: '1rem' }}
      
   gridArea={{ sm: "feature", md: "feature" }}>
      <Text as="h3" mb="4">
                  {item.feature}
                </Text>
      </GridItem>

      {/* Level 5 */}
      <GridItem gridArea={{ sm: "lv5", md: "lv5" }}>
      <Image
                  src="/images/lv5.svg"
                  alt="Erik-t-education.hk-level5-icon"
                  height="1.2rem"
                />
      </GridItem>

      {/* Level 5 Students */}
      <GridItem fontSize={'0.8rem'} gridArea={{ sm: "lv5student", md: "lv5student" }}>
      {item.lv5student} student(s)
      </GridItem>

      {/* Level 4 */}
      <GridItem gridArea={{ sm: "lv4", md: "lv4" }}>
      <Image
                  src="/images/lv4.svg"
                  alt="Erik-t-education.hk-level4-icon"
                  height="1.2rem"
                />
      </GridItem>

      {/* Level 4 Students */}
      <GridItem fontSize={'0.8rem'} gridArea={{ sm: "lv4student", md: "lv4student" }}>
      {item.lv4student} student(s)
      </GridItem>



      {/* Student Name */}
      <GridItem fontSize={'14px'}
                style={{
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word',
                  wordBreak: 'break-word',
                }} gridArea={{ sm: "studentname", md: "studentname" }}>
     ICS student:
                {item.studentName}
      </GridItem>


    </Grid>
    </div>))}
     
    </div>
  );
}
