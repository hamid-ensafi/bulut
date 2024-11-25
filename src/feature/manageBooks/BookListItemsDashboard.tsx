import { IBook } from "@/types/feature/books/books.interface";
import { CiMenuKebab } from "react-icons/ci";
import Dropdown from "@/components/DropDown/DropDown";
import BookListItemOption from "./BookListItemOption";

function BookListItemsDashboard({ data }: { data: IBook }): React.JSX.Element {
  const { name, price, image, id } = data;

  return (
    <article className="w-[calc(25%-.4rem)] border rounded-lg flex flex-col ">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="flex justify-between gap-4 p-4">
        <div className="flex flex-col gap-4">
          <h4>{name}</h4>
          <span>
            <span>قیمت </span>
            {price} تومان
          </span>
        </div>
        <div className="relative">
          <Dropdown>
            <>
              <Dropdown.Icons id={id} type="simple">
                <CiMenuKebab size={14} />
              </Dropdown.Icons>
              <Dropdown.Content id={id}>
                <BookListItemOption />
              </Dropdown.Content>
            </>
          </Dropdown>
        </div>
      </div>
    </article>
  );
}
export default BookListItemsDashboard;
