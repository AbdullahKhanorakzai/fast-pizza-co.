import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotalPrice, getCartTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../utils/helpers";

function CartOverview() {
  const toatalCartQuantity = useSelector(getCartTotalQuantity);
  const toatalCartPrice = useSelector(getCartTotalPrice);

  if (!toatalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6 sm:text-sm md:text-base">
        <span>{toatalCartQuantity} pizzas</span>
        <span>{formatCurrency(toatalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
