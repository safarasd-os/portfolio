import { ProjectCard } from "../components";
import Wrapper from "../assets/wrappers/Projects";

const Projects = () => {
  return (
    <Wrapper>
      <section id="work">
        <h2 id="work-title">Here are some of my projects:</h2>
        <div id="projects">
          <ProjectCard project="refractometer" />
          <ProjectCard project="inventroy-tracker" />
          <a
            id="project-link"
            href="https://www.freecodecamp.org/certification/safarasd/responsive-web-design"
            target="_blank"
          >
            <div id="project">
              <h3 class="project-tile">Certificate</h3>
            </div>
          </a>
        </div>

        <h4 id="description">
          If you would like to see the code and the projects you can see them on
          my certificate
        </h4>
      </section>
    </Wrapper>
  );
};
export default Projects;
