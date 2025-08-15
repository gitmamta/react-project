import "./newcollection.css";
import all_product from "../../assets/all_product";
import { addCart } from "../store/CartSlice";
import { useDispatch } from "react-redux";
export default function NewCollection() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="newcollections">
        <h1>NEW COLLECTIONS</h1>
       <hr />
        </div>
        <div className="new-item">
          {all_product.map((element, index) => (
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
