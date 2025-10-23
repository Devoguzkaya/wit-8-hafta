// src/components/Header.jsx
import { Link, NavLink } from "react-router-dom";
import icon1 from "/images/iteration-2-images/icons/1.svg";
import icon2 from "/images/iteration-2-images/icons/2.svg";
import icon3 from "/images/iteration-2-images/icons/3.svg";
import icon4 from "/images/iteration-2-images/icons/4.svg";
import icon5 from "/images/iteration-2-images/icons/5.svg";
import icon6 from "/images/iteration-2-images/icons/6.svg";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__bar">
        <div className="container">
          {
            <header>
              <div className="header-ust">
                <h2>Teknolojik Yemekler</h2>
                <h3>fırsatı kaçırma</h3>
                <h1>
                  KOD ACIKTIRIR
                  <br />
                  PIZZA, DOYURUR
                </h1>
                <button className="btn">
                  <Link to="/order" className="aciktim-button">
                    Acıktım
                  </Link>
                </button>
              </div>
              <nav className="nav-1">
                <a href="#">
                  <img
                    src={icon1}
                    alt="Kore mutfağı"
                  />
                  YENİ! Kore
                </a>
                <a href="#">
                  <img
                    src={icon2}
                    alt="Pizza"
                  />
                  Pizza
                </a>
                <a href="#">
                  <img
                    src={icon3}
                    alt="Burger"
                  />
                  Burger
                </a>
                <a href="#">
                  <img
                    src={icon4}
                    alt="Kızartmalar"
                  />
                  Kızartmalar
                </a>
                <a href="#">
                  <img
                    src={icon5}
                    alt="Fast food"
                  />
                  Fast food
                </a>
                <a href="#">
                  <img
                    src={icon6}
                    alt="Gazlı içecek"
                  />
                  Gazlı içecek
                </a>
              </nav>
            </header>
          }
        </div>
      </div>
    </header>
  );
}
