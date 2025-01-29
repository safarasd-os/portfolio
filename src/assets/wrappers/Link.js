import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  margin: 20px;
  color: var(--second-color);
  border: solid 1px var(--second-color);
  padding: 5px 10px;
  transition: all 0.3s ease;
  text-decoration: none;
`;


export default StyledLink