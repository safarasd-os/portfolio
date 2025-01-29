import { Link } from "react-router-dom";

const ProjectCard = ({ project, description }) => {
  return (
    <Link id="project-link" to={project}>
      <div id="project">
        <h3 class="project-tile">{project}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
