// import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";

function HomeScreen() {
  //replacing react useState and fetch request with redux apiSlice
  const { data: products, isLoading, error } = useGetProductsQuery();
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(`/api/products`);
  //     const resData = await res.json();
  //     setProducts(resData);
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              // column is responsive and sm screens take 12 columns on md takes 6 screens lg takes 4 xl takes 3 screens
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}

export default HomeScreen;
