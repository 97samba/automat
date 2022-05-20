import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import CodeAPList from "../Components/HomeComponents/CodeAPList";
import contacts from "../contact.json";

const Header = () => {
  const filters = [
    { label: "Nom", value: "name" },
    { label: "Code AP", value: "APCode" },
  ];
  return (
    <Stack direction="row" alignItems="center">
      <Typography color="GrayText" variant="h5" fontWeight={550} flexGrow={1}>
        Application par Squad
      </Typography>
      <FormGroup row sx={{ mx: 2 }}>
        <FormControlLabel
          control={<Checkbox size="small" defaultChecked />}
          label="CBD"
        />
        <FormControlLabel control={<Checkbox size="small" />} label="ITPS" />
        <FormControlLabel control={<Checkbox size="small" />} label="SODA" />
      </FormGroup>
      <TextField select label="Trier par" value="name" size="small">
        {filters.map((filter, index) => (
          <MenuItem key={index} value={filter.value}>
            {filter.label}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
};

const Home = () => {
  const datas = [
    {
      code: "AP25161",
      name: "Base des interactions",
      criticity: "C1 Serious",
      squad: "CBD",
      shortName: "GREG",
    },
    {
      code: "AP11695",
      name: "Data Management Tool",
      criticity: "C3 moderate",
      squad: "CBD",
      shortName: "DMT",
    },

    {
      code: "AP24244",
      name: "Tracabilité de la distribution & production métier",
      criticity: "C3 moderate",
      squad: "CBD",
      shortName: "BASETRACE",
    },
    {
      code: "AP24646",
      name: "Datahub Distributed Decision",
      criticity: "C3 moderate",
      squad: "CBD",
      shortName: "D3",
    },
  ];

  return (
    <Stack p={5}>
      <Header />
      <CodeAPList datas={contacts} />
    </Stack>
  );
};

export default Home;
