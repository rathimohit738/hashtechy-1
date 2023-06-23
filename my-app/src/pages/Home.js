import { useEffect, useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./Home.css";
import { UserContext } from "../App";

const Home = () => {
  const [item, setitem] = useContext(UserContext);
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(8);
  const [totalPages, setTotalPages] = useState(1);

  console.log(item, "items");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const totalProducts = response.data;
        const totalPagesCount = Math.ceil(totalProducts.length / perPage);
        setTotalPages(totalPagesCount);

        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;
        const productsData = totalProducts.slice(startIndex, endIndex);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage, perPage]);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const addToCart = (product) => {
    Navigate(`/card/:id`);
    const updatedProductList = item;
    updatedProductList.push(product);
    setitem(updatedProductList);
    console.log(`Product added to cart: ${product}`);
  };
  console.log(item, "skwhrh656");

  return (
    <div className="home-container">
      <Navbar />
      <h2>All Product Listing</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-title">{product.category}</h3>
              <p className="product-description">{product.title}</p>
              <p className="product-price">Price: ${product.price}</p>
              <button
                onClick={() =>
                  addToCart({
                    price: product.price,
                    category: product.category,
                    id: product.id,
                    image: product.image,
                    title: product.title
                  })
                }
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePagination(pageNumber)}
              className={pageNumber === currentPage ? "active" : ""}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Home;