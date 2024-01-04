// import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";

function HomeScreen() {
  const { pageNumber, keyword } = useParams();
  //replacing react useState and fetch request with redux apiSlice
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });
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
      {keyword && (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              // column is responsive and sm screens take 12 columns on md takes 6 screens lg takes 4 xl takes 3 screens
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
}

export default HomeScreen;
