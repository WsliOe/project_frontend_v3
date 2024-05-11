import { Outlet } from "react-router-dom";
// import Navigation from "./Navigation";
import Header from "./Header";
import styled from "styled-components";

/* const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
`;*/

const Main = styled.main`
  background-color: var(--color-slate-100);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <>
      <Header />
      {/*<Navigation />*/}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
}

export default AppLayout;
