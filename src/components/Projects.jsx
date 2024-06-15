import spotify from "../assets/image.png";
import wanderlust from "../assets/wanderlust.png";
import Project from "./Project";

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
  ];

  return (
    <div id="projects">
      <h1 className="text-center fw-bolder d-block my-5 mx-auto">Projects</h1>
      <div className="project-box">
        <Project details={projects[0]} />
        <Project details={projects[1]} />
      </div>
      <div
        className=" rounded-5 "
        style={{ width: "100%", textAlign: "center", margin: "30px auto" }}
      >
        <a
          className="btn btn-primary see-more"
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
