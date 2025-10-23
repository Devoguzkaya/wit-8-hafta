import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import icon1 from "/images/iteration-2-images/icons/1.svg";
import icon2 from "/images/iteration-2-images/icons/2.svg";
import icon3 from "/images/iteration-2-images/icons/3.svg";
import icon4 from "/images/iteration-2-images/icons/4.svg";
import icon5 from "/images/iteration-2-images/icons/5.svg";
import icon6 from "/images/iteration-2-images/icons/6.svg";
import food1 from "/images/iteration-2-images/pictures/food-1.png";
import food2 from "/images/iteration-2-images/pictures/food-2.png";
import food3 from "/images/iteration-2-images/pictures/food-3.png";

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
              { src: icon1, alt: "Ramen", label: "Ramen" },
              { src: icon2, alt: "Pizza", label: "Pizza", active: true },
              { src: icon3, alt: "Burger", label: "Burger" },
              { src: icon4, alt: "French fries", label: "French fries" },
              { src: icon5, alt: "Fast food", label: "Fast food" },
              { src: icon6, alt: "Soft drinks", label: "Soft drinks" },
            ].map((item, i) => (
              <a href="#" key={i} className={item.active ? "active" : ""}>
                <img
                  src={item.src}
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
              img: food1,
              title: "Terminal Pizza",
              rating: 4.9,
              count: 200,
              price: "60₺",
            },
            {
              img: food2,
              title: "Position Absolute Acı Pizza",
              rating: 4.9,
              count: 200,
              price: "60₺",
            },
            {
              img: food3,
              title: "useEffect Tavuklu Burger",
              rating: 4.9,
              count: 200,
              price: "60₺",
            },
          ].map((item, i) => (
            <article className="card" key={i}>
              <img
                src={item.img}
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