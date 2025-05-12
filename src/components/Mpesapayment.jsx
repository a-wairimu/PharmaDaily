import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import { useLanguage } from './LanguageContext'; 

// ✅ Translations
const translations = {
  en: {
    heading: "Mpesa Payment",
    processing: "Please wait as we process your payment...",
    phonePlaceholder: "Enter your M-PESA number",
    makePayment: "Make Payment",
    productCost: "Product cost",
  },
  sw: {
    heading: "Lipa na MPesa",
    processing: "Tafadhali subiri tunapochakata malipo yako...",
    phonePlaceholder: "Weka nambari yako ya M-PESA",
    makePayment: "Lipa Sasa",
    productCost: "Gharama ya bidhaa",
  },
};

const Mpesapayment = () => {
  const { product } = useLocation().state || {};
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const { language, switchLanguage } = useLanguage(); 
  const t = translations[language];

  const submit = async (e) => {
    e.preventDefault();

    setMessage(t.processing);

    const data = new FormData();
    data.append('phone', phone);
    data.append('amount', product.product_cost);

    try {
      const response = await axios.post(
        'https://AngelaWairimu5429.pythonanywhere.com/api/mpesa_payment',
        data
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Payment failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      
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
        <h1 className="text-info">{t.heading}</h1>
        <div className="col-md-6 card shadow p-3">
          <b className="text-success">{message}</b>
          <h4 className="text-success">{product?.product_name}</h4>
          <form onSubmit={submit}>
            <h4>
              {t.productCost}: {product?.product_cost}
            </h4>
            <input
              type="number"
              placeholder={t.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              required
            />
            <br />
            <button className="btn btn-success">{t.makePayment}</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mpesapayment;
