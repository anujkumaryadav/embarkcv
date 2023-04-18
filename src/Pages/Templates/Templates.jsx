import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import './templates.css';
import girlSearch from './../../Assets/girl-searching-resume.png'
import { Image } from '@chakra-ui/react'
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';

export default function Templates(){

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

            {
                selectBtn ?
                    <Stack>
                        <Image src={girlSearch} alt='home logo' my={'4'} />
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