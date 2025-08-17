import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import cartEmpty from "../../assets/imgsrc/cartEmpty.png";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import {
  removeCart,
  increase,
  decrease,
} from "../../components/store/CartSlice";
import api from "../../api/api";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(increase(id));
  };

  const handleDecrease = (id) => {
    dispatch(decrease(id));
  };

  const totalPrice = cart.products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (cart.products.length > 0) {
      navigate("/address");
    }
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.products.length === 0 ? (
        <div className="cartImg">
          <img src={cartEmpty} alt="" />
          <h1 className="empty-cart">Your cart is empty</h1>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.products.map((product) => (
              <div key={product.id} className="cart-item">
                <div className="cart-product">
                  <img src={product.image} alt="" />
                  <div className="product-name">
                    <p>{product.name}</p>
                  </div>
                </div>

                <div className="cart-quantity">
                  <button
                    onClick={() => handleDecrease(product.id)}
                    className="btn btn-success"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => handleIncrease(product.id)}
                    className="btn btn-success"
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <div className="product-total">
                  <p>₹{product.quantity * product.price}</p>
                </div>
                <div className="btn-2">
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(product.id)}
                  >
                    <MdDelete size={28} color="red" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <h3>Total: ₹{totalPrice}</h3>
            </div>
            <button onClick={handlePlaceOrder} className="btn btn-success">
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
