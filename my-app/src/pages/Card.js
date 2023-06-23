import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams, id } from "react-router-dom";
import { UserContext } from "../App";

const Cart = () => {
  const [item, setitem] = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);

  console.log(item, "item12");

  const addToCart = (product) => {
    console.log(item, "kjhjh");
    // const { id } = useParams();
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // If the product already exists in the cart, increase the quantity
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      // If the product doesn't exist in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (productId) => {
    // setCartItems((prevCartItems) =>
    //   prevCartItems.filter((item) => item.id !== productId)
    // );
    Object.keys(item).map((key, value) => {
      console.log(item[value].id, key);
      if (item[value].id === key) {
        item.splice(key, 1);
      }

      console.log(item);
    });

    // (function (key, index) {
    //   if (item[key].id === productId) {
    //   }
    //   console.log(item);
    // });
  };

  // const calculateTotalPrice = () => {
  //   return cartItems.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0
  //   );
  // };

  return (
    <div className="cart-container">
      <h2>Cart Page</h2>
      {item.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {item.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-details">
                <h3 className="cart-title">{item.category}</h3>
                {/* <p className="cart-description">{item.title}</p> */}
                <p className="cart-price">Price: ${item.price}</p>
                {/* <p className="cart-quantity">Quantity: {item.quantity}</p> */}
              </div>
              <div className="cart-buttons">
                <button
                  onClick={() => addToCart(item)}
                  className="increase-btn"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          {/* <p className="total-price">Total Price: ${calculateTotalPrice()}</p> */}
        </div>
      )}
    </div>
  );
};

export default Cart;