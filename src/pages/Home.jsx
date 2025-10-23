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
            {[
              { src: "1.svg", alt: "Ramen", label: "Ramen" },
              { src: "2.svg", alt: "Pizza", label: "Pizza", active: true },
              { src: "3.svg", alt: "Burger", label: "Burger" },
              { src: "4.svg", alt: "French fries", label: "French fries" },
              { src: "5.svg", alt: "Fast food", label: "Fast food" },
              { src: "6.svg", alt: "Soft drinks", label: "Soft drinks" },
            ].map((item, i) => (
              <a href="#" key={i} className={item.active ? "active" : ""}>
                <img
                  src={`/images/iteration-2-images/icons/${item.src}`}
                  alt={item.alt}
                />
                {item.label}
              </a>
            ))}
          </nav>
        </section>

    
        <section className="section-3" id="foods">
          {[
            {
              img: "food-1.png",
              title: "Terminal Pizza",
              rating: 4.9,
              count: 200,
              price: "60₺",
            },
            {
              img: "food-2.png",
              title: "Position Absolute Acı Pizza",
              rating: 4.9,
              count: 200,
              price: "60₺",
            },
            {
              img: "food-3.png",
              title: "useEffect Tavuklu Burger",
              rating: 4.9,
              count: 200,
              price: "60₺",
            },
          ].map((item, i) => (
            <article className="card" key={i}>
              <img
                src={`/images/iteration-2-images/pictures/${item.img}`}
                alt={item.title}
              />
              <h3>{item.title}</h3>
              <div className="fiyat">
                <p>{item.rating}</p>
                <div className="fiyat-sag">
                  <p className="shadow">({item.count})</p>
                  <p className="bold">{item.price}</p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
