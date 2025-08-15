import menImg from "../../assets/imgsrc/menImg.jpg";
import all_product from "../../assets/all_product";
import "./men.css"
import { useDispatch } from "react-redux";
import { addCart } from "../store/CartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";




export default function Men() {
  const dispatch = useDispatch();

    console.log(all_product.map(p => p.category));

  const mensProducts = all_product.filter(
    (product) => product.category=== "men"
  );

  return (
    <>
      <div className="men-page">
        <h1>FLAT 300 OFF</h1>
        <div className="men-img">
          <img src={menImg} alt=""/>
        </div>
        <hr />
      </div>
      

<div className="men-items">
          {mensProducts.map((element,index) => (
            <div key={element.id} className="men-item">


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
