import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles';

function Navbar() {
  return (
    <Navigation>
      <NavigationList>
        <NavigationListItem>
          <NavLink to="/">Home</NavLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavLink to="/library">Verzeichnis</NavLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavLink to="/create">Erstellen</NavLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavLink to="/profile">Profil</NavLink>
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
