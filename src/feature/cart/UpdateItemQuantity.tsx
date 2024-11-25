import Button from "@/ui/Button";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  deleteItem,
  getCurrentQuantityById,
  increment,
} from "./slice";
import { FaMinus } from "react-icons/fa6";

function UpdateItemQuantity({ id }: { id: number }): React.JSX.Element {
  const quantity = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row-reverse items-center justify-center w-full gap-4 border border-purpleprime-500 rounded-lg px-4 py-2">
      {quantity > 1 ? (
        <Button onClick={() => dispatch(decrement(id))} type="simple">
          <FaMinus color="#F04438" />
        </Button>
      ) : (
        <Button onClick={() => dispatch(deleteItem(id))} type="simple">
          <FaRegTrashAlt color="#F04438" />
        </Button>
      )}
      <p>{quantity}</p>
      <Button onClick={() => dispatch(increment(id))} type="simple">
        <GoPlus size={18} />
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
