import React from "react";
import { Box, Text, Button } from "grommet";

const SummaryCart = () => {
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
        maxHeight: "450px",
        position: "relative"
      }}
    >
      <Text className="summary-ordered-title" size="large">
        Ringkasan
      </Text>
      <hr />
      <div className="summary-ordered-info-container">
        <Box
          className="summary-ordered-info-total-item"
          direction="row"
          gap="xlarge"
        >
          <Text>Item</Text>
          <Text>6 buah</Text>
        </Box>
        <Box
          className="summary-ordered-info-total-prie"
          direction="row"
          gap="xlarge"
        >
          <Text>Total</Text>
          <Text>Rp. 100.000</Text>
        </Box>
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

export default SummaryCart;
