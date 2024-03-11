import {Link } from "react-scroll"
import contactImg from "../../assets/contact.png"
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact--page').scrollIntoView({behavior: 'smooth'});
      }}> 
        <img src={contactImg} alt="contactImg" className="desktopMenuImg" />{" "}
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
