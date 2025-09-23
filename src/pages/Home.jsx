import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="section-1">
          <article className="main-section-left">
            <div>
              <h1>
                Özel <br />
                Lezzetus
              </h1>
              <p>Position:Absolute Acı Burger</p>
              <Link to="/order">Sipariş Ver</Link>
            </div>
          </article>

          <div className="main-section-right">
            <article className="main-section-right-top">
              <h1>
                Hackathlon
                <br />
                Burger Menü
              </h1>
              <Link to="/order">Sipariş Ver</Link>
            </article>

            <article className="main-section-right-bot">
              <h1>
                <span className="redtext">Çooooook</span> hızlı
                <br />
                npm gibi kurye
              </h1>
              <Link to="/order">Sipariş Ver</Link>
            </article>
          </div>
        </section>

        <section className="section-2">
          <div>
            <h2>en çok paketlenen menüler</h2>
            <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
          </div>
          <nav className="nav-2">
            <a href="#">
              <img src="/images/iteration-2-images/icons/1.svg" alt="Ramen" />
              Ramen
            </a>
            <a href="#" className="active">
              <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" />
              Pizza
            </a>
            <a href="#">
              <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" />
              Burger
            </a>
            <a href="#">
              <img
                src="/images/iteration-2-images/icons/4.svg"
                alt="French fries"
              />
              French fries
            </a>
            <a href="#">
              <img
                src="/images/iteration-2-images/icons/5.svg"
                alt="Fast food"
              />
              Fast food
            </a>
            <a href="#">
              <img
                src="/images/iteration-2-images/icons/6.svg"
                alt="Soft drinks"
              />
              Soft drinks
            </a>
          </nav>
        </section>

        <section className="section-3" id="foods">
          <article className="card">
            <img
              src="/images/iteration-2-images/pictures/food-1.png"
              alt="Terminal Pizza"
            />
            <h3>Terminal Pizza</h3>
            <div className="fiyat">
              <p>4.9</p>
              <div className="fiyat-sag">
                <p className="shadow">(200)</p>
                <p className="bold">60₺</p>
              </div>
            </div>
          </article>

          <article className="card">
            <img
              src="/images/iteration-2-images/pictures/food-2.png"
              alt="Position Absolute Acı Pizza"
            />
            <h3>Position Absolute Acı Pizza</h3>
            <div className="fiyat">
              <p>4.9</p>
              <div className="fiyat-sag">
                <p>(200)</p>
                <p className="bold">60₺</p>
              </div>
            </div>
          </article>

          <article className="card">
            <img
              src="/images/iteration-2-images/pictures/food-3.png"
              alt="useEffect Tavuklu Burger"
            />
            <h3>useEffect Tavuklu Burger</h3>
            <div className="fiyat">
              <p>4.9</p>
              <div className="fiyat-sag">
                <p>(200)</p>
                <p className="bold">60₺</p>
              </div>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
