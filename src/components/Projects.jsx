import { ProjectCard } from "../components";
import Wrapper from "../assets/wrappers/Projects";

const Projects = () => {
  return (
    <Wrapper>
      <section id="work">
        <h2 id="work-title">Here are some of my projects:</h2>
        <div style={{margin: 'auto'}} id="projects">
          <ProjectCard project="MovieFlix" />
        </div>

      </section>
    </Wrapper>
  );
};
export default Projects;
