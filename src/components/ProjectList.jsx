import wisehandle from "/wisehandle.png";
import wanderlust from "/wanderlust_project.png";
import fundzbazar from "/fundzbazar.png";
import Project from "../utils/Project";
import "./ProjectList.css";

let projects = [
  {
    title: "Wanderlust : Find your stay for destination",
    description: [
      "Frontend Development: Created a user-friendly and interactive interface using HTML, CSS, and JavaScript.",
      "Backend Development: Built and maintained backend logic with Node.js and Express.js, ensuring smooth data flow and efficient server-side processing.",
      "Authentication & Authorization: Designed and integrated a secure system for user passport sessions and permissions.",
      "Cloud Integration: Utilized MongoDB Atlas for scalable data storage and Cloudinary for efficient image management.",
    ],
    live: "https://my-project-2vyy.onrender.com/listing",
    image: wanderlust,
    repo: "https://github.com/rishi2136/wanderlust",
  },
  {
    title: "Spotify Web Clone",
    description: [
      "Developed a cloud-based task manager with real-time collaboration using MERN, RTK Query, and Socket.IO.",
      "Implemented advanced task tracking with support for subtasks, comments, progress updates, and access-level control.",
      "Integrated ElasticSearch for fast, case-insensitive task search and Cloudinary for efficient file handling.",
      "Designed an interactive, responsive UI using Tailwind CSS and Headless UI to enhance team productivity.",
    ],

    live: "https://drive.google.com/file/d/1dn6FRSe4YreDEMvpd-Emu-Kp9jPlCtdz/view?usp=drive_link",
    image: wisehandle,
    repo: "##",
  },
  {
    title: "FundzBazar - Landing Page",
    description: [
      "Implement the exact identical landing page, of FundzBazar.com which a financial platform  which offer large number of financial services",
      "Clean User Interface with proper understanding of color theory",
      "Utilize html5 and vanilla css to built it from scratch",
      "This is a pratice project to strengthen my css concept which include color theory, grid & flex box, transition, animation, and element tracking through browser dev tools",
    ],
    live: "https://rishi2136.github.io/fundzbazar_UserInterface/",
    image: fundzbazar,
    repo: "https://github.com/rishi2136/fundzbazar_UserInterface",
  },
];

const ProjectList = () => {
  return (
    <div id="projects">
      <h1 className="text-center fw-bolder d-block my-2 pt-5 mx-auto pro-heading">
        Projects
      </h1>
      <div className="project-box">
        <Project details={projects[0]} pos={true} />
        <Project details={projects[1]} />
        <Project details={projects[2]} pos={true} />
        {/* <Project details={projects[0]} /> */}
      </div>
      <div
        className="my-0 pb-1 rounded-5 "
        style={{ width: "100%", textAlign: "center", margin: "30px auto" }}
      >
        <a
          className="btn see-more"
          target="_blank"
          href="https://github.com/rishi2136"
        >
          See More..
        </a>
      </div>
    </div>
  );
};

export default ProjectList;
