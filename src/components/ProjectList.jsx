import spotify from "../assets/spotify_project.png";
import wanderlust from "../assets/wanderlust_project.png";
import zivan from "../assets/zivan_project.png";
import Project from "../utils/Project";
import "./ProjectList.css";

const ProjectList = () => {
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
        "Build an exact duplicate copy of the music player.",
        "The components include sidebar, player controller, and the main section with the navbar.",
        "Technology includes HTML and CSS",
        "Create a responesive web design of spotify which seems to be really identical",
      ],
      live: "https://spotify-music-player.onrender.com/",
      image: spotify,
      repo: "https://github.com/rishi2136/Spotify_folder",
    },
    {
      title: "The Car Seller",
      description: [
        "This is a quailifying assignment given by the a hiring company on recuiting platform",
        "Implement the landing page for the car  selling brand",
        "Implement using react and backend with nodeJs",
        "Some of the images in the website associated with other institutes or company",
      ],
      live: "https://react-frontend-0lht.onrender.com/",
      image: zivan,
      repo: "https://github.com/rishi2136/Spotify_folder",
    },
  ];

  return (
    <div id="projects">
      <h1 className="text-center fw-bolder d-block my-5 pt-5 mx-auto pro-heading">
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
