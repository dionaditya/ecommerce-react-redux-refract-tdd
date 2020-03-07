import React from "react";
import { Tab, Tabs, Text, Box } from "grommet";
import {CircleInformation} from 'grommet-icons'

const TabNavigation = () => {
  return (
    <Box justify="start" >
         <Tabs justify="start" margin="20px">
      <Tab
        title="Tab 1"
      >
        <Box margin="20px" pad="xsmall">
            <Text margin="20px">Tab 1</Text>
        </Box>
      </Tab>
      <Tab
        title="Tab 1"
      >
        <Box margin="20px" pad="xsmall">
            <Text margin="20px">Tab 2</Text>
        </Box>
      </Tab>
      <Tab
        title="Tab 1"
      >
        <Box margin="20px" pad="xsmall">
            <Text margin="20px">Tab 3</Text>
        </Box>
      </Tab>
      <Tab
        title="Tab 1"
      >
        <Box margin="20px" pad="xsmall">
            <Text margin="20px">Tab 4</Text>
        </Box>
      </Tab>
    </Tabs>
    </Box>
   
  );
};

export default TabNavigation;
