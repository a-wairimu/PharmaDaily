import axios from "axios";
import { useState } from "react";
import Footer from "./Footer";
import { useLanguage } from "./LanguageContext";

const translations = {
  en: {
    title: "Add Your Product",
    name: "Enter product name",
    description: "Enter product description",
    price: "Enter product price",
    photo: "Upload product photo",
    submit: "Add Product",
    loading: "Please wait ...",
    error: "Failed to add product. Please try again.",
    selectLang: "Select Language"
  },
  sw: {
    title: "Ongeza Bidhaa Yako",
    name: "Weka jina la bidhaa",
    description: "Weka maelezo ya bidhaa",
    price: "Weka bei ya bidhaa",
    photo: "Pakia picha ya bidhaa",
    submit: "Ongeza Bidhaa",
    loading: "Tafadhali subiri ...",
    error: "Imeshindikana kuongeza bidhaa. Tafadhali jaribu tena.",
    selectLang: "Chagua Lugha"
  }
};

const Addproducts = () => {
  const { language, switchLanguage } = useLanguage();
  const t = translations[language];

  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");
  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(t.loading);
    setMessage("");
    setError("");

    const data = new FormData();
    data.append("product_name", product_name);
    data.append("product_description", product_description);
    data.append("product_cost", product_cost);
    data.append("product_photo", product_photo);

    try {
      const response = await axios.post(
        "https://AngelaWairimu5429.pythonanywhere.com/api/addproduct",
        data
      );
      setLoading("");
      setMessage(response.data.Message);
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");
    } catch (error) {
      setLoading("");
      setError(t.error);
    }
  };

  return (
    <div className="container">
      {/* Language Selector */}
      <div className="text-end mb-3">
        <select
          className="form-select w-auto"
          value={language}
          onChange={(e) => switchLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="sw">Swahili</option>
        </select>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 form-container">
          <h2 className="form-title">{t.title}</h2>

          {loading && <div className="message text-info">{loading}</div>}
          {message && <div className="message text-success">{message}</div>}
          {error && <div className="message text-danger">{error}</div>}

          <form onSubmit={submit}>
            <input
              type="text"
              className="form-control"
              placeholder={t.name}
              value={product_name}
              onChange={(e) => setProductName(e.target.value)}
              required
            />

            <textarea
              className="form-control"
              placeholder={t.description}
              value={product_description}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            ></textarea>

            <input
              type="number"
              className="form-control"
              placeholder={t.price}
              value={product_cost}
              onChange={(e) => setProductCost(e.target.value)}
              required
            />

            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setProductPhoto(e.target.files[0])}
              required
            />

            <button type="submit" className="form-button">
              {t.submit}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Addproducts;
