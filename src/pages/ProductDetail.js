import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId); // will log the segment after /product-detail/<productId>

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
