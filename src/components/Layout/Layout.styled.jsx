import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 0 20px;
  background-color: #f2f2f2;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);
   margin: 30px;
`;

export const List = styled.ul`
list-style-type: none;
  margin: 0;
  padding: 0;
 
`;

export const Item = styled.li`
display: inline;
  margin-right: 10px;
   margin: 30px;
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
 text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 24px;
    font-weight: 800;

   &.active {
      color: red;
  };
  &:hover {
    color: red;
  }
`;