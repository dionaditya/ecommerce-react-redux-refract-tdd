import React, { useState, useEffect } from "react";
import AppBar from "../../components/AppBar/index";
import CTA from "../../components/CTABottomNav";
import TabNavigation from "../../components/TabNavigation";

const ProductDetail = () => {
  const [screenSize, setScreenSize] = useState(1386);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  return (
    <div
      style={{
        width: "100%"
      }}
    >
      <AppBar />
      <div
        className="Wrapper"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          height: "100%",
          position: 'relative',
          width: "100%",
          display: "flex",
          maxWidth: `${screenSize - 200}px`,
          paddingRight: "10px",
          paddingLeft: "10px"
        }}
      >
        <div
          className="container"
          style={{
            width: "100%",
            height: "30em",
            border: "2px solid #fafafa",
            borderRadius: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              marginBottom: "10px",
              borderRadius: "10px",
              padding: "10px 10px"
            }}
          >
            <div
              className="container-2-column"
              style={{
                display: "grid",
                gridTemplateColumns: "30% 1fr",
                gridGap: "20px",
                height: "100%",
                margin: "auto",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  background: "#ccc",
                  width: "100%",
                  height: "200px"
                }}
                className="content-photo"
              ></div>

              <div
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "2px",
                  display: "flex",
                  flexDirection: "column"
                }}
                className="content-info"
              >
                <div
                  style={{
                    marginBottom: "5px",
                    flex: 1,
                    alignItems: "center",
                    padding: "0px 20px"
                  }}
                >
                  <h3
                    className="product-title"
                    style={{
                      fontSize: "24px",
                      width: "100%",
                      maxWidth: "50ch"
                    }}
                  >
                    Produt title ini danonao oan dandnanvavnavnasnvsanvlsa
                    nvlsanlvnsalnv lsanvlsanvlbabdaibdi
                  </h3>
                </div>
                <div
                  style={{
                    flex: 3,
                    padding: "0 20px"
                  }}
                >
                  stock: 70
                  <br />
                  variant: 'red yellow'
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              marginBottom: "10px"
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                marginBottom: "10px",
                borderRadius: "10px",
                padding: "10px 10px"
              }}
            >
              <TabNavigation />
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default ProductDetail;
