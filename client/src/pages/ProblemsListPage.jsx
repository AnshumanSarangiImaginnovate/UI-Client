import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import ProblemCards from "../components/problem-cards/ProblemCards";

const ProblemsListPage = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetctProducts = async () =>
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {

          dispatch(setProducts(response.data));
        })
        .catch((err) => {
          console.log(err);
        });

    fetctProducts();
  }, []);
  return (
    <Paper elevation={2}>
      {products.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <ProblemCards
              id={item.id}
              title={item.title}
              description={item.description}
            />
          </React.Fragment>
        );
      })}
    </Paper>
  );
};

export default ProblemsListPage;
