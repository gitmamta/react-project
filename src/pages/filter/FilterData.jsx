import React from 'react';
import { useSelector } from 'react-redux';

function FilterData() {
  const { allProducts, searchQuery } = useSelector((state) => state.products);

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} width="150" style={{marginTop:'20px'}}/>
            <h4>{product.name}</h4>
            <p>₹{product.new_price}</p>
          </div>
        ))
      ) : (
        <p>No matching products found.</p>
      )}
    </div>
  );
}

export default FilterData;
