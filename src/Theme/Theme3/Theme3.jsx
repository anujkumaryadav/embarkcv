import React, { useContext } from "react";
import { Box, Text, Image, Heading, Badge } from "@chakra-ui/react";
import "./theme3.css";
import ResumeContext from "../../Context/ResumeContext";

const Theme3 = (props) => {
  const { componentRef, themeData } = props;
  const { name, address, phone, email, profile, profileImage, summary, skill } =
    themeData.personalData;
  const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;

  return (
    <Box id="section-to-print" ref={componentRef}>
      <Box id="theme3">
        <header
          id="info"
          className="text-center m-2 d-flex justify-content-between align-items-center"
        >
          <Box className="info-text text-start">
            <Box>
              <tr>
                <td>
                  {/* <Box className="mx-2 mb-2">
                    <Image
                      id="resume-avatar"
                      borderRadius={100}
                      boxSize={"100px"}
                      src={profileImage}
                      alt="Profile Picture"
                    />
                  </Box> */}
                </td>
                <td style={{ paddingTop: 0 }}>
                  <Heading
                    as="h2"
                    size="xl"
                    className="mb-2"
                    style={{ color: "brown", paddingTop: "0" }}
                  >
                    {name}
                  </Heading>
                  <Text fontWeight={"400"} fontSize="l" className="mt-1 mb-2">
                    {profile}
                  </Text>
                </td>

                <td>
                  <Box className="mt-3">
                    <div style={{ paddingLeft: "40px" }}>
                      <p></p>
                      <br />
                      <Text fontSize={"sm"}>{email}</Text>
                      <Text fontSize={"sm"}>{phone}</Text>
                    </div>
                  </Box>
                </td>
              </tr>
            </Box>
          </Box>
          <div className=" border border-dark m-auto"></div>
        </header>
        <div className=" border border-dark m-auto"></div>
        <section className="bottom-part d-flex mt-3">
          <section className="partition">
            <Box className="mt-5">
              <tr>
                <th>
                  <Heading fontSize="2xl" className="my-2">
                    Summary
                  </Heading>
                </th>
                <th >
                  <Text
                    width={"400px"}
                    fontSize="sm"
                    className="mt-1 mb-2 summary-text"
                  >
                    {summary}
                  </Text>
                </th>
              </tr>
              <div className=" border border-dark m-auto"></div>
  
              <tr>
                <th>
                  <Heading fontSize="2xl" className="my-2">
                    Skills
                  </Heading>
                </th>
                <th>
                  <Box className="mt-3">
                    {skill.split(",").map((item, index) => {
                      return (
                        <div key={index}>
                          <Badge
                            className="mx-1"
                            key={index}
                            style={{ flexdirection: "row" }}
                          >
                            {item}
                          </Badge>
                          <br />
                        </div>
                      );
                    })}
                  </Box>
                </th>
              </tr>
              <div className=" border border-dark m-auto"></div>
             
                <Heading fontSize="2xl" className="mt-4">
                  Work Experience
                </Heading>
                <Box id="experience-area">
                
                {Object.entries(workTitles).map((element, index) => {
                  return (
                    <Box key={index} className="mt-1">
                      <Heading fontSize="md" className="my-2">
                        {element[1]}
                      </Heading>
                      <Box className="sub-details">
                        {Object.entries(workDesc)[index] === undefined
                          ? null
                          : Object.entries(workDesc)
                              [index][1].split(",")
                              .map((element, index) => {
                                return <li key={index}>{element}</li>;
                              })}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              
            </Box>
            <div className=" border border-dark m-auto"></div>

            
            
            {!checkProj && (
              <Box id="project-area">
                <Heading fontSize="2xl" className="mt-4">
                  Projects
                </Heading>
                {Object.entries(projectTitles).map((element, index) => {
                  return (
                    <Box key={index} className="mt-1">
                      <Heading fontSize="md" className="my-2">
                        {element[1]}
                      </Heading>
                      <Box className="sub-details">
                        {Object.entries(projectDesc)[index] === undefined
                          ? null
                          : Object.entries(projectDesc)
                              [index][1].split(",")
                              .map((element, index) => {
                                return <li key={index}>{element}</li>;
                              })}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            )}
            <div className=" border border-dark m-auto"></div>
            {
              <Box id="education-area">
                <Heading fontSize="2xl" className="my-2">
                  Education
                </Heading>
                {Object.entries(educationTitles).map((element, index) => {
                  return (
                    <Box key={index} className="mt-3">
                      <Heading fontSize="md" className="my-2">
                        {element[1]}
                      </Heading>
                      <Box className="sub-details">
                        {Object.entries(educationDesc)[index] === undefined
                          ? null
                          : Object.entries(educationDesc)
                              [index][1].split(",")
                              .map((element, index) => {
                                return <li key={index}>{element}</li>;
                              })}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            }
          </section>
        </section>
      </Box>
    </Box>
  );
};

export default Theme3;
