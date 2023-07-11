import React, { useReducer, useEffect, useState } from "react";

import headingLogo from "../../images/Logo.svg";
import hamburgerIcon from "../../images/🦆 icon _hamburger menu.svg";
import basketIcon from "../../images/basket .svg";

import "./Nav.css";
import "./Navdesktop.css";
import "./Navtablet.css";

function toggleNav(state, action) {
  if (action.type === "open") {
    return { display: "block", transition: "1s" };
  } else {
    if (action.type === "close") {
      return { display: "none", transition: "1s" };
    }
  }
}

function Nav() {
  const [nav, setNav] = useReducer(toggleNav, { display: "none" });
  const [width, setWidth] = useState(window.innerWidth);

  //Detect screen resize and capture in width state

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const screenSize = (x) => {
    if (x <= 425) {
      return "mobile";
    } else if (x > 425 && x <= 768) {
      return "tablet";
    } else {
      return "desktop";
    }
  };

  return (
    <>
      <div className="navigation-wrapper">
        {screenSize(width) === "mobile" && (
          <div className="navigation-logo">
            <img
              src={hamburgerIcon}
              alt="hamburger-menu-icon"
              onClick={() => setNav({ screen: "mobile", type: "open" })}
            />

            <img src={basketIcon} alt="basket icon" />
          </div>
        )}

        {screenSize(width) !== "mobile" && (
          <img
            src={headingLogo}
            alt="little lemon logo"
            className="heading-logo"
          />
        )}

        {
          <ul
            className={
              screenSize(width) === "mobile"
                ? "navigation-links-mob"
                : screenSize(width) === "tablet"
                ? "navigation-links-tb"
                : "navigation-links-dt"
            }
            style={screenSize(width) === "mobile" ? nav : { display: "flex" }}
          >
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/onlineorder">Order Online</a>
            </li>
            <li>
              <a href="login">Login</a>
            </li>
            {screenSize(width) === "mobile" && (
              <li
                className="menu-close"
                onClick={() => setNav({ type: "close" })}
              >
                x
              </li>
            )}
            <li>
            <img src={basketIcon} alt="basket icon" />
            </li>
          </ul>
        }
       
      </div>
    </>
  );
}

export default Nav;
