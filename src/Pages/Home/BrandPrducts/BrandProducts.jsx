import  { useEffect, useState } from 'react';
import BrandProductsCard from './BrandProductsCard.jsx';

const BrandProducts = () => {
    const [brandProduct, setBrandProduct] = useState([]);
          useEffect(() => {
            fetch("BrandProduct.json")
              .then((data) => data.json())
              .then((res) => {
                // console.log(res);
                setBrandProduct(res);
              });
          }, []);
    return (
        <div>
        <h1 className="text-4xl">Daily Needs</h1>
          <div className="flex justify-center gap-20
           flex-wrap">
              {
                  brandProduct.map((product,i)=><BrandProductsCard
                  key={i} product={product}></BrandProductsCard>)
              }
          </div>
      </div>
    );
};

export default BrandProducts;