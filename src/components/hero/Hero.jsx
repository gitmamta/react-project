import "./hero.css"
import girlImg from "../../assets/imgsrc/girlImg.jpg"
import handIcon from "../../assets/imgsrc/hand_icon.png"
export default function Hero(){
    return(

<>

<div className="hero">
    <div className="hero-left">
        <h3>NEW ARRIAVLS ONLY</h3>
        <h1>SMART SHOPPING </h1>
        <h2>TRUSTED BY MILLIONS</h2>
        
        <div className="button-primary">
            <button type="submit" className="btn btn-primary btn-lg">SHOP NOW</button>
        </div>

    </div>


    <div className="hero-right">
<img src={girlImg} alt="" />
    </div>

</div>


</>


    )
}