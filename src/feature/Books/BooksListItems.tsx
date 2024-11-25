import { IBook } from "@/types/feature/books/books.interface";
import Button from "@/ui/Button";
import { HiOutlinePlus } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "@/feature/cart/slice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function BooksListItems({ data }: { data: IBook }): React.JSX.Element {
  // متاسفانه من  ساعت 8 عصر به خانه میرسم و نتوانستم پروژه را کامل و تمام کمال تکمیل کنم معذرت میخواهم
  // یک هفته است که شبا دیر میخوابم و مشغول تکمیل این پروژه هستم
  const { name, price, image, id } = data;
  const quantity = useSelector(getCurrentQuantityById(id));
  const isInCart = quantity > 0;
  const dispatch = useDispatch();
  function addToCart() {
    const newItem = {
      id: id,
      name,
      quantity: 1,
      price,
      image,
    };
    dispatch(addItem(newItem));
  }
  return (
    <article className="w-[calc(25%-.4rem)] border rounded-lg flex flex-col ">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-4">
          <h4>{name}</h4>
          <span>
            <span>قیمت </span>
            {price} تومان
          </span>
        </div>
        {isInCart ? (
          <UpdateItemQuantity id={id}></UpdateItemQuantity>
        ) : (
          <Button onClick={addToCart} type="rowRevers" text="افزودن به سبد ">
            <HiOutlinePlus size={14} />
          </Button>
        )}
      </div>
    </article>
  );
}
export default BooksListItems;
