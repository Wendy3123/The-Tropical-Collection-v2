import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      //.trim removes whitespace and line terminator characters
      setKeyword("");
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search Products..."
        className="p-1 mr-sm-2 ml-sm-5 "
      ></Form.Control>
      <Button type="submit" variant="outline-light" className="p-1 mx-2">
        Search
      </Button>
    </Form>
  );
}

export default SearchBox;
