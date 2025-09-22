export default function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <div className="footer-col1">
          <h1>
            Teknolojik
            <br />
            Yemekler
          </h1>
          <div className="contact-item">
            <img
              src="images\iteration-2-images\footer\icons\icon-1.png"
              alt="adres"
            />
            <p>
              341 Londonderry Road,
              <br />
              Istanbul Türkiye
            </p>
          </div>
          <div className="contact-item">
            <img
              src="images\iteration-2-images\footer\icons\icon-2.png"
              alt="mail"
            />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="contact-item">
            <img
              src="images\iteration-2-images\footer\icons\icon-3.png"
              alt="telefon"
            />
            <p>+90 216 123 45 67</p>
          </div>
        </div>
        <div className="footer-col2">
          <h3>Hot Menu</h3>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div className="footer-col3">
          <h3>Instagram</h3>
          <ul>
            <li>
              <img
                src="iteration-2/footer/insta/li-0.png"
                alt="Instagram post 1"
              />
            </li>
            <li>
              <img
                src="iteration-2/footer/insta/li-1.png"
                alt="Instagram post 2"
              />
            </li>
            <li>
              <img
                src="public/assets/iteration-2/footer/insta/li-2.png"
                alt="Instagram post 3"
              />
            </li>
            <li>
              <img
                src="public/assets/iteration-2/footer/insta/li-3.png"
                alt="Instagram post 4"
              />
            </li>
            <li>
              <img
                src="public/assets/iteration-2/footer/insta/li-4.png"
                alt="Instagram post 5"
              />
            </li>
            <li>
              <img
                src="public/assets/iteration-2/footer/insta/li-5.png"
                alt="Instagram post 6"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-end">
        <div className="end">
          <p>© 2023 Teknolojik Yemekler.</p>
          <p>
            <i className="fa-brands fa-twitter"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}
