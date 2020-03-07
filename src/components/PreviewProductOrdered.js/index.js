import React, {useState} from "react";
import SelectOptions from "../SelectOptions";
import {
    Box,
    Text,
  } from "grommet";

const PreviewProductOrdered = (rest) => {
  const options = ["one", "two", "three"];
  const [value, setValue] = useState("");

  const handleOptionsShipment = option => {
    setValue(option);
  };

  return (
    <Box
      className="product-ordered-container"
      pad="medium"
      background={{ color: "white" }}
      round
      elevation="xsmall"
      gap="medium"
    >
      <Text size="medium">Nama toko</Text>
      <div
        className="grid-product-ordered-container"
        style={{
          display: "grid",
          gridTemplateColumns: "150px 1fr",
          gridGap: "30px"
        }}
      >
        <div
          className="image-product-ordered"
          style={{
            background: "#ccc",
            height: "100px",
            width: "150px",
            border: "2px solid #ccc",
            borderRadius: "10px"
          }}
        ></div>
        <div
          className="detail-product-ordered"
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Text
            size="medium"
            style={{
              marginBottom: "50px"
            }}
          >
            LCD touchscreen J7 Prime
          </Text>
          <Text>Rp. 15.000</Text>
        </div>
      </div>
      <div
        className="grid-product-ordered-container"
        style={{
          display: "grid",
          gridTemplateColumns: "150px 1fr",
          gridGap: "30px"
        }}
      >
        <div
          className="image-product-ordered"
          style={{
            background: "#ccc",
            height: "100px",
            width: "150px",
            border: "2px solid #ccc",
            borderRadius: "10px"
          }}
        ></div>
        <div
          className="detail-product-ordered"
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Text
            size="medium"
            style={{
              marginBottom: "50px"
            }}
          >
            LCD touchscreen J7 Prime
          </Text>
          <Text>Rp. 15.000</Text>
        </div>
      </div>
      <div
        className="grid-product-ordered-container"
        style={{
          display: "grid",
          gridTemplateColumns: "150px 1fr",
          gridGap: "30px"
        }}
      >
        <div
          className="image-product-ordered"
          style={{
            background: "#ccc",
            height: "100px",
            width: "150px",
            border: "2px solid #ccc",
            borderRadius: "10px"
          }}
        ></div>
        <div
          className="detail-product-ordered"
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Text
            size="medium"
            style={{
              marginBottom: "50px"
            }}
          >
            LCD touchscreen J7 Prime
          </Text>
          <Text>Rp. 15.000</Text>
        </div>
      </div>
      <div
        className="action-product-ordered-ontainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <SelectOptions
          id="tracking-options"
          name="tracking-options"
          placeholder="Pilih metode pengiriman"
          options={options}
          value={value}
          onChange={handleOptionsShipment}
          {...rest}
        />
      </div>
    </Box>
  );
};

export default PreviewProductOrdered;
