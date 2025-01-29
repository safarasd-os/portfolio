import styled from "styled-components";

const Wrapper = styled.nav`
  #navbar {
    padding: 20px;
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
  }
  #nav-link {
    margin: 0 10px;
    color: var(--second-color);
    border: solid 1px var(--second-color);
    padding: 5px 10px;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  #nav-link:hover {
    padding: 5px 15px;
    margin: 0 5px;
  }
`;

export default Wrapper;
