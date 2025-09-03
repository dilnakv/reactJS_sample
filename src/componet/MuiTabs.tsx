import React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
function TabPanel(props: { children?: React.ReactNode; value: number; index: number }) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function MuiTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="secondary" textColor="secondary">
        <Tab label="Tab One" />
        <Tab label="Tab Two" />
        <Tab label="Tab Three" />
      </Tabs>

      <TabPanel value={value} index={0}>
        Content of Tab One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content of Tab Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Content of Tab Three
      </TabPanel>
    </Box>
  );
}
