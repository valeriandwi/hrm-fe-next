import { Button, Typography } from "antd";
import React from "react";

const JobDescription = () => {
  return (
    <div>
      <Typography className="font-bold text-2xl mb-8">
        Frontend Web Developer
      </Typography>
      <div className="flex flex-col space-y-3">
        <div className="grid grid-cols-3">
          <div className="space-y-1">
            <Typography className="font-bold">Job Type</Typography>
            <Typography className="text-gray-500">Full Time</Typography>
          </div>
          <div className="space-y-1">
            <Typography className="font-bold">Experience</Typography>
            <Typography className="text-gray-500">7 years</Typography>
          </div>
          <div className="space-y-1">
            <Typography className="font-bold">Location</Typography>
            <Typography className="text-gray-500">
              Jakarta, Indonesia
            </Typography>
          </div>
        </div>
        <div className="space-y-1">
          <Typography className="font-bold">Company Overview</Typography>
          <Typography className="text-gray-500">
            WorkWave is a leading tech company specializing in innovative web
            and mobile solutions. We are dedicated to creating high-quality,
            user-friendly applications that cater to the needs of our diverse
            client base. Join our team of passionate developers and help us
            shape the future of technology.
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography className="font-bold">Job Description</Typography>
          <Typography className="text-gray-500 text-justify">
            <p>
              We are looking for a talented and motivated Frontend Web Developer
              to join our team. The ideal candidate will have a strong
              background in web development and a passion for creating visually
              appealing and highly functional user interfaces.
            </p>
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography className="font-bold">Responsibilities</Typography>
          <Typography className="text-gray-500 text-justify">
            <ul>
              <li>
                Develop new user-facing features using React.js and Next.js
              </li>
              <li>
                Build reusable components and front-end libraries for future use
              </li>
              <li>Translate designs and wireframes into high-quality code</li>
              <li>
                Optimize components for maximum performance across a vast array
                of web-capable devices and browsers
              </li>
              <li>
                Collaborate with backend developers and UI/UX designers to
                improve usability
              </li>
              <li>Ensure the technical feasibility of UI/UX designs</li>
              <li>
                Stay up-to-date with the latest industry trends and technologies
              </li>
            </ul>
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography className="font-bold">Requirements</Typography>
          <Typography className="text-gray-500 text-justify">
            <ul>
              <li>
                Bachelor’s degree in Computer Science, Information Technology,
                or related field
              </li>
              <li>2+ years of experience in frontend development</li>
              <li>Proficiency in HTML, CSS, and JavaScript</li>
              <li>Strong experience with React.js and Next.js</li>
              <li>Familiarity with RESTful APIs</li>
              <li>Experience with version control tools like Git</li>
              <li>Excellent problem-solving skills and attention to detail</li>
              <li>Ability to work both independently and as part of a team</li>
              <li>Strong communication skills</li>
            </ul>
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography className="font-bold">Benefits</Typography>
          <Typography className="text-gray-500 text-justify">
            <ul>
              <li>Competitive salary and performance bonuses</li>
              <li>Health, dental, and vision insurance</li>
              <li>401(k) retirement plan with company match</li>
              <li>Generous paid time off and holidays</li>
              <li>
                Opportunities for professional development and career growth
              </li>
              <li>Flexible work schedule and remote work options</li>
            </ul>
          </Typography>
        </div>
        <div className="flex justify-center space-x-2">
          <Button danger type="primary" size="large">
            Cancel
          </Button>
          <Button type="primary" size="large">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
