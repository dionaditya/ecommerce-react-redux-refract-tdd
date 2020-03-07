import React from "react";
import {
    Box,
    Text,
    Grid,
    Button,
  } from "grommet";
  
const SummaryOrdered = () => {
    
  return (
    <Box
      className="summary-ordered-container"
      pad="medium"
      background={{ color: "white" }}
      elevation="xsmall"
      round
      gap="xsmall"
      style={{
        width: "100%",
        maxHeight: "300px",
        position: "relative"
      }}
    >
      <Text className="summary-ordered-title" size="large">
        Ringkasan
      </Text>
      <hr />
      <div
        className="summary-ordered-info-container"
        style={{
          display: "grid",
          gridAutoRows: "20px",
          gridGap: "20px",
          position: "relative",
          height: "150px"
        }}
      >
        <Grid
          className="summary-ordered-info-total-price"
          columns={{
            count: 2,
            size: "auto"
          }}
          gap="medium"
        >
          <Text>Harga Bayar</Text>
          <Text>Rp. 150.000</Text>
        </Grid>
        <Grid
          className="summary-ordered-info-shipping-price"
          columns={{
            count: 2,
            size: "auto"
          }}
          gap="medium"
        >
          <Text>Biaya ongkir</Text>
          <Text>Rp. 100.000</Text>
        </Grid>
        <Grid
          className="summary-ordered-info-total-amount"
          columns={{
            count: 2,
            size: "auto"
          }}
          gap="large"
          style={{
            position: "absolute",
            bottom: 0
          }}
        >
          <Text>
            <strong>Biaya total</strong>
          </Text>
          <Text align="right">
            <storng>Rp. 100.000</storng>
          </Text>
        </Grid>
      </div>
      <Button
        className="action-button-checkout"
        label="Checkout"
        size="xlarge"
        primary
        style={{
          position: "absolute",
          left: 20,
          width: "90%",
          bottom: 20
        }}
      />
    </Box>
  );
};

export default SummaryOrdered;
