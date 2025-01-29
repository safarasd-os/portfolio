import styled from "styled-components";

const Wrapper = styled.nav`
  section {
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
  #welcome-section {
    background-color: var(--first-color);
  }
  #title {
    font-size: 50px;
    color: var(--fourth-color);
  }
  #sub-title {
    font-style: italic;
    font-weight: 100;
    color: var(--second-color);
  }
`;
export default Wrapper;