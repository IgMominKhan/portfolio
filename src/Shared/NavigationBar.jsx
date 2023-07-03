import { Link } from "react-awesome-slider/dist/navigation";
import { FaEnvelope } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <header className="main-container my-8 md:my-10 lg:my-12 ">
      <nav className="flex justify-between items-center">
        <Link to="/" className="logo">Ig Momin Khan</Link>
        {/* <Link */}
        {/*   to="mailto:mominkhan8991@gmail.com" */}
        {/*   className="text-xl font-bold text-clr-secondary font-rock hidden lg:flex items-center gap-2 mr-auto ms-14" */}
        {/* > */}
        {/*   <FaEnvelope /> mominkhan8991@gmail.com */}
        {/* </Link> */}
        <button className="hireme">HIRE ME</button>
      </nav>
    </header>
  );
};

export default NavigationBar;
