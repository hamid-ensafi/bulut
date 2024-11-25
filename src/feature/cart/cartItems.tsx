import UpdateItemQuantity from "./UpdateItemQuantity";
import { IBook } from "@/types/feature/books/books.interface";

function CartItems({ item }: { item: IBook }) {
  const { name, price, image } = item;
  return (
    <>
      <li className="flex gap-4 border-b pb-2.5 border-dark-200">
        <div>
          <figure>
            <img className="w-[104px]" src={image} alt={name} />
          </figure>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xs">{name}</h4>
            <p className="text-xs">{price}هزار تومان</p>
            <div className="max-w-[100px]">
              <UpdateItemQuantity id={item.id}></UpdateItemQuantity>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CartItems;
