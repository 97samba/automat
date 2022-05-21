import { IconButton, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { HomeContext } from "../../Pages/Home";
import { MdClose } from "react-icons/md";
import { BsFolderFill, BsThreeDots } from "react-icons/bs";
import { COLORS } from "../../COLORS";
import { Box } from "@mui/system";

const ApplicationViewer = () => {
  const { closeApplicationDescription, selectedItem } = useContext(HomeContext);
  return (
    <Stack
      flex={1}
      sx={{ borderLeft: 1, borderColor: "lightGray" }}
      p={2}
      bgcolor="#F2F2F2"
    >
      <Box position="sticky" top={10} zIndex={10}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton>
            <MdClose
              size={25}
              color="gray"
              onClick={closeApplicationDescription}
            />
          </IconButton>
          <Typography
            variant="h6"
            fontWeight="bold"
            fontSize={17}
            color={COLORS.green}
          >
            {selectedItem.LIBELLE_COURT + " - " + selectedItem.CODE_AP}
          </Typography>
          <BsThreeDots size={25} color="gray" />
        </Stack>
      </Box>
    </Stack>
  );
};

export default ApplicationViewer;
