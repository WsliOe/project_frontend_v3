import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
//import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-slate-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-slate-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
}

// Mit Avatar
/*
function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
*/

export default Header;

/* Eigenes STYLING mit starter Code
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 20rem 0.5fr 1.25fr;
  font-size: 0.5rem;

  background-color: var(--color-lime-700);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-slate-100);
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <div></div>
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
*/
