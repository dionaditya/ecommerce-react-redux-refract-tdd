import React, { Fragment, useEffect } from "react";
import AppBar from "../../components/AppBar/index";
import ListProducts from "../../components/ListProducts";
import CategoryLabel from "../../components/CategoryLabel";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from '../../actions'
import {productsSelector} from '../../selector/'


const Homepage = (props) => {
  const dispatch = useDispatch()
  const {data, loading, error} = useSelector(productsSelector)

  console.log(data, loading, error)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <Fragment>
      <AppBar />
      <div
        className="Wrapper"
        style={{
          padding: "0px 100px"
        }}
      >
        <CategoryLabel category="Rekomendasi hari ini" />
        <ListProducts>
          {data.map((product, i) => {
            return (
              <Link
                to={`/products/${product.category}/${product.id}`}
                style={{
                  color: "black",
                  textDecoration: "none"
                }}
              >
                <ProductCard data={product}/>
              </Link>
            );
          })}
        </ListProducts>
        <CategoryLabel category="Rekomendasi hari ini" />
      </div>
    </Fragment>
  );
};

export default Homepage;
