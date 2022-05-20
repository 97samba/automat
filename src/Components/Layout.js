import {
  Box,
  MenuItem,
  Stack,
  Typography,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import React from "react";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import {
  AiOutlineCloudServer,
  AiOutlineCode,
  AiOutlineSearch,
} from "react-icons/ai";

const menuBarItems = [
  {
    label: "Applications",
    icon: <HiOutlineDocumentSearch size={35} color="357be3 " />,
  },
  {
    label: "Cloud",
    icon: <AiOutlineCloudServer size={35} color="357be3" />,
  },

  {
    label: "Automatisation",
    icon: <AiOutlineCode size={35} color="357be3" />,
  },
];

const NavBar = () => {
  return (
    <Stack direction="row" alignItems="center" mx={4} my={2}>
      <Stack flexGrow={1} direction="row" spacing={2}>
        <Button>Upload</Button>
        <Button color="secondary">Create</Button>
      </Stack>
      <AiOutlineSearch size={20} color="gray" />
      <Avatar sx={{ ml: 2 }} />
    </Stack>
  );
};
const SideBar = () => {
  return (
    <Stack sx={{ borderRight: 1, borderColor: "#E2E2E2" }}>
      <Stack textAlign="center" mb={5} pt={2}>
        <Typography variant="h3" color="primary">
          L
        </Typography>
      </Stack>
      <Stack width={130} alignItems="center" spacing={1} flexGrow={1}>
        {menuBarItems.map((item, index) => (
          <MenuItem
            key={index}
            disableGutters
            sx={{
              borderRight: item.label === "Applications" && 3,
              borderColor: "#357be3",
              width: 130,
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
        ))}
      </Stack>
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
