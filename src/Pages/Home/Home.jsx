import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import shadow from "../../assets/images/shadow.png";
const Home = () => {
  return (
    <div className="main-container prose-2xl py-20 p36 md:flex">
      <div className="text-clr-secondary font-heading flex-1">
        <h3 className="font-roboto italic mt-0">Hi, I'm</h3>
        <h1 className="!text-[clamp(1.65rem,1.5rem+3vw,3.5rem)]">
          Ig <span className="text-clr-primary">Momin</span> Khan
        </h1>
        <h5 className="uppercase font-roboto italic font-light text-clr-primary md:-mt-8">
          frontend developer
        </h5>
        <div className="flex gap-5 text-center mt-12">
          <button className="hireme !font-roboto  !text-xl lg:w-44">
            Resume
          </button>
          <button className="hireme !font-roboto !text-xl lg:w-44">
            Contact
          </button>
        </div>
      </div>
      <div className="flex-1 not-prose">
        <img src={shadow} alt="" />
        <Link
          to="mailto:mominkhan8991@gmail.com"
          className="text-xl font-bold text-clr-secondary flex flex-row-reverse text-right items-center gap-2 mr-auto "
        >
         mominkhan8991@gmail.com <FaEnvelope /> 
        </Link>
      </div>
    </div>
  );
};

export default Home;
