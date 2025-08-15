import "./women.css"
import womenImg from "../../assets/imgsrc/womenImg.jpg";
import all_product from "../../assets/all_product";
import { useDispatch } from "react-redux";
import { addCart } from "../store/CartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

 
export default function Women() {
  const dispatch=useDispatch();
    console.log(all_product.map(p => p.category));

  const womenProducts = all_product.filter(
    (product) => product.category=== "women");

  return (
    <>
      <div className="women-page">
        <h1>FLAT 300 OFF</h1>
        <div className="women-img">
          <img src={womenImg} alt="" style={{height:"200",width:"100%"}}/>
        </div>
        <hr />
      </div>
      


<div className="women-items">
          {womenProducts.map((element, index) => (
            <div key={element.id} className="women-item">
              {/* <img src={element.image}/> */}
              <LazyLoadImage src={element.image} alt={element.name} effect="blur"/> 
              <p>{element.name}</p>
              <p className="price">₹{element.old_price}</p>
              <p className="offer">Offer Price: ₹{element.new_price}</p>
              <button type="submit" className="btn btn-warning"onClick={()=>dispatch(addCart(element))} >Add Cart</button>
            </div>
          ))}
        </div>


    </>
  );
}
