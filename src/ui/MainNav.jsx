import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FaUsers } from "react-icons/fa";
import { IoMdHome, IoMdChatboxes, IoMdSettings } from "react-icons/io";
import { MdMoreTime } from "react-icons/md";

const NavList = styled.ul`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(5, 1fr);
  justify-items: right;
  gap: 1rem;
`;

/* const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
*/
const StyledNavLink = styled(NavLink)`
  &:link {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-slate-300);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-slate-800);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-slate-300);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-slate-800);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <IoMdHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/hours">
            <MdMoreTime />
            <span>Stunden</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/chatHome">
            <IoMdChatboxes />
            <span>Chat</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <FaUsers />
            <span>Mitglieder</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <IoMdSettings />
            <span>Einstellungen</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
