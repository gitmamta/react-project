import Hero from "../../components/hero/Hero";
import Popular from "../../components/popular/Popular";
import Offer from "../../components/offers/Offer";
import NewCollection from "../../components/newCollections/NewCollections";
import Footer from "../../components/footer/Footer";
import data_product from "../../assets/data";
import all_product from "../../assets/all_product";



export default function Shop(){
    return(


        <>
        
         <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollection/>
            
        </div>
         
        
        
        </>
    )
}