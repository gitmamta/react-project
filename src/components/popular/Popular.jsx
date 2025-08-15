import "./product.css";
import data_product from "../../assets/data";

export default function Product() {
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
              <button type="submit" className="btn btn-warning">Add Cart</button>
            </div>
            
          ))}

          
        </div>
     
    </>
  );
}
