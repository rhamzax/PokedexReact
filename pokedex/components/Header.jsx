import Link from "next/link";
import { AiOutlineArrowLeft } from 'react-icons/ai';


const Header = ({isPokemon}) => {
  return (
    <header
      className={`bg-red-400 p-2 sticky top-0 z-50 flex ${
        isPokemon ? "justify-between" : "justify-end"
      } items-center`}
    >
      {isPokemon && (
        <Link href="/">
          <a>
            <h1 className="text-2xl text-white">
              <AiOutlineArrowLeft />
            </h1>
          </a>
        </Link>
      )}

      <Link href="/">
        <a>
          <h1 className="text-2xl text-right text-white">PokéDex</h1>
        </a>
      </Link>
    </header>
  );
};

export default Header;
