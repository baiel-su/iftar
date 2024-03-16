import { Link } from "react-router-dom";
import { ModeToggle } from "../modeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between pb-5 items-center border-b">
      <h1><Link to={'/'}>Iftar</Link></h1>
      <div className="flex items-center gap-5">
        <Link to={"/signUp"}>Sign In</Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
