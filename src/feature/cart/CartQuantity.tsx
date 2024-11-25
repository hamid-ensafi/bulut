import { useSelector } from "react-redux";
import { getSumPrductCart } from "./slice";

function CartQuantity(): React.JSX.Element {
  const SumCart = useSelector(getSumPrductCart);

  return <span>{SumCart}</span>;
}

export default CartQuantity;
