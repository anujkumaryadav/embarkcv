import { Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import tipsPage from "./tipsPage.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Tips(){

    return(
        <>
        
      {/* Accordian */}

      <Accordion className="w-full" allowMultiple>

      <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
          <h2>
            <AccordionButton className="flex justify-between">
              <span1
                //className="text-left font-bold text-navy-900 dark:text-white"
                flex="1"
                textAlign="left"
                className={tipsPage.Question}
              >
                What should I include in my resume?
              </span1>
              <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="text-left text-medium mt-2 !text-navy-900 dark:!text-white"
            pb={4}
          >
            <p1>1. Contact Information: Include your name, phone number, email address, and professional social media profile if you have one.</p1><br></br>
            <p1>2. Objective or Summary: This section should briefly describe your career goals and highlight your relevant skills and experience.</p1><br></br>
            <p1>3. Education: List your educational qualifications in reverse chronological order, including your degree, institution, and graduation date.</p1><br></br>
            <p1>4. Work Experience: List your work experience in reverse chronological order, including your job title, company name, employment dates, and key responsibilities.</p1><br></br>
            <p1>5. Skills: List any relevant skills you have, including technical skills, language proficiency, or soft skills like communication and teamwork.</p1><br></br>
            <p1>6. Certifications and Licenses: If you have any relevant certifications or licenses, include them in this section.</p1><br></br>
            <p1>7. Awards and Honors: If you have received any awards or honors related to your education or work experience, include them in this section.</p1><br></br>
            <p1>8. Extracurricular Activities: Include any relevant extracurricular activities or volunteer work that demonstrate your skills and interests.</p1><br></br>
            <p1>9. References: You can list references on your resume, but it's not mandatory. You can also say "References available upon request."</p1>
          </AccordionPanel>
        </AccordionItem>{" "}

        <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
          <h2>
            <AccordionButton className="flex justify-between">
              <span1
                className="text-left font-bold text-navy-900 dark:text-white"
                flex="1"
                textAlign="left"
              >
                How do I format my resume?
              </span1>
              <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="text-left text-medium mt-2 !text-navy-900 dark:!text-white"
            pb={4}
          >
            <p1>1. Use a clean and professional layout: Your resume should be easy to read, so use a clean font and avoid using too many colors or images.</p1><br></br>
            <p1>2. Use bullet points: Use bullet points to organize your information and make it easy to read. This also helps highlight your key achievements and responsibilities.</p1><br></br>
            <p1>3. Keep it concise: Try to keep your resume to one or two pages maximum. Be selective about what information you include and focus on the most relevant details.</p1><br></br>
            <p1>4. Use clear section headings: Use clear section headings to organize your information, such as "Education," "Work Experience," and "Skills."</p1><br></br>
            <p1>5. Include white space: Use white space between sections and bullet points to make your resume easier to read and less cluttered.</p1><br></br>
            <p1>6. Use keywords: Use keywords from the job posting to help your resume get past automated resume scanners and show that you have the required skills and experience.</p1><br></br>
            <p1>7. Save as a PDF: Save your resume as a PDF file to ensure that the formatting stays the same across different devices and operating systems.</p1>
          </AccordionPanel>
        </AccordionItem>{" "}

        <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
          <h2>
            <AccordionButton className="flex justify-between">
              <span1
                className="text-left font-bold text-navy-900 dark:text-white"
                flex="1"
                textAlign="left"
              >
                Which type of resume is the professional Resume ?
              </span1>
              <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="text-left text-medium mt-2 !text-navy-900 dark:!text-white"
            pb={4}
          >
            <h31>
            A professional resume is typically a type of chronological resume
            that highlights a person's work experience, education, and
            professional accomplishments in reverse-chronological order,
            starting with the most recent experience. It typically includes a
            summary or objective statement, work experience section, education
            section, and skills section. The professional resume is typically
            used by mid-level to senior-level professionals who have a
            significant amount of work experience and are seeking roles in their
            industry of expertise.
            </h31>
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
          <h2>
            <AccordionButton className="flex justify-between">
              <span1
                className="text-left font-bold text-navy-900 dark:text-white"
                flex="1"
                textAlign="left"
              >
                How many project should I include in the Resume ?
              </span1>
              <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="text-medium mt-2 text-left !text-navy-900 dark:!text-white"
            pb={4}
          >

            <h31>
            The number of projects you should include in your resume depends on
            the amount of relevant experience you have and the job you are
            applying for. Generally, it's recommended to include 3-5 projects
            that showcase your skills and accomplishments related to the job you
            are applying for. If you are a recent graduate or have limited work
            experience, you can include academic or personal projects that
            demonstrate your relevant skills and achievements. On the other
            hand, if you have extensive work experience, you can highlight the
            most significant projects that demonstrate your ability to lead
            teams, achieve results, and solve complex problems. It's essential
            to tailor your resume to the specific job you are applying for and
            only include projects that are relevant to the job description. By
            doing so, you can demonstrate that you have the necessary skills and
            experience for the position, increasing your chances of being
            selected for an interview.
            </h31>
            
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
          <h2>
            <AccordionButton className="flex justify-between">
              <span1
                className="text-left font-bold text-navy-900 dark:text-white"
                flex="1"
                textAlign="left"
              >
                What are some common mistakes that people make on their resumes,
                and how can they avoid them?
              </span1>
              <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="text-left text-medium mt-2 !text-navy-900 dark:!text-white"
            pb={4}
          >
            <p1>
              1. Spelling and grammatical errors: Careless spelling or
              grammatical errors can make your resume look unprofessional. To
              avoid this, proofread your resume several times, and use spelling
              and grammar checkers.
            </p1><br></br>

            <p1>
              2. Generic objective statements: Avoid using generic objective
              statements that could apply to any job. Instead, tailor your
              objective statement to the specific job you're applying for and
              highlight why you're the best candidate.
            </p1><br></br>

            <p1>
              3. Including irrelevant information: Only include information that
              is relevant to the job you're applying for. Don't include personal
              information, such as your marital status, or information about
              hobbies or interests that aren't relevant to the job.
            </p1><br></br>

            <p1>
              4. Using the wrong format: Use a format that highlights your
              skills and experience and is easy to read. Avoid using templates
              that are too flashy or unconventional, as they may not be ATS
              (Applicant Tracking System) friendly.
            </p1><br></br>

            <p1>
              5. Listing job duties instead of achievements: Instead of just
              listing your job duties, highlight your accomplishments and how
              you added value to your previous positions. Use metrics to
              quantify your achievements where possible.
            </p1><br></br>

            <p1>
              6. Not tailoring the resume: Tailor your resume to the specific
              job you're applying for. Use the job description to guide you on
              what to include and highlight the skills and experience that are
              most relevant to the position.
            </p1>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
  <h2>
    <AccordionButton className="flex justify-between">
      <span1
        className="text-left font-bold text-navy-900 dark:text-white"
        flex="1"
        textAlign="left"
      >
       How many project should I include in the Resume ?
      </span1>
      <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
    </AccordionButton>
  </h2>
  <AccordionPanel
    className="text-medium mt-2 text-left !text-navy-900 dark:!text-white"
    pb={4}
  >
    <h31>
    The number of projects you should include in your resume depends on the amount of relevant experience you have and the job you are applying for. Generally, it's recommended to include 3-5 projects that showcase your skills and accomplishments related to the job you are applying for.

If you are a recent graduate or have limited work experience, you can include academic or personal projects that demonstrate your relevant skills and achievements. On the other hand, if you have extensive work experience, you can highlight the most significant projects that demonstrate your ability to lead teams, achieve results, and solve complex problems.

It's essential to tailor your resume to the specific job you are applying for and only include projects that are relevant to the job description. By doing so, you can demonstrate that you have the necessary skills and experience for the position, increasing your chances of being selected for an interview.
    </h31>
  </AccordionPanel>
</AccordionItem>
      </Accordion>
      
    </>
    
    );
}