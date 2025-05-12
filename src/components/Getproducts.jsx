import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import ImageCarousel from "./Carousel";
import { useLanguage } from "./LanguageContext"; 
const translations = {
  en: {
    title: "Drugs Available",
    search: "Search by drug name...",
    purchase: "Purchase Now",
    loading: "Please wait, We are retrieving the products...",
    error: "There was an error fetching products.",
  },
  sw: {
    title: "Dawa Zinazopatikana",
    search: "Tafuta kwa jina la dawa...",
    purchase: "Nunua Sasa",
    loading: "Tafadhali subiri, tunaleta bidhaa...",
    error: "Kumetokea hitilafu kupakua bidhaa.",
  },
};


const Getproducts = () => {
  const { language, switchLanguage } = useLanguage(); 
  const t = translations[language];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const productsPerPage = 8;
  const navigate = useNavigate();
  const img_url = "https://AngelaWairimu5429.pythonanywhere.com/static/images/";

  const getproducts = async () => {
    setLoading("Please wait, We are retrieving the products...");
    try {
      const response = await axios.get("https://AngelaWairimu5429.pythonanywhere.com/api/getproducts");
      setProducts(response.data);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError("There was an error fetching products.");
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  // Filtered products based on search
  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
  
    <div className="container">
      {/* Language Selector */}
    <div className="mb-3 d-flex justify-content-end">
      <select
        value={language}
        onChange={(e) => switchLanguage(e.target.value)}
        className="form-select w-auto"
      >
        <option value="en">English</option>
        <option value="sw">Swahili</option>
      </select>
    </div>
      <ImageCarousel />
      <h3 className="text1">{t.title}</h3>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder={t.search}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset to page 1 on new search
          }}
        />
      </div>

      {loading && <div className="text-info">{t.loading}</div>}
      {error && <div className="text-danger">{t.error}</div>}

      <div className="row">
        {currentProducts.map((product, index) => (
          <div key={index} className="col-md-3 mb-4 d-flex align-items-stretch">
            <div className="card">
              <img className="product_img mt-2" src={img_url + product.product_photo} alt={product.product_name} />
              <div className="card-body">
                <h5>{product.product_name}</h5>
                <p className="text-muted">{product.product_description.slice(0, 65)}</p>
                <b className="text-danger">{product.product_cost} KES</b>
                <br />
                <button className="btn btn-info mt-2" onClick={() => navigate("/makepayment", { state: { product } })}>
                   {t.purchase}
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {filteredProducts.length > productsPerPage && (
        <div className="d-flex justify-content-center my-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`btn mx-1 ${currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Getproducts;
