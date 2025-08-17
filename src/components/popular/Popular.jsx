import "./product.css";
import data_product from "../../assets/data";
import { useDispatch } from "react-redux";
import { addCart } from "../store/CartSlice";

export default function Product() {
const dispatch=useDispatch();
  return (
    <>
      <div className="popular">
        <h1>BUDGET BARGAINS</h1>
       <hr />
        </div>
        <div className="popular-item">
          {data_product.map((element, index) => (
            <div key={element.id} className="element-align">
              <img src={element.image}/>
              <p>{element.name}</p>
              <p className="price">₹{element.old_price}</p>
              <p className="offer">Offer Price: ₹{element.new_price}</p>
              <button type="submit" className="btn btn-warning" onClick={()=>dispatch(addCart(element))}>Add Cart</button>
            </div>
            
          ))}

          
        </div>
     
    </>
  );
}
