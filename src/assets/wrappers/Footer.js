import styled from "styled-components";

const Wrapper = styled.nav`
  #contact {
    background-color: var(--fourth-color);
  }
  #footer-quote {
    color: var(--third-color);
    text-align: center;
    font-size: 30px;
    margin-top: auto;
  }
  .social-icons {
    margin-top: 50px;
  }
  .social-icon {
    margin: 30px;
    color: var(--second-color);
    font-size: 30px;
  }
  #footer {
    margin-top: auto;
    height: 130px;
    width: 100%;
    border-top: solid 3px var(--second-color);
  }
  #footer-text {
    text-align: center;
    color: var(--first-color);
  }
`;

export default Wrapper;
