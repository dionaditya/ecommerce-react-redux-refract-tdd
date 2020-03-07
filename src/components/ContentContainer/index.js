import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Box, Grid } from "grommet";

const StyledContentContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: ${props => props.screenSize - 150}px;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;
const ContentContainer = ({
  children,
  grid,
  columns,
  flex,
  gap,
  pad,
  direction,
  color
}) => {
  const [screenSize, setScreenSize] = useState(1386);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  switch (true) {
    case grid:
      console.log("grid", grid, columns);
      return (
        <Box
          style={{
            marginBottom: 20
          }}
        >
          <StyledContentContainer screenSize={screenSize}>
            <Grid columns={columns} gap={gap} pad={pad} color={color}>
              {children}
            </Grid>
          </StyledContentContainer>
        </Box>
      );

    case flex:
      console.log("flex", flex);
      return (
        <Box
          style={{
            marginBottom: 20
          }}
        >
          <StyledContentContainer screenSize={screenSize}>
            <Box direction={direction} gap={gap} pad={pad} color={color}>
              {children}
            </Box>
          </StyledContentContainer>
        </Box>
      );

    default:
      console.log("default", flex);
      return (
        <Box
          style={{
            marginBottom: 20
          }}
        >
          <StyledContentContainer screenSize={screenSize}>
            <Box direction="row" gap={gap} pad={pad} color={color}>
              {children}
            </Box>
          </StyledContentContainer>
        </Box>
      );
  }
};

export default ContentContainer;
