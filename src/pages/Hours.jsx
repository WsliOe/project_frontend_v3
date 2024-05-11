import HoursTable from "../features/hours/HoursTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddHours from "../features/hours/AddHours";
import HoursTableOperations from "../features/hours/HoursTableOperations";

function Hours() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Alle Stunden</Heading>
        <HoursTableOperations />
      </Row>

      <Row>
        <HoursTable />
        <AddHours />
      </Row>
    </>
  );
}

export default Hours;
