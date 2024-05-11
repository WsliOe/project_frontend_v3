import Spinner from "../../ui/Spinner";
import HoursRow from "./HoursRow";
import useHours from "./useHours";
//import { useHours } from "./useHours";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
//import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function HoursTable() {
  const { isLoading, hours } = useHours();
  //const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!hours.length) return <Empty resourceName="hours" />;
  /*
  // 1) FILTER
  const filterValue = searchParams.get("discount") || "all";

  let filteredHours;
  if (filterValue === "all") filteredHours = hours;
  if (filterValue === "no-discount")
    filteredHours = hours.filter((hours) => hours.discount === 0);
  if (filterValue === "with-discount")
    filteredHours = hours.filter((hours) => hours.discount > 0);

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedHours = filteredHours.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
*/
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Q1</div>
          <div>Q2</div>
          <div>Q3</div>
          <div>Q4</div>
          <div></div>
        </Table.Header>

        <Table.Body
          //data={sortedHours}
          render={(hours) => <HoursRow hours={hours} key={hours.id} />}
        />
      </Table>
    </Menus>
  );
}

export default HoursTable;
