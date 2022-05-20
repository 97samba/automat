import {
  Box,
  MenuItem,
  Stack,
  Typography,
  Button,
  Avatar,
  Divider,
  Chip,
} from "@mui/material";
import React from "react";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import {
  AiOutlineCloudServer,
  AiOutlineCode,
  AiOutlineSearch,
  AiOutlineHome,
} from "react-icons/ai";
import { COLORS } from "../COLORS";

const drawerWidth = 80;
const menuBarItems = [
  {
    label: "Acceuil",
    icon: <AiOutlineHome size={25} color={COLORS.green} />,
  },
  {
    label: "Applications",
    icon: <HiOutlineDocumentSearch size={25} color={COLORS.green} />,
  },
  {
    label: "Cloud",
    icon: <AiOutlineCloudServer size={25} color={COLORS.green} />,
  },

  {
    label: "Automatisation",
    icon: <AiOutlineCode size={25} color={COLORS.green} />,
  },
];

const NavBar = () => {
  return (
    <Stack direction="row" alignItems="center" mx={4} my={2}>
      <Stack flexGrow={1} direction="row" spacing={2}>
        <Button color="success">Create</Button>
      </Stack>
      <AiOutlineSearch size={20} color="gray" />
      <Avatar sx={{ ml: 2 }} />
    </Stack>
  );
};
const SideBar = () => {
  const MenuIconOnly = ({ index, item }) => {
    return (
      <Stack
        sx={{
          borderRight: item.label === "Applications" && 3,
          borderColor: COLORS.green,
          alignItems: "center",
        }}
      >
        <MenuItem
          key={index}
          disableGutters
          sx={{
            p: 0,
            mx: 1.6,
            borderRadius: 2,
          }}
        >
          <Stack flex={1} p={2} alignItems="center" spacing={1}>
            {item.icon}
          </Stack>
        </MenuItem>
      </Stack>
    );
  };
  const WideMenuIcon = ({ index, item }) => {
    return (
      <MenuItem
        key={index}
        disableGutters
        sx={{
          borderRight: item.label === "Applications" && 3,
          borderColor: COLORS.green,
          width: drawerWidth,
          p: 0,
        }}
      >
        <Stack flex={1} p={1} alignItems="center" spacing={1}>
          {item.icon}
          <Typography variant="body2" fontWeight={555} color="GrayText">
            {item.label}
          </Typography>
        </Stack>
      </MenuItem>
    );
  };
  return (
    <Stack sx={{ borderRight: 1, borderColor: "#E2E2E2" }}>
      <Box position="sticky" top={10}>
        <Stack textAlign="center" my={3} p={1}>
          <Chip label="IOPS" color="success" size="small" />
        </Stack>
        <Stack width={drawerWidth} alignItems="center" spacing={3} flexGrow={1}>
          {menuBarItems.map((item, index) => (
            //   <WideMenuIcon index={index} item={item} />
            <MenuIconOnly index={index} item={item} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

const Layout = ({ children }) => {
  return (
    <Stack direction="row" flex={1} mt={-1}>
      <SideBar />
      <Box flex={1}>
        <Stack>
          <NavBar />
          <Divider light />
        </Stack>
        {children}
      </Box>
    </Stack>
  );
};

export default Layout;
