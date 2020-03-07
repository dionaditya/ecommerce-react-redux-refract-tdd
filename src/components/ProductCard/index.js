import React from "react";
import {Box} from 'grommet'
import ButtonCTA from "../ButtonCTA";


const CardProduct = ({data}) => {
  console.log(data)
  const {id, title, price, thumbnail, seller} = data
 
  return (
    <Box
      ckassName="Wrapper"
      elevation="small"
      round
      pad="small"
      style={{
        maxWidth: "250px",
        height: "280px"
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          background: `url(${thumbnail})`,
          flex: 2,
          border: "1px solid transparent",
          borderRadius: "10px"
        }}
        className="logo-content"
      />
      <div
        className="content-container"
        style={{
          flex: 0.5,
          padding: "10px 20px"
        }}
      >
        <div>{title}</div>
        <div className="sub-content-container">
          <div
            className="subcontent"
            style={{
              fontSize: "12px",
              color: "#363636"
            }}
          >
            {title}
          </div>
          <div
            className="subcontent"
            style={{
              fontSize: "12px",
              color: "#363636"
            }}
          >
            {seller}
          </div>
          <div
            style={{
              maringTop: "10px"
            }}
          >
          <div className="price">{price}</div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CardProduct;
