import {
  CircularProgress,
  Divider,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { createContext, useContext, useState } from "react";
import CodeAPList from "../Components/HomeComponents/CodeAPList";
// import contacts from "../contact.json";
import contacts from "../REFI.json";
import { AiOutlineSearch } from "react-icons/ai";
import { COLORS } from "../COLORS";
import { useNavigate, useParams } from "react-router-dom";

export const HomeContext = createContext();
const filters = [
  { label: "Nom", value: "name" },
  { label: "Code AP", value: "APCode" },
];
const Squads = ["Toutes", "CBD", "SODA", "ITPS", "Autre"];

const Header = () => {
  const { handleSquadChange, Squad, filteredDatas } = useContext(HomeContext);

  return (
    <Stack direction="row" alignItems="center" spacing={2} my={2} px={4}>
      <Box flexGrow={1}>
        <Typography color="GrayText" variant="h5" fontWeight={550}>
          Application par Squad
        </Typography>
        <Typography mt={1} color="GrayText" variant="body1">
          {filteredDatas.length + " Eléments"}
        </Typography>
      </Box>
      <TextField
        sx={{ minWidth: 290 }}
        size="small"
        label="Recherche"
        placeholder="Code ap ou Nom d'application"
        InputProps={{
          endAdornment: <AiOutlineSearch size={25} color={COLORS.green} />,
        }}
        autoFocus
      />

      <TextField select label="Trier par" value="name" size="small">
        {filters.map((filter, index) => (
          <MenuItem key={index} value={filter.value}>
            {filter.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Squad"
        value={Squad}
        size="small"
        onChange={handleSquadChange}
      >
        {Squads.map((squad) => (
          <MenuItem key={squad} value={squad}>
            {squad}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
};

const Home = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [filteredDatas, setFilteredDatas] = useState(contacts);
  const [selectedItem, setselectedItem] = useState(id !== undefined);
  const [Squad, setSquad] = useState("Toutes");
  const [loading, setloading] = useState(false);

  function filterBySquad(squad) {
    if (squad === "Toutes") return setFilteredDatas(contacts);
    let newState = contacts.filter((data) => data.Squad === squad);
    setFilteredDatas(newState);
  }

  function handleSquadChange(e) {
    setloading(true);
    console.log("e.target.value", e.target.value);
    setSquad(e.target.value);
    filterBySquad(e.target.value);
    setloading(false);
  }

  function describeApplication(application) {
    setselectedItem(application);
    navigate("?code=" + application.CODE_AP);
  }

  function closeApplicationDescription() {
    setselectedItem(undefined);
  }

  return (
    <HomeContext.Provider
      value={{
        filteredDatas,
        selectedItem,
        handleSquadChange,
        Squad,
        describeApplication,
        closeApplicationDescription,
      }}
    >
      <Stack>
        <Header />
        <Divider />

        {loading ? (
          <Box py={10} flex={1} textAlign="center">
            <CircularProgress size={100} color="success" />
          </Box>
        ) : (
          <CodeAPList datas={filteredDatas} />
        )}
      </Stack>
    </HomeContext.Provider>
  );
};

export default Home;
