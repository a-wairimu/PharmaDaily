import { useState } from "react";

const Footer = () => {
  const [language, setLanguage] = useState("en");

  const t = {
    en: {
      aboutUs: "About Us",
      aboutText: "Get products to cure or manage a variety of health conditions on PharmaDaily! The best online Pharmacy around!",
      reachUs: "Reach Us Out",
      emailPlaceholder: "Enter your email",
      commentPlaceholder: "Leave a comment",
      send: "Send Message",
      connect: "Connect With Us",
      deliveryEmail: "Our Email for product delivery",
      tagline: "PharmaDaily! The best, fastest and most conveniently available products around!",
    },
    sw: {
      aboutUs: "Kuhusu Sisi",
      aboutText: "Pata bidhaa za kutibu au kudhibiti hali mbalimbali za kiafya kwenye PharmaDaily! Duka bora mtandaoni la dawa!",
      reachUs: "Wasiliana Nasi",
      emailPlaceholder: "Weka barua pepe yako",
      commentPlaceholder: "Acha maoni yako",
      send: "Tuma Ujumbe",
      connect: "Tufuate Mtandaoni",
      deliveryEmail: "Barua pepe yetu ya uwasilishaji bidhaa",
      tagline: "PharmaDaily! Bidhaa bora, kwa haraka na kwa urahisi popote ulipo!",
    },
  };

  return (
    <div>
      <section className="row mt-4 footer-background-color">
        <div className="col-md-4 text-left text-light">
          <h5 className="p-2 text-center text-info">{t[language].aboutUs}</h5>
          <p>{t[language].aboutText}</p>
        </div>

        <div className="col-md-4 text-light">
          <h5 className="p-2 text-center text-info">{t[language].reachUs}</h5>
          <input className="form-control" type="email" placeholder={t[language].emailPlaceholder} />
          <br />
          <textarea className="form-control" rows="7" placeholder={t[language].commentPlaceholder}></textarea>
          <br />
          <input type="submit" value={t[language].send} className="btn btn-primary" />
        </div>

        <div className="col-md-4">
          <h4 className="text-center text-info">{t[language].connect}</h4>
          <br />
          <a href="https://facebook.com">
            <img src="images/facebook_5.jpg" alt="Facebook" className="socialspictures" />
          </a>
          <a href="https://instagram.com">
            <img src="images/instagram.jpg" alt="Instagram" className="socialspictures" />
          </a>
          <h4 className="text-center text-info">{t[language].deliveryEmail}</h4>
          <p>pharmadaily254@gmail.com</p>
          <p className="text-dark">{t[language].tagline}</p>
        </div>

        {/* Language Selector */}
        <div className="text-center mt-3">
          <select
            className="form-select w-auto mx-auto"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="sw">Swahili</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default Footer;
