import { useSelector } from "react-redux";
import { getCart } from "./slice";
import CartItems from "./cartItems";
import Button from "@/ui/Button";
function CartItemContent(): React.JSX.Element {
  const cartItem = useSelector(getCart);
  return (
    <div className="absolute flex flex-col justify-between  py-4 px-6 border border-dark-200 rounded-lg left-0 text-dark-800 bg-white mt-2 top-[100%] w-[384px] h-[567px]  ">
      <div className="py-2">
        <h4 className="text-sm ">لیست انتخاب</h4>
      </div>
      <div className="mt-3 h-[75%] ">
        <div className="h-full overflow-y-auto scrollbar">
          <ul className="flex flex-col gap-3">
            {cartItem.map((item) => (
              <CartItems key={item.id} item={item}></CartItems>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between py-5 ">
        <div>
          <p className="text-xs text-dark-600">
            مجموع تعداد درخواست

          </p>
        </div>
        <div>
          <Button text="ثبت سفارش" type="rowRevers"></Button>
        </div>
      </div>
    </div>
  );
}

export default CartItemContent;
