import Button from "../../ui/Button";
import CreateHoursForm from "./CreateHoursForm";
import Modal from "../../ui/Modal";

function AddHours() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="hours-form">
          <Button>Add new hours</Button>
        </Modal.Open>
        <Modal.Window name="hours-form">
          <CreateHoursForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddHours;
