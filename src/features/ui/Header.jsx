import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../user/Username";

function Header() {
  return (
    <header className="flex flex-wrap items-center  justify-between border-b border-stone-300 bg-yellow-400 px-4 py-3 font-sans uppercase sm:px-6">
      <Link to="/" className="text-sm tracking-widest  sm:text-base md:text-xl">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
