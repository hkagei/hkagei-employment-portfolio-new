// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  // FaLinkedIn,
  FaLinkedin,
} from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiRedux } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
// import Logo from "./images/logo.svg";
import Image1 from "./images/book-search.png"
import Image2 from "./images/budget-tracker.png"
import Image3 from "./images/workday-scheduler.png"

// import link1 from "https://lit-taiga-11377.herokuapp.com/"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/DSC_1869.jpg";
import HeroDark from "./images/DSC_8740.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "hkagei";

// Blog link icon (imported above)
export const Blog = <FaLinkedin />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "As an innovative problem solver passionate about building websites and developing apps, I have a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "MERN",
  },
  {
    id: 6,
    skill: <SiStyledcomponents className="display-4" />,
    name: "SQL",
  },
  {
    id: 7,
    skill: <SiRedux className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://docs.google.com/document/d/1Lz00IcBKyE825MLFjwkKV9vcuqMO03wjbSkb55CtVJI/";
export const link1 = "https://lit-taiga-11377.herokuapp.com/";
export const link2 = "https://guarded-garden-74034.herokuapp.com/";
export const link3 = "https://hkagei.github.io/workday-scheduler/";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["workday-scheduler", "MERN-Challenge", "Hiros-budget-tracker"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "MERN-Challenge",
    image: Image1,
    // imageURL: link1
  },
  {
    name: "Hiros-budget-tracker",
    image: Image2,
    // imageURL: link2
  },
  {
    name: "workday-scheduler",
    image: Image3,
    // imageURL: link3
  }
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
