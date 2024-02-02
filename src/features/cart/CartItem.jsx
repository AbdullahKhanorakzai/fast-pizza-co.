import { useSelector } from "react-redux";
import { formatCurrency } from "../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQunatity from "./UpdateItemQunatity";
import { getCurrentPizzaQunatityByID } from "./cartSlice";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentPizzaQuantity = useSelector(
    getCurrentPizzaQunatityByID(pizzaId),
  );

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQunatity
          pizzaId={pizzaId}
          currentQunatity={currentPizzaQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
