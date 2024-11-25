import { LuPencil } from "react-icons/lu";
import { CiTrash } from "react-icons/ci";
import Button from "@/ui/Button";

function BookListItemOption(): React.JSX.Element {

  return (
    <div className="absolute text-xs p-2  border border-dark-200 rounded-lg right-0 text-dark-800 bg-white mt-2 top-0 transform translate-y-[25%] w-[120px] ">
      <div className="mt-1  flex flex-col gap-2">
        <Button type="simple" text="ویرایش">
          <LuPencil></LuPencil>
        </Button>
        <Button type="simpleRed" text="حذف">
          <CiTrash></CiTrash>
        </Button>
      </div>
    </div>
  );
}

export default BookListItemOption;
