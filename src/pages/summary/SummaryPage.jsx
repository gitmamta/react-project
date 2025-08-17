import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./summary.css"

export default function Summary() {
  const navigate = useNavigate();
  const address = useSelector((state) => state.address); // from AddressSlice
  
  const handleBack = () => {
    navigate("/address");
  };

  const handleNext = async () => {
    try {
      const response = await fetch("https://backend-e-comm-90ct.onrender.com/api/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(address),
      });
      if (response.ok) {
        // Optionally you can get response data:
        // const data = await response.json();
        alert("Address saved successfully!");
        navigate("/thankyou");  // update route as needed
      } else {
        alert("Failed to save address.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving address.");
    }
  };

  return (
    <>
      <div className="container-summary">
        <h2 className="heading-h2">Address Summary</h2>
        <div className="summary-content">
          <p><strong>Name: </strong>{address.name}</p>
          <p><strong>street: </strong>{address.street}</p>

          <p><strong>City: </strong>{address.city}</p>

          <p><strong>Pincode: </strong>{address.pincode}</p>

          <p><strong>state: </strong>{address.state}</p>
          <p><strong>Country: </strong>{address.country}</p>
        </div>


        <div className="button-sum">
            <button className="button back" onClick={handleBack}>Edit Address </button>
            <button className="button next" onClick={handleNext}>continue</button>
        </div>
      </div>
    </>
  );
}
