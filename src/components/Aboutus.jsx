import React, { useState } from 'react';
import Footer from './Footer';

const Aboutus = () => {
  const [language, setLanguage] = useState("en");

  const t = {
    en: {
      title: "About us",
      paragraph:
        "We are a retail pharmaceutical company serving both walk-in and corporate clients. We stock a wide range of quality pharmaceuticals at very competitive prices. We have the best customer service and ensure our clients receive the best from our staff. Products are delivered to customers using 2NK delivery services across the country. Ensure you specify the county in which you want your products to be delivered through our email.",
      missionTitle: "Our Mission",
      mission:
        "To provide pharmacy services that meet utmost international standards and satisfy our clients’ needs through integrity, professionalism, reliability, convenience and accountability.",
      visionTitle: "Our Vision",
      vision: "To be the leading pharmacy services provider in Kenya.",
    },
    sw: {
      title: "Kuhusu Sisi",
      paragraph:
        "Sisi ni kampuni ya dawa ya rejareja inayohudumia wateja wa kawaida na wa kampuni. Tunahifadhi aina nyingi za dawa bora kwa bei nafuu. Tunatoa huduma bora kwa wateja na kuhakikisha kuwa wanapata huduma bora kutoka kwa wafanyakazi wetu. Bidhaa zinapelekwa kwa wateja kupitia huduma za usafirishaji za 2NK kote nchini. Tafadhali taja kaunti unayotaka bidhaa zako zifikishwe kupitia barua pepe yetu.",
      missionTitle: "Dhamira Yetu",
      mission:
        "Kutoa huduma za duka la dawa zinazokidhi viwango vya kimataifa na kukidhi mahitaji ya wateja wetu kwa uadilifu, taaluma, uaminifu, urahisi na uwajibikaji.",
      visionTitle: "Maono Yetu",
      vision: "Kuwa mtoaji bora wa huduma za duka la dawa nchini Kenya.",
    },
  };

  return (
    <div className="row justify-content-center">
      <div className="text-center my-4">
        <h1 className="display-3 text-info">{t[language].title}</h1>
        <select
          className="form-select w-auto mx-auto mt-3"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="sw">Swahili</option>
        </select>
      </div>

      <div className="col-md-6">
        <div className="card shadow p-4 m-3">
          <img src="images/team.jpg" alt="our team" className="img-fluid rounded" />
        </div>
      </div>

      <div className="col-md-6">
        <p>{t[language].paragraph}</p>
        <ul>
          <h2 className="display-6">{t[language].missionTitle}</h2>
          <li>{t[language].mission}</li>
          <h2 className="display-6 mt-4">{t[language].visionTitle}</h2>
          <li>{t[language].vision}</li>
        </ul>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Aboutus;
