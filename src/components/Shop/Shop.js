import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb } from "../../utilities/fakedb";
import "./Shop.css";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart(products);
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // products to be rendered on the UI
  const [displayProducts, setDisplayProducts] = useState([]);
  const size = 10;
  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${currentPage}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.result);
        setDisplayProducts(data.result);
        const pageCount = data.productsTotal;
        setPage(Math.ceil(pageCount / size));
      });
  }, [currentPage]);

  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    // save to local storage (for now)
    addToDb(product.key);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayProducts(matchedProducts);
  };

  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div style={{ width: "200px", textAlign: "center" }}>
        <h1 className="name">Farhan Elias</h1>
      </div>
      <div className="search-container">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Product"
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="btn-regular">Review Your Order</button>
            </Link>
          </Cart>
        </div>
      </div>

      <div className="buttons">
        {[...Array(page).keys()].map((keys) => (
          <button
            key={keys}
            className={currentPage === keys ? "btn-color" : ""}
            onClick={() => handlePage(keys)}
          >
            {keys + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Shop;
