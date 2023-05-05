import React, { useContext } from 'react'
import { Heading, Text, Box, Badge } from '@chakra-ui/react'
import './theme3.css'
import { ImLocation } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import ResumeContext from '../../Context/ResumeContext'
import Amazon from './../../Assets/Amazon/amazonLogo.png'
import Location from './../../Assets/Amazon/location.png'
import Search from './../../Assets/Amazon/search.png'
import Down from './../../Assets/Amazon/down.png'
import India from './../../Assets/Amazon/India.jpg'
import Cart from './../../Assets/Amazon/cart.png'
import Email from './../../Assets/Amazon/email.png'
import Phone from './../../Assets/Amazon/phone.png'
import Linkedin from './../../Assets/Amazon/linkedin.png'
import Github from './../../Assets/Amazon/github.png'
import Rating from './../../Assets/Amazon/star.png'
import College from './../../Assets/Amazon/college.png'
import Quantaty from './../../Assets/Amazon/quantity.png'
import Amazonchoice from './../../Assets/Amazon/amazonChoice.png'


const Theme3 = (props) => {
    const { checkProj, checkWork, checkAward } = useContext(ResumeContext)
    const { themeData, componentRef } = props;
    const { name, profile, address, phone, email, skill,summary, linkedin, github } = themeData.personalData;
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;
    return (
        <> 
            <Box id="section-to-print" ref={componentRef}>

                <header id='header' className='personalInfo'>

                    <div id='Amazontemp3'>
                        <img src={Amazon} alt='AmazonLogo'/>
                    </div>

                    <div id='Location' className='locationLogo'>
                        <img src={Location} alt='LocationLogo'/>
                    </div>
                    <div id='deliveryAddress' className='deliveryAddress'>
                        <Text className='deliveryAddressText'>Delivery to</Text>
                        <Text className='deliveryAddressText'>Wardha</Text>
                    </div>

                    <div id='searchResult' className='searchResult'>
                        <div id='searchCategory'>
                            <Text id='searchCategoryText'>Candidate search</Text>
                            <img src={Down} alt='dropdown' id='searchDropdown'/>
                        </div>
                        <div id='searchArea'>
                            <Text id='searchAreaText'>what does a good employee look like ?</Text>
                        </div>
                        <div id='searchIcon'>
                            <img src={Search} alt='searchLogo' id='searchIconLogo'/>
                        </div>
                    </div>

                    <div id='India'>
                        <img src={India} alt='IndiaLogo' id='IndiaLogo'/>
                        <Text id='ENText'>EN</Text>
                        <img src={Down} alt='dropdown' id='searchDropdownEN'/>
                    </div>

                    <div id='Company'>
                        <div id='textAccount'>
                            <Text id='helloTxt'>Hello, </Text>
                            <Text id='accountLists'>Company</Text>
                        </div>
                        <img src={Down} alt='dropdown' id='searchDropdownComp'/>
                    </div>

                    <div id='Cart'>
                        <img src={Cart} alt='cart' id='cart'/>
                    </div>
                    
                </header>

                <div id='contactInfo'>

                    <div id='addressUser'>
                        <img src={Location} alt='Location' id='locationUser'/>
                        <Text id='address'>{address}</Text>
                    </div>

                    <div id='addressUser'>
                        <img src={Email} alt='Location' id='emailUser'/>
                        <Text id='email'>{email}</Text>
                    </div>
                    <div id='addressUser'>
                        <img src={Phone} alt='Location' id='phoneUser'/>
                        <Text id='phone'>{phone}</Text>
                    </div>
                    
                </div>

                <div id='socialMedia'>
                    <div id='addressUser'>
                        <img src={Linkedin} alt='Location' id='linkedinUser'/>
                        <Text id='linkedin'>{linkedin}</Text>
                    </div>
                    <div id='addressUser'>
                        <img src={Github} alt='Location' id='githubUser'/>
                        <Text id='github'>{github}</Text>
                    </div>
                </div>

                <div id='mainSection'>
                    <div id='firstSection'>
                        <div id='name'>
                            <Text id='userName'>{name}</Text>
                        </div>
                        <div id='brand'>
                            <Text id='brandCandidate'>Position : {profile}</Text>
                        </div>
                        <div id='rating'>
                            <img src={Rating} alt='ratingImg' id='ratingImg'/>
                            <Text id='userRatings'>412,222 | 1000+ answered questions</Text>
                        </div>
                        <div id='amazonChoice'>
                            <img src={Amazonchoice} alt='amazonChoice' id='amazonChoiceImg'/>
                            <Text id='for'>for</Text>
                            <Text id='amazonChoiceHiring'> "hiring"</Text>
                        </div>

                        <div id='priceDescription'>
                            <div id='price'>
                                <div id='listPrice'>
                                    <Text id='list'>List price :</Text>
                                    <Text id='Price'><s>4500000</s></Text>
                                </div>
                                
                                <div id='withDealAddtoCart'>
                                    <Text id='withDeal'>With deal : </Text>
                                    <Text id='addtoCart'>Add to cart with price information</Text>
                                </div>
                                <div id='youSaveFutureCompany'>
                                    <Text id='youSave'>You save : </Text>
                                    <Text id='futureCompany'>Future company cost</Text>
                                </div>
                               
                                <div id='oneLeftinStock'>
                                    <Text id='one'>Only </Text>
                                    <Text id='Left'>1 left in stock </Text>
                                    <Text id='order'>order soon </Text>
                                </div>
                                
                            </div>
                            <div id='description'>
                                <Text id='txtDesc'>Description :</Text>
                                <Text id='summaryTxt'>{summary}</Text>
                            </div>
                        </div>

                        <hr/>
                        <hr/>

                        <div id='educationDesc'>
                            <Text id='educationTxt'>Education</Text>
                            <div id='eduInfo'>
                                
                                <div id='collegeDetails'>
                                    <Box id='education-set1' className='basic-set'>
                                        {
                                            Object.entries(educationTitles).map((element, index) => {
                                                return (
                                                    <Box key={index} className="subBox">
                                                        <Text className='sub-title'>{element[1]}</Text>
                                                        <Box className='sub-details'>
                                                            {
                                                                (Object.entries(educationDesc)[index] === undefined)
                                                                    ?
                                                                    null
                                                                    :
                                                                    Object.entries(educationDesc)[index][1].split('-').map((element, index) => {
                                                                        return <li key={index}>{element}</li>
                                                                    })
                                                            }
                                                        </Box>
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Box>

                                </div>
                            </div>
                            
                        </div>

                    </div>

                    <div id='secondSection'>
                        <Text id='inStock'>In stock</Text>
                        <img src={Quantaty} alt='' id='quantityImg'/>
                        <div id='workingExperience'>
                            <Text id='workingExpTxt'>Working Experience</Text>
                                <Box id='experience-set1' className='basic-set'>
                                    {
                                        Object.entries(workTitles).map((element, index) => {
                                            return (
                                                <Box key={index} className="subBox">
                                                    <Text className='sub-title'>{element[1]}</Text>
                                                    <Box className='sub-details'>
                                                        {
                                                            (Object.entries(workDesc)[index] === undefined)
                                                                ?
                                                                null
                                                                :
                                                                Object.entries(workDesc)[index][1].split('-').map((element, index) => {
                                                                    return <li key={index}>{element}</li>
                                                                })
                                                        }
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                        </div>

                        <div id='skills'>
                            <Text id='skillstxt'>Skills</Text>
                            
                            <Box id='skills-set1' className='basic-set d-flex justify-content-center align-items-center'>
                                <Box className='skillBox'>
                                    {
                                        skill.split('-').map((element, index) => <Badge key={index} className='skill-badge' variant='solid'>{element}</Badge>)
                                    }
                                </Box>
                            </Box>
                            
                            <div id='AddtoCart'>
                                <Text id='AddtoCartTxt'>Add to Cart</Text>
                            </div>
                            <div id='BuyNow'>
                                <Text id='buyNowTxt'>Buy Now</Text>
                            </div>
                        </div>
                        
                        <div id='bottomFotter'>
                            <Text id='customerWhoSearchTxt'>Customer who searched for</Text>
                            <Text id='projectsTxt'>ACADEMICS PROJECTS</Text>  
                            <Box id='project-set1' className='basic-set'>
                                {
                                    Object.entries(projectTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="subBox">
                                                <Text className='sub-title'>{element[1]}</Text>
                                                <Box className='sub-details'>
                                                    {
                                                        (Object.entries(projectDesc)[index] === undefined)
                                                            ?
                                                            null
                                                            :
                                                            Object.entries(projectDesc)[index][1].split('-').map((element, index) => {
                                                                return <li key={index}>{element}</li>
                                                            })
                                                    }
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                            <Text id='achievementsTxt'>ACHIEVEMENTS</Text>
                            <Box id='award-set1' className='basic-set d-flex justify-content-between align-items-center'>
                                <Box>
                                    {
                                        awards.split('-').map((element, index) => {
                                            return <li key={index}>{element}</li>
                                        })
                                    }
                                </Box>
                            </Box>
                        </div>

                    </div>
                </div>

            </Box>
        </>
    )
}

export default Theme3
