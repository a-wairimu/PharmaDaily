import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import ImageCarousel from "./Carousel";


const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
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

  return (
    <div className="container">
      <ImageCarousel />
      <h3 className="text1">Drugs Available</h3>

      {loading && <div className="text-info">{loading}</div>}
      {error && <div className="text-danger">{error}</div>}

      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-3 mb-4 d-flex align-items-stretch">
            <div className="card">
              <img className="product_img mt-2" src={img_url + product.product_photo} alt={product.product_name} />
              <div className="card-body">
                <h5>{product.product_name}</h5>
                <p className="text-muted">{product.product_description.slice(0, 65)}</p>
                <b className="text-danger">{product.product_cost} KES</b>
                <br />
                <button className="btn btn-info mt-2" onClick={() => navigate("/makepayment", { state: { product } })}>
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Getproducts;
