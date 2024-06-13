import React from "react";

import Classes from "../Styles/Footer.module.css";
import footerLogo from "../assets/142.jpeg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>+919991118080</p>
          <p>MadhavTravels8080@gmail.com</p>
          
          <a href="https://www.linkedin.com/in/chandresh-baldaniya-81567926a/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/Chandresh8080">
            <img src={github} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img src={footerLogo} alt="" />
            <p>
              Madhav <span>Travels</span>
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Explore the world from your inbox</h3>
          <p>
            let us inspire your next gateway with new destinations and special
            deals
          </p>

          <div>
            <input type="email" placeholder="email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
