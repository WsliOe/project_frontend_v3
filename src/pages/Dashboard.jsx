// Code final. Wird dieser benötigt?

// import DashboardLayout from "../features/dashboard/DashboardLayout";
// import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

// gekürzter Code zum Testen
function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
      </Row>
    </>
  );
}

/* Code final
function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}
*/

export default Dashboard;
