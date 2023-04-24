import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import './temp.css';
import homeLogo from './../../Assets/searching.png'
import { Image } from '@chakra-ui/react'
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';

export default function Temp() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn)
    }

    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }
  

    return (
        <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
            <Stack
                width={{ base: '95%', md: '47%' }}
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 1.5, md: 10, sm: '14' }}>

                {
                    selectBtn
                        ?
                        <>
                            <Heading
                                fontWeight={600}
                                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                lineHeight={'110%'}>
                                Start building your {' '}
                                <Text as={'span'} color={'#38B2AC'}>
                                    Professional Resume  {' '}
                                </Text>
                                with us
                            </Heading>

                        

                            <Flex _dark={{ color: 'gray.50' }} textAlign={'start'} flexDirection={'column'} w={'full'}>
                                <Box className='Bullet_Points'>
                                    <Button>1</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Select a template.
                                    </Text>
                                </Box>
                                <Box className='Bullet_Points'>
                                    <Button>2</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Enter Information & Boom.
                                    </Text>
                                </Box>
                                <Box className='Bullet_Points'>
                                    <Button>3</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Download your resume.
                                    </Text>
                                </Box>

                                <Box className='Bullet_Points'>
                                    <Button>4</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Share with recruters
                                    </Text>
                                </Box>
                            </Flex>
                        </>
                        :
                        <Heading
                            m={'1.5'}
                            textAlign={{ base: 'center', md: 'start' }}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                            lineHeight={'110%'}>
                            Choose your {' '}
                            <Text as={'span'} color={'#38B2AC'}>
                                Favorite Template {' '}
                            </Text>
                            
                        </Heading>
                }
            </Stack>

            {
                selectBtn ?
                    <Stack>
                        <Image src={homeLogo} alt='home logo' my={'4'} />
                        <Button
                            onClick={handleSelectTemplate}
                            rounded={'full'}
                            px={6}
                            className='mb-4'
                            colorScheme={'teal'}
                            bg={'#38B2AC'}
                            _hover={{ bg: '#319795' }}>
                            Select Template
                        </Button>
                    </Stack>
                    :
                    <>
                        <Box maxW={{ base: '100%', md: '61%' }} className="templatesList">
                            {
                                ThemeTemplateData.map((item, index) => {
                                    return <div key={index} className="template" onClick={showTheme}>
                                        <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                                    </div>
                                })
                            }
                        </Box>
                    </>
            }
        </Container>
    );
}
