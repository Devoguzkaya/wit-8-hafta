// src/components/Header.jsx
import { Link, NavLink } from "react-router-dom";

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
                <button className="btn">ACIKTIM</button>
              </div>
              <nav className="nav-1">
                <a href="#">
                  <img
                    src="\images\iteration-2-images\icons\1.svg"
                    alt="Kore mutfağı"
                  />
                  YENİ! Kore
                </a>
                <a href="#">
                  <img
                    src="\images\iteration-2-images\icons\2.svg"
                    alt="Pizza"
                  />
                  Pizza
                </a>
                <a href="#">
                  <img
                    src="\images\iteration-2-images\icons\3.svg"
                    alt="Burger"
                  />
                  Burger
                </a>
                <a href="#">
                  <img
                    src="\images\iteration-2-images\icons\4.svg"
                    alt="Kızartmalar"
                  />
                  Kızartmalar
                </a>
                <a href="#">
                  <img
                    src="\images\iteration-2-images\icons\5.svg"
                    alt="Fast food"
                  />
                  Fast food
                </a>
                <a href="#">
                  <img
                    src="\images\iteration-2-images\icons\6.svg"
                    alt="Gazlı içecek"
                  />
                  Gazlı içecek
                </a>
              </nav>
            </header>
          }
          {/* Örnek minimal logo: */}
          <Link to="/" className="brand">
            Teknolojik Yemekler
          </Link>
        </div>
      </div>
    </header>
  );
}
