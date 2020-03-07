import React from "react";
import { Box } from "grommet";
import ButtonCTA from "../ButtonCTA";

const CTA = () => {
  return (
    <div
      className="CTA"
      style={{
        position: "fixed",
        overflow: "hidden",
        height: "60px",
        width: "100%",
        bottom: 0,
        zIndex: 1000,
        background: 'white',
        display: "flex",
        flexDirection: "row",
        boxShadow: `0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)`
      }}
    >
      <div
        style={{
          flex: 1,
          marginLeft: "100px"
        }}
      >
        Price
      </div>
      <Box 
        gap="medium"
        pad="small"
        justify="center"
        direction="row"
        style={{
          marginRight: 100
        }}

      >
        <ButtonCTA
          primary
          size="large"
          onClick={() => {
            console.log("add to cart");
          }}
          hoverIndicator="light-1"
          pad="small"
          label="Beli"
        />
        
        <ButtonCTA
          size="large"
          onClick={() => {
            console.log("add to cart");
          }}
          hoverIndicator="light-1"
          pad="small"
          label="Add to cart"
        />
      </Box>
    </div>
  );
};

export default CTA;
