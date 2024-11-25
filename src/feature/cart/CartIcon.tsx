import { useSelector } from "react-redux";
import { getSumPrductCart } from "./slice";
import Dropdown from "@/components/DropDown/DropDown";
import { MdOutlineShoppingCart } from "react-icons/md";
import CircleCount from "@/ui/CircleCount";
import CartItemContent from "./CartItemContent";

function CartIcon(): React.JSX.Element {
  // متاسفانه من  ساعت 8 عصر به خانه میرسم و نتوانستم پروژه را کامل و تمام کمال تکمیل کنم معذرت میخواهم
  // یک هفته است که شبا دیر میخوابم و مشغول تکمیل این پروژه هستم
  const SumCart = useSelector(getSumPrductCart);
  return (
    <div className="relative">
      <Dropdown>
        <>
          <Dropdown.Icons id="customize" type="row" text="سبد خرید">
            <MdOutlineShoppingCart size={20} />
          </Dropdown.Icons>
          <Dropdown.Content id="customize">
            <CartItemContent />
          </Dropdown.Content>
          <Dropdown.Count>
            {SumCart > 0 && <CircleCount>{SumCart}</CircleCount>}
          </Dropdown.Count>
        </>
      </Dropdown>
    </div>
  );
}

export default CartIcon;
