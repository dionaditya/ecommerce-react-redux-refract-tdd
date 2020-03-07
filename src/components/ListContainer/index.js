import React from 'react'
import {CheckBox, Box, Text} from 'grommet'

const ListContainer = ({children}) => {
    return(
        <Box
          className="list-product-ordered-container"
          pad="medium"
          background={{ color: "white" }}
          round
          direction="column"
          gap="small"
          style={{
            height: "100%",
            background: 'blue'
          }}
          elevation="xsmall"
        >
          <div className="checkbox-all-product-ordered">
            <CheckBox checked={checked} label="all" onChange={onChange} />
          </div>
          <Box
            className="product-ordered-container"
            pad="medium"
            background={{ color: "white" }}
            round
            elevation="xsmall"
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <div
              className="grid-product-ordered-container"
              style={{
                display: "grid",
                gridTemplateColumns: "50px 150px 1fr",
                gridGap: "30px"
              }}
            >
              <div className="checkbox-product-ordered">
                <CheckBox checked={checked} onChange={onChange} />
              </div>
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
              <Box
                className="action-button-subtract-amount-container"
                align="center"
                pad="medium"
              >
                <Button
                  className="action-button-subtract-amount-container"
                  plain={false}
                  size="xsmall"
                  icon={<Subtract />}
                />
              </Box>
              <div className="input-product-ordered-amount-container">
                <input
                  className="input-product-ordered-amount"
                  value="1"
                  type="number"
                  style={{
                    width: "50px",
                    height: 50,
                    textAlign: "center"
                  }}
                />
              </div>
              <Box
                className="action-button-minus-amount-container"
                align="center"
                pad="medium"
              >
                <Button
                  className="action-button-add-amount"
                  plain={false}
                  size="xsmall"
                  icon={<Add />}
                />
              </Box>
            </div>
          </Box>
        </Box>
    )
}

export default ListContainer