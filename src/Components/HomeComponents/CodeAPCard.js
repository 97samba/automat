import {
  ButtonBase,
  Card,
  CardHeader,
  Chip,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { BsFolderFill } from "react-icons/bs";
import { COLORS } from "../../COLORS";

const CodeAPCard = ({ codeAp }) => {
  return (
    // <Link underline="none" href={"/?ap=" + codeAp.code}>
    <Link underline="none" href={"/home/" + codeAp.code}>
      <Paper
        sx={{
          marginBottom: 3,
          boxShadow: "1px 2px 4px 1px #E5E5E5",
          "&:hover": { boxShadow: "1px 1px 5px 2px #E5E5E5", border: 0 },
        }}
        elevation={0}
      >
        <Stack spacing={1} p={2} flex={1}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <BsFolderFill color={COLORS.primary} size={30} />
            <Typography variant="h6" color="GrayText" flexGrow={1}>
              {codeAp.shortName + " - " + codeAp.code}
            </Typography>
            <Stack direction="row" spacing={1}>
              {/* <Chip label={codeAp.criticity} variant="outlined" size="small" /> */}
              <Chip label={codeAp.squad} size="small" />
            </Stack>
          </Stack>
          <Typography noWrap variant="h5" color="GrayText" fontWeight={500}>
            {codeAp.name}
          </Typography>
        </Stack>
      </Paper>
    </Link>
  );
};

export default CodeAPCard;
