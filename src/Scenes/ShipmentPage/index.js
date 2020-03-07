import React, { Fragment } from "react";
import AppBar from "../../components/AppBar";
import { Box } from "grommet";
import ContentContainer from "../../components/ContentContainer";
import PreviewProductOrdered from "../../components/PreviewProductOrdered.js";
import SummaryOrdered from "../../components/SummaryOrdered";
import ShippingAddress from "../../components/ShippingAddress";

const ShipmentPage = () => {
  return (
    <Fragment>
      <AppBar />
      <ContentContainer grid gap="medium" columns={["3/4", "1/4"]} pad="xsmall">
        <Box
          className="ordered-info-preview-container"
          pad="medium"
          background={{ color: "white" }}
          round
          direction="column"
          gap="small"
          elevation="xsmall"
        >
          <ShippingAddress />
          <PreviewProductOrdered />
        </Box>
        <SummaryOrdered />
      </ContentContainer>
    </Fragment>
  );
};

export default ShipmentPage;
