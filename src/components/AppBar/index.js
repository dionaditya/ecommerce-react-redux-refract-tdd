import React, { Fragment } from "react";
import { Header, Button, Box, Menu, Anchor, Nav } from "grommet";
import { Home } from "grommet-icons";

const items = [
  { label: "HTML", href: "#" },
  { label: "JS", href: "#" },
  { label: "CSS", href: "#" },
  { label: "REACT", href: "#" }
];

const AppBar = () => {
  return (
    <Header background="brand" pad="small" elevation="medium">
      <Button icon={<Home />} />
      <Box direction="row-responsive" justify="center">
        <Nav
          direction="row"
          justify="center"
          align="center"
          style={{
            marginRight: "2em"
          }}
        >
          {items.map(item => (
            <Anchor
              href={item.href}
              label={item.label}
              key={item.label}
              style={{
                color: "white"
              }}
            />
          ))}
        </Nav>
        <Menu
          dropProps={{ align: { top: "bottom", left: "left" } }}
          label="Sign in"
          items={[
            { label: "Sign in", onClick: () => {} },
            { label: "Sign up", onClick: () => {} }
          ]}
        />
      </Box>
    </Header>
  );
};

export default AppBar;
