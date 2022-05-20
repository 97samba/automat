import { Grid, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { HomeContext } from "../../Pages/Home";
import ApplicationViewer from "./ApplicationViewer";
import CodeAPCard from "./CodeAPCard";

const CodeAPList = () => {
  const { filteredDatas, selectedItem } = useContext(HomeContext);

  const Left = () => {
    return (
      <Grid container my={2} spacing={2} flex={1}>
        {filteredDatas.map((data, index) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={selectedItem ? 12 : 6}
            xl={selectedItem ? 6 : 3}
            lg={3}
            key={index}
            flexDirection="column"
            flex={1}
          >
            <CodeAPCard codeAp={data} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Stack
      direction="row"
      flex={1}
      spacing={2}
      ml={4}
      mr={selectedItem ? 0 : 4}
    >
      <Left />
      {selectedItem && <ApplicationViewer />}
    </Stack>
  );
};

export default CodeAPList;
