import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import './introduction.css';
import homeLogo from './../../Assets/landingLogo.jpg'
import { Image } from '@chakra-ui/react'
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';

export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

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
                                EmbarkCv the {' '}
                                <Text as={'span'} color={'#007FFF'}>
                                    Engineers  {''}
                                </Text>
                                Choice
                            </Heading>

                            <Text color={'gray.500'} maxW={'3xl'}>
                                EmbarkCv that assemble well-formatted resume. Through a EmbarkCv builder, you can create a professional-looking resume in a few easy steps. This resume builder offer variety of template options, so you can select the template that best fits your needs and style.
                            </Text>

                            <Flex _dark={{ color: 'gray.50' }} textAlign={'start'} flexDirection={'column'} w={'full'}>
                                <Box className='Bullet_Points'>
                                    <Button>1</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Build a professional resume for free.
                                    </Text>
                                </Box>
                                <Box className='Bullet_Points'>
                                    <Button>2</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Ability to download and print resumes instantly.
                                    </Text>
                                </Box>
                                <Box className='Bullet_Points'>
                                    <Button>3</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Downloads available in PDF and text formatting.
                                    </Text>
                                </Box>

                                <Box className='Bullet_Points'>
                                    <Button>4</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        24/7/365 access to your resume.
                                    </Text>
                                </Box>
                            </Flex>
                        </>
                        :
                        <Heading>
                            
                        </Heading>
                }
            </Stack>

            {
                selectBtn ?
                    <Stack>
                        <Image src={homeLogo} alt='home logo' my={'4'} height={500}/>
                       
                    </Stack>
                    :
                    <>
                        
                    </>
            }
        </Container>

        
    );
}
