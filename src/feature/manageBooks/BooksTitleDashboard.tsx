import { GoPlus } from "react-icons/go";
import Modal from "@/components/modal/Modal";
import AddBookform from "./AddBookform";

function BooksTitleDashboard(): React.JSX.Element {
  return (
    <div className="flex justify-between items-center pb-6">
      <div>
        <h3 className="text-xl font-bold text-dark-800">مدیریت کتاب ها </h3>
      </div>
      <div className="flex w-7/12 justify-between items-center">
        <div className="border rounded-md w-8/12">
          <form action="">
            <input
              className="p-3 bg-transparent  "
              type="text"
              placeholder="جستجو بر اساس نام کتاب "
            />
          </form>
        </div>
        <div className="w-3/12">
          <Modal>
            <>
              <Modal.Content id={1}>
                <AddBookform />
              </Modal.Content>
              <Modal.OpenModal type="rowRevers" text="افزودن" id={1}>
                <GoPlus size={20} />
              </Modal.OpenModal>
            </>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default BooksTitleDashboard;
