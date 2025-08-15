import "./kids.css"
import kidImgg from "../../assets/imgsrc/kidImgg.jpg";
import all_product from "../../assets/all_product";
import { useDispatch } from "react-redux";
import { addCart } from "../store/CartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
 
export default function Kids() {
  const dispatch=useDispatch();
    console.log(all_product.map(p => p.category));

  const womenProducts = all_product.filter(
    (product) => product.category=== "kid");

  return (
    <>
      <div className="kid-page">
        <h1>FLAT 300 OFF</h1>
        <div className="kid-img">
          <img src={kidImgg} alt="" style={{height:"200",width:"100%"}}/>
        </div>
        <hr />
      </div>
      


<div className="kid-items">
          {womenProducts.map((element, index) => (
            <div key={element.id} className="kid-item">
              {/* <img src={element.image}/> */}
              <LazyLoadImage src={element.image} alt={element.name} effect="blur"/> 
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
