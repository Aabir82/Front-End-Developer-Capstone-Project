
import headingLogo from "../../images/Logo.svg";

function Nav() {
    return (
        <>
             <div className="navigation-wrapper">
      

     
        <img
          src={headingLogo}
          alt="little lemon logo"
          className="heading-logo"
        />
      

      {
        <ul
          className= ""
        >
          <li>
            <href href="/home" >
              Home
            </href>
          </li>
          <li>
            <a href="/about" >
              About
            </a>
          </li>
          <li>
            <a href="/menu" >
              Menu
            </a>
          </li>
          <li>
            <a href="/reservations" >
              Reservations
            </a>
          </li>
          <li>
            <a href="/onlineorder" >
              Order Online
            </a>
          </li>
          <li>
            <a href="login" >
              Login
            </a>
          </li>
           </ul>
      }
    </div>
        </>
    )
};

export default Nav;