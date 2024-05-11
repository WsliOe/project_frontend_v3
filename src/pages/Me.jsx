import HoursTable from "../features/hours/HoursTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddHours from "../features/hours/AddHours";
import HoursTableOperations from "../features/hours/HoursTableOperations";

function Me() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Me</Heading>
        <HoursTableOperations />
      </Row>

      <Row>
        <HoursTable />
        <AddHours />
      </Row>
    </>
  );
}

export default Me;

/*

// import { CookiesProvider, useCookies } from "react-cookie";
// import { Navigate } from "react-router-dom";
import ProtectedContentTest from "../components/ProtectedContentTEST";

function Me() {
  return <ProtectedContentTest />;
}

/* Code Schule
function Me() {
  const [cookies] = useCookies(["token"]);
  return (
    <CookiesProvider>
      {cookies.token ? <ProtectedContentTest /> : <Navigate to="/login" />}
    </CookiesProvider>
  );
}


export default Me;


*/
