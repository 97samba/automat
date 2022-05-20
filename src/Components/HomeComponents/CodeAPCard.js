import { Chip, Link, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { BsFolderFill, BsThreeDots } from "react-icons/bs";
import { COLORS } from "../../COLORS";
import { HomeContext } from "../../Pages/Home";

const CodeAPCard = ({ codeAp }) => {
  const { describeApplication } = useContext(HomeContext);
  function handleOpen(e) {
    e.preventDefault();
    describeApplication(codeAp);
  }
  return (
    // <Link underline="none" href={"/?ap=" + codeAp.code}>
    <Link
      underline="none"
      href={"?code=" + codeAp.CODE_AP}
      onClick={handleOpen}
    >
      <Paper
        sx={{
          marginBottom: 3,
          boxShadow: "1px 2px 4px 1px #E5E5E5",
          "&:hover": { boxShadow: "1px 1px 5px 2px #E5E5E5", border: 0 },
        }}
        elevation={0}
      >
        <Stack p={2} spacing={1}>
          {/**head */}

          <Stack direction="row" justifyContent="space-between">
            <Chip label={codeAp.Squad} size="small" />
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                variant="body1"
                fontSize={17}
                fontWeight={550}
                color={COLORS.green}
              >
                {codeAp.LIBELLE_COURT + " - " + codeAp.CODE_AP}
              </Typography>
              <BsThreeDots color="gray" size={18} />
            </Stack>
          </Stack>

          {/**Body */}
          <Box fontWeight={500}>
            <Typography variant="h6" color="GrayText" noWrap>
              {codeAp.LIBELLE_LONG}
            </Typography>
            <Typography variant="body2" color={COLORS.orange}>
              {codeAp.ENTITE_MOE_NOM.split(" ").splice(0, 2).join(" ")}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <Chip
              variant="outlined"
              sx={{ borderRadius: 2 }}
              label={
                "C" +
                codeAp.CLASSE_DE_SERVICE +
                " " +
                codeAp.CONTINUITY_LEVEL_LIBELLE
              }
              size="small"
            />
            <Chip
              variant="outlined"
              sx={{ borderRadius: 2 }}
              label={codeAp.TYPE_DE_SOLUTION_LIBELLE}
              size="small"
              color="success"
            />
          </Stack>
        </Stack>
      </Paper>
    </Link>
  );
};
//   return (
//     // <Link underline="none" href={"/?ap=" + codeAp.code}>
//     <Link underline="none" href={"/home/" + codeAp.code}>
//       <Paper
//         sx={{
//           marginBottom: 3,
//           boxShadow: "1px 2px 4px 1px #E5E5E5",
//           "&:hover": { boxShadow: "1px 1px 5px 2px #E5E5E5", border: 0 },
//         }}
//         elevation={0}
//       >
//         <Stack spacing={1} p={2} flex={1}>
//           <Stack direction="row" alignItems="center" spacing={2}>
//             {/* <BsFolderFill color={COLORS.green} size={30} /> */}
//             <Chip label={codeAp.Squad} size="small" color="success" />

//             <Typography
//               variant="body1"
//               fontSize={17}
//               color="GrayText"
//               flexGrow={1}
//             >
//               {codeAp.LIBELLE_COURT + " - " + codeAp.CODE_AP}
//             </Typography>
//             {/* <Stack direction="row" spacing={1}>
//               <Chip label={codeAp.Squad} size="small" />
//             </Stack> */}
//           </Stack>
//           <Typography noWrap variant="h6" color="GrayText" fontWeight={500}>
//             {codeAp.LIBELLE_LONG}
//           </Typography>
//         </Stack>
//       </Paper>
//     </Link>
//   );
// };

export default CodeAPCard;
