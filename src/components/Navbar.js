import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <Navigation>
      <NavigationList>
        <NavigationListItem>
          <NavLink to="/" className="linkStyle">
            Start
          </NavLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavLink to="/library" className="linkStyle">
            Helden
          </NavLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavLink to="/create" className="linkStyle">
            Neu
          </NavLink>
        </NavigationListItem>
      </NavigationList>
    </Navigation>
  );
}

const Navigation = styled.nav`
  background-color: #000;
  height: 10vh;
  bottom: 0;
  position: fixed;
  width: 100%;
  border-top: 2px solid #db0000;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
`;
const NavigationListItem = styled.li`
  width: 100%;
  text-align: center;
  color: white;
`;

export default Navbar;
