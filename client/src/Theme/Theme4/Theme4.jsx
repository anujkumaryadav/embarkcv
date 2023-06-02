// import React, { useContext } from 'react'
// import { Box, Text } from "@chakra-ui/react";
import "./theme4.css";

import Email from "./../../Assets/nextlevel/mail.svg";
import Phone from "./../../Assets/nextlevel/phone.svg";
import Linkedin from "./../../Assets/nextlevel/linkedin.png";
import Github from "./../../Assets/nextlevel/github.svg";

const Theme4 = (props) => {
  // const { checkProj, checkWork, checkAward } = useContext(ResumeContext)
  const { themeData, componentRef } = props;
  const {
    name,
    profile,
    address,
    phone,
    email,
    skill,
    summary,
    linkedin,
    github,
  } = themeData.personalData;
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;
  return (
    <>
      <box id="section-to-print" ref={componentRef}>
        <header id="header" className="personalInfo">
          <div id="line1"></div>
          <div id="line2"></div>
          <div id="line3"></div>
          <div id="line4"></div>
          <div id="line5"></div>
        </header>

        <box id="details">
          <div id="name">
            <text id="userName">{name}</text>
          </div>
          <div id="contactdetails">
            <div id="addressUser">
              <img src={Email} alt="Location" id="emailUser" />
              <text id="email" style={{ color: "black" }}>
                {email}
              </text>
            </div>
            <div id="addressUser">
              <img src={Phone} alt="Location" id="phoneUser" />
              <text id="phone" style={{ color: "black" }}>
                {phone}
              </text>
            </div>
          </div>

          <div id="socialmedia">
            <div id="addressUser">
              <img src={Linkedin} alt="Location" id="linkedinUser" />
              <text id="linkedin" style={{ color: "black" }}>
                {linkedin}
              </text>
            </div>
            <div id="addressUser">
              <img src={Github} alt="Location" id="githubUser" />
              <text id="github" style={{ color: "black" }}>
                {github}
              </text>
            </div>
          </div>
        </box>
      </box>
      <div className="line"></div>

      <div id="eduaction_details" className="details">
        <text id="educationTxt">Education</text>
        <div id="eduInfo">
          <div id="collegeDetails">
            <box id="education-set1" className="basic-set">
              {Object.entries(educationTitles).map((element, index) => {
                return (
                  <box key={index} className="subBox">
                    <text className="sub-title">{element[1]}</text>
                    <box className="sub-details">
                      {Object.entries(educationDesc)[index] === undefined
                        ? null
                        : Object.entries(educationDesc)
                            [index][1].split("-")
                            .map((element, index) => {
                              return <li key={index}>{element}</li>;
                            })}
                    </box>
                  </box>
                );
              })}
            </box>
          </div>
        </div>
      </div>
      <div className="line"></div>

      <div id="project_section" className="details">
        <text id="projectsTxt">PROJECTS</text>
        <box id="project-set1" className="basic-set">
          {Object.entries(projectTitles).map((element, index) => {
            return (
              <box key={index} className="subBox">
                <text className="sub-title">{element[1]}</text>
                <box className="sub-details">
                  {Object.entries(projectDesc)[index] === undefined
                    ? null
                    : Object.entries(projectDesc)
                        [index][1].split("-")
                        .map((element, index) => {
                          return <li key={index}>{element}</li>;
                        })}
                </box>
              </box>
            );
          })}
        </box>
      </div>
   <div className="line"></div>

      <div className="achievements details">
        <text id="achievementsTxt">ACHIEVEMENTS</text>
        <box
          id="award-set1"
          className="basic-set d-flex justify-content-between align-items-center"
        >
          <box>
            {awards.split("-").map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </box>
        </box>
      </div>
      <div className="line"></div>

      <div className="details">
        <text id="educationTxt">Skills</text>
        <box
          id="skills-set1"
          className="basic-set d-flex justify-content-center align-items-center"
        >
          <box className="skillBox">
            {skill.split("-").map((element, index) => (
              <badge key={index} className="skill-badge" variant="solid">
                {element}
              </badge>
            ))}
          </box>
        </box>
      </div>
      <div className="line"></div>

    </>
  );
};

export default Theme4;
