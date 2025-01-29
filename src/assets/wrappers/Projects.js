import styled from "styled-components";

const Wrapper = styled.section`
  #work {
    background-color: var(--third-color);
    justify-content: space-between;
  }
  #work-title {
    margin-top: 40px;
    color: var(--fourth-color);
  }
  #project-link {
    text-decoration: none;
    color: var(--fourth-color);
  }
  #project {
    background-color: var(--first-color);
    padding: 20px 40px;
    margin: 10px;
    border: solid 2px var(--second-color);
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
  }
  .project-tile {
    font-weight: 500;
  }
`;

export default Wrapper;
