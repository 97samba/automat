import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CodeAPCard from "./CodeAPCard";

const CodeAPList = ({ datas }) => {
  const { id } = useParams();
  useEffect(() => {
    console.log("AP", id);
  }, []);

  const [selectedItem, setselectedItem] = useState(id !== undefined);
  const Left = () => {
    return (
      <Grid container my={4} spacing={2} flex={1}>
        {datas.map((data, index) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={selectedItem ? 12 : 6}
            xl={selectedItem ? 6 : 3}
            lg={3}
            key={index}
          >
            <CodeAPCard codeAp={data} />
          </Grid>
        ))}
      </Grid>
    );
  };
  const Right = () => {
    return (
      <Stack
        flex={1}
        sx={{ borderLeft: 1, borderColor: "lightGray" }}
        p={2}
        display={selectedItem ? "flex" : "none  "}
      >
        <Typography>right </Typography>
      </Stack>
    );
  };
  return (
    <Stack direction="row" flex={1} spacing={2}>
      <Left />
      <Right />
    </Stack>
  );
};

export default CodeAPList;
